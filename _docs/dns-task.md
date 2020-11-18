---
title: "DNS server Task"
tags: 
 - Service Mesh
 - Task
 - Kubernetes
 - DNS
 - CoreDNS
order: 6
description: "Implement DNS server with l7mp-proxy and l7mp Service Mesh"
---

# DNS server

In this task you will be able to deploy a CoreDNS DNS server in a 
Kubernetes cluster and use resilience and request control through l7mp. 

For the sake of simplicity the DNS server provides a simple `A` record, 
which is looks like this:

```
host.example.com.   IN  A   192.168.1.3
```

## Before you begin

1. Have a Minikube on your machine. 
2. A little knowledge about DNS servers
3. Understand the concepts: [Concepts](./l7mp_getting_started)

## l7mp proxy

For the simple usage of l7mp you do not have to make any changes in your 
cluster to achieve the part of this task. So let's begin. 

### Configmaps

You have to create the configmaps which will contain the l7mp configuration 
and the CoreDNS configuration. 

**CoreDNS**: To accomplish this task, it is sufficient to create these two files 
on each pod that will act as the DNS server.

``` yaml
cat << EOF | kubectl apply -f - 
apiVersion: v1
kind: ConfigMap
metadata:
    name: dns-config
data:
    Corefile: |
        .:100 {
        forward . 8.8.8.8 9.9.9.9
        log
        errors
        }

        example.com:100 {
        file /root/example.db
        log
        errors
        }
    example.db: |
        example.com.        IN  SOA dns.example.com. l7mp.example.com. 2015082541 7200 3600 1209600 3600
        gateway.example.com.    IN  A   192.168.1.1
        dns.example.com.    IN  A   192.168.1.2
        host.example.com.   IN  A   192.168.1.3
        server.example.com. IN  CNAME   host.example.com
EOF
```

**l7mp-ingress**: To make a working setup you have to configure the ingress DaemonSet to
act like the ingress gateway. So you have to define a simple UDP listener which will 
listen on `port 5000` and transfer traffic to the appropriate pod. If you want you 
can create a simple controller-listener for debugging purposes, we recommend to
that.

``` yaml
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: ConfigMap
metadata:
  name: l7mp-ingress-gw
data:
  l7mp-ingress-gw.yaml: |
      admin:
        log_level: info
        log_file: stdout
        access_log_path: /tmp/admin_access.log
      listeners:
        - name: udp-listener
          spec: {protocol: UDP, port: 5000}
          rules:
            - name: rule-0
              match: {op: starts, path: /IP/src_addr, value: <Docker bridge gateway IP> }
              action:
                route:
                  destination: coredns
                  retry: 
                    retry_on: always
                    num_retries: 3
                    timeout: 2000
        - name: controller-listener
          spec: { protocol: HTTP, port: 1234 }
          rules:
            - action:
                route:
                  destination:
                    name: l7mp-controller
                    spec: { protocol: L7mpController }
      clusters:
        - name: coredns
          spec: { protocol: UDP, port: 100 }
          endpoints:
            - name: ep0
              spec: { address: dns-0.dns, port: 100 }
            - name: ep1
              spec: { address: dns-1.dns, port: 100 }
EOF
```
If you look closely to the `clusters` section you will notice the strange 
endpoint addresses. That why because later you will create a *StatefulSet*
with a *Headless service* and in that way you can define the pod's addresses.

### DNS server

You have to create the DNS server with *StatefulSet* and *Headless service.* 
In that way you can define the pods DNS names and with the Kubernetes 
DNS resolve the ingress gateway will find them. 

Because the *CoreDNS* configuration listen on `port 100` you have to attach 
the *Headless service* to that port. 

``` yaml
cat <<EOF | kubectl apply -f - 
apiVersion: v1
kind: Service
metadata:
  name: dns
  labels:
    app: dns
spec:
  clusterIP: None
  selector:
    app: dns
  ports:
    - protocol: UDP
      port: 100
      targetPort: 100
EOF
```

After this you have to create the StatefulSet, which will use the dns-config 
configmap, and set up everything what you need. 

``` yaml
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: dns
  labels:
    app: dns
spec:
  serviceName: dns
  replicas: 2
  selector:
    matchLabels:
      app: dns
  template:
    metadata:
      labels:
        app: dns
    spec:
      containers:
        - name: dns
          image: coredns/coredns
          args: ["-conf", "/root/Corefile"]
          volumeMounts:
            - name: dns-config
              mountPath: "/root"
      volumes:
        - name: dns-config
          configMap:
            name: dns-config
EOF
```

### l7mp ingress

Finally you only have to create a *DaemonSet* which will act like an ingress gateway 
to the cluster. And will use the *l7mp-ingress-gw-config* configmap what you defined 
before. As you can see this DaemonSet will run with `hostNetwork = true` so it will 
automatically use the minikube ip. 

```yaml
cat <<EOF | kubectl apply -f -
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: l7mp-ingress-gw
  labels:
    app: l7mp-ingress-gw
spec:
  selector:
    matchLabels:
      app: l7mp-ingress-gw
  template:
    metadata:
      labels:
        app: l7mp-ingress-gw
    spec:
      volumes:
        - name: l7mp-ingress-gw-config
          configMap:
            name: l7mp-ingress-gw
      containers: 
        - name: l7mp
          image: l7mp/l7mp:latest
          imagePullPolicy: IfNotPresent
          command: [ "node" ]
          args: [ "l7mp-proxy.js", "-c", "config/l7mp-ingress-gw.yaml", "-s", "-l", "info"]
          ports:
            - containerPort: 5000
              protocol: UDP
          volumeMounts:
            - name: l7mp-ingress-gw-config
              mountPath: /app/config
      hostNetwork: true
      dnsPolicy: ClusterFirstWithHostNet
EOF
```

### Test

First, you have to make sure the service is working, so with the `dig` tool you can receive data about a domain name. 

Try this in your terminal: `dig @$(minikube ip) -p 5000 host.example.com` and the output should look like this: 

```
; <<>> DiG 9.16.1-Ubuntu <<>> @172.17.0.3 -p 5000 host.example.com
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 8647
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
; COOKIE: 2902791694e8d9b4 (echoed)
;; QUESTION SECTION:
;host.example.com.		IN	A

;; ANSWER SECTION:
host.example.com.	0	IN	A	192.168.1.3

;; Query time: 36 msec
;; SERVER: 172.17.0.3#5000(172.17.0.3)
;; WHEN: h okt 05 14:59:27 CEST 2020
;; MSG SIZE  rcvd: 89
```

As you can see you got back the `IP` of the requested `Domain name`. 

### Resilience 

The resilience means: the quality of being able to return quickly to a previous good 
condition after problems. So in that case, what if you are deleting a pod with the 
following script while an active name resolution? 

Create a workaround to make name resolution every seconds: 

```
watch -n 1 dig @$(minikube ip) -p 5000 host.example.host
```

Download and run this script. This script only delete an endpoint and 
a pod from your cluster. So the first parameter is the pod name and the 
second is the endpoint name. 

```
curl -LO https://l7mp.io/task/dns-task/delete-endpoint.sh 
chmod u+x delete-endpoint.sh 
./delete-endpoint.sh dns-0 ep0
```

As you can see, the name resolution did not stop and works as before the deletion.

But there is some limitation in the resilience, if you not using l7mp Service Mesh. 
Exactly you now won't able to delete an other active pod and endpoint because the new 
pod what the StatefulSet creates is not registered as an endpoint in l7mp. 

### Request routing 

That means you can restrict the traffic to the DNS server with `l7mp`. 

If you set the `Docker bridge gateway IP` correctly, then you cannot make name 
resolution from different IPs. So test it out. 

You can specify the source IP for `dig` with the `-b` switch, but you have to give 
a real IP. For example, your `eth0` interface's IP will be good. 

If you give out that command `dig @$(minikube ip) -p 5000 -b 10.0.2.15 host.example.com` 
this have to give you an error message. 

```
dig @$(minikube ip) -p 5000 -b 10.0.2.15 host.example.com

; <<>> DiG 9.16.1-Ubuntu <<>> @172.17.0.3 -p 5000 -b 10.0.2.15 host.example.com
; (1 server found)
;; global options: +cmd
;; connection timed out; no servers could be reached
```

### Cleanup

```
curl -LO https://l7mp.io/tasks/dns-task/proxy-cleanup.sh
chmod u+x proxy-cleanup.sh
./proxy-cleanup.sh
```

## l7mp Service Mesh

### Before you begin

First of all you have to setup a Minikube with **l7mp-ingress and operator**, so 
follow this [Minikube](./l7mp_getting_started) guide to achieve it.

If everything up and running you are now able to start this demo. 

### Setup

Like before you have to create the DNS service, which will resolve a simple *A*
record. But in that case you don't have to deal with **StatefulSets** and 
**Headless Service**. The operator will handle this.

This kind of deployment will create a same as before in functionality. 

So just create a simple Deployment with 2 instances of the **DNS server**. Like
that: 

```
kubectl apply -f https://l7mp.io/tasks/dns-task/dns-deployment.yaml
```

So you now only have to expose it out from your cluster, but you will not create
a common Kubernetes service by hand. You will create a **Target** and two 
**VirtualService** object. 

#### Target

As you know, with a Target CRD you can create a "cluster" which will have some kind 
of protocol and a set of endpoints. In this case you have to create a cluster inside 
the l7mp-ingress object and stick the pods to it dynamical.

``` yaml
cat <<EOF | kubectl apply -f -
apiVersion: l7mp.io/v1
kind: Target
metadata:
  name: dns-cluster
spec: 
  selector:
    matchExpressions:
      - key: app
        operator: In
        values:
          - l7mp-ingress
  cluster:
    name: udp-cluster
    spec:
      UDP:
        port: 5000
    endpoints:
      - selector:
          matchLabels:
            app: dns
EOF
```

The **dns-cluster** listen UDP on port 5000 and send the traffic to every pod 
which has `app: dns` label.

#### VirtualServices

With virtual services, you can create listeners who will forward traffic that 
meets the specification to the appropriate endpoints, which in this case are clusters.

First create a listener inside of the pods sidecar. This listener will listen on 
UDP traffic on port 5000 and transfer them to `localhost` on port 100. The 
CoreDNS will listen on that address. 

``` yaml
apiVersion: l7mp.io/v1
kind: VirtualService
metadata:
  name: dns-listener
spec:
  selector:
    matchLabels:
      app: dns
  listener:
    spec:
      UDP:
        port: 5000
    rules:
      - action:
          route:
            destination:
              spec:
                UDP:
                  port: 100
              endpoints:
                - spec: { address: 127.0.0.1 }
            retry:
              retry_on: always
              num_retries: 3
              timeout: 2000
```

After all of this you only have to create the connection with l7mp-ingress and dns pods. 
For this you have to create an other listener which will placed inside of l7mp-ingress 
and forward every traffic from outside of the cluster into dns-cluster which will 
have the pods as endpoints.

``` yaml
apiVersion: l7mp.io/v1
kind: VirtualService
metadata:
  name: gateway
spec:
  selector:
    matchLabels:
      app: l7mp-ingress
  listener:
    spec:
      UDP:
        port: 5000
    rules: 
      - action:
          route:
            destinationRef: /apis/l7mp.io/v1/namespaces/default/targets/dns-cluster
            retry:
              retry_on: always
              num_retries: 3
              timeout: 2000
```

And that's it your own DNS server with l7mp service-mesh are ready to use. You 
will access it on `$(minikube ip):5000`. But if you want to change 
the port number you only have to modify the listener port.

### Test

For testing purpose we recommend using `dig`, but if you want choose another one 
you surely can.

First make one request and see if it's working. The command: 

```
dig @$(minikube ip) -p 5000 host.example.com
```

And you have to see something like that: 

```
; <<>> DiG 9.16.1-Ubuntu <<>> @172.17.0.2 -p 5000 host.example.com
; (1 server found)
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 47748
;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
; COOKIE: 9122076d2f09d198 (echoed)
;; QUESTION SECTION:
;host.example.com.		IN	A

;; ANSWER SECTION:
host.example.com.	0	IN	A	192.168.1.3

;; Query time: 8 msec
;; SERVER: 172.17.0.2#5000(172.17.0.2)
;; WHEN: k nov 17 09:48:14 CET 2020
;; MSG SIZE  rcvd: 89
```

If the test above are successful you have to run it continuously with the 
`watch` command and open an other terminal. 

In the new terminal try to delete one of the dns pods, and see if the 
`dig` command are crash or something. If it is not crash, everything is 
good.

### Cleanup

```
curl -LO https://l7mp.io/tasks/dsn-task/delete.sh
chmod u+x delete.sh
./delete.sh
```

## Recap 

As you can see, you can use both of l7mp proxy and service mesh, but you have to 
consider about the usage. If you want a better resilience you should have to 
us service mesh, but if you only want to use a simple task which is not require 
any complex workaround the simple proxy should do the work for you. 