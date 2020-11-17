---
title: Overview
tags: 
 - jekyll
 - github
order: 1
description: Overview of the basic concepts in l7mp
---

<img src="../assets/brand/logo.svg" alt="L7mp logo" width="150"/>

## What is l7mp?

*[L7mp is currently under construction, with many advertised features untested, not working as promised, or completely missing.]*

L7mp is an experimental Layer-7, multiprotocol service proxy and a service mesh framework. The emphasis is on multiprotocol support, which lets l7mp to handle lots of transport- and application-layer network protocols natively, not just the usual TCP/HTTP, and transparently convert between different protocol encapsulations. The intention for l7mp is to serve as an incubator project to prototype the main service mesh features that are indispensable to support network-intensive legacy/non-HTTP applications seamlessly in Kubernetes.

The distribution contains an l7mp proxy component and a service mesh operator for Kubernetes. 

The *l7mp proxy* is a programmable proxy very similar in nature to Envoy. The difference is that the l7mp proxy is purposely built from the bottom-up to support multiprotocol operations, in that it can stitch an arbitrary number of application-level traffic streams together into an end-to-end stream in a protocol-agnostic manner; e.g., you can pipe a UNIX domain socket to a WebSocket stream and vice versa and it should just work as expected. The proxy is written in a high-level language framework, node.js, which makes it particularly easy to extend: adding a new protocol to l7mp is a matter of implementing a custom listener and a cluster, usually about a hundred lines of Javascript code. Meanwhile, a tc/ebpf-based kernel acceleration service is in development to mitigate the Javascript performance tax.

The *l7mp service mesh* operator can be used to manage a legion of l7mp gateway and sidecar proxy instances seamlessly. It allows to enforce a rich set of high-level traffic management and observability policies throughout an entire cluster, enjoying the convenience of a high-level Kubernetes API, much akin to the Istio or the Service Mesh Interface API.

The l7mp framework is work-in-progress. This means that at any instance of time some features may not work as advertised or may not work at all, and some critical features, including the security API, are left for further development. Yet, l7mp is already capable enough to serve as a demonstrator to get a glimpse into the multiprotocol future of the service mesh concept.


## The l7mp data plane

The data plane of the l7mp framework is comprised by a set of l7mp proxy instances. The l7mp proxy supports multiple deployment models; e.g., it can be deployed as an ingress gateway to feed traffic with exotic protocol encapsulations into a Kuberntes cluster, or as a sidecar proxy to expose a legacy UDP/SCTP application to a Kuberntes cluster using a cloud-native protocol.

The l7mp proxy is modeled after [Envoy](https://github.com/envoyproxy/envoy), in that it uses similar abstractions (Listeners, Clusters, etc.), but in contrast to Envoy that is mostly HTTP/TCP-centric, l7mp is optimized for persistent, long-lived UDP-based media and tunneling protocol streams. The l7mp proxy features an extended routing API, which allows to transparently pipe application streams across diverse protocol encapsulations, with automatic and transparent protocol transformation, native support for datagram- and byte-streams, stream multiplexing and demultiplexing, encapsulation/decapsulation, etc.

Considering the strong emphasis on multiprotocol support, the l7mp proxy may actually be closer in nature to `socat(1)` than to Envoy, but it is dynamically configurable via a REST API in contrast to `socat(1)` which is a static CLI tool (in turn `socat` it is much more feature-complete).

The l7mp proxy is written in Javascript/Node.js. This way, it is much simpler and easier to extend than Envoy or `socat`, but at the same time it is also much slower. It does not have to be that way though; a tc/ebpf-based proxy-acceleration framework is under construction that would enable l7mp to run at hundreds of thousands of packets per second speed.


## The l7mp control plane

The l7mp distribution contains a Kubernetes operator that makes it possible to deploy and configure multiple instances of l7mp as sidecar proxies and service/API gateways, in a framework that can be best described as a multiprotocol service mesh. The operator uses the same high-level concepts as most service mesh frameworks (i.e., VirtualServices), but it contains a number of extensions (the Route and the Target custom resources) that allow the user to precisely control the way traffic is routed across the cluster.


## Deployment models

Currently there are two ways to deploy l7mp: either the l7mp proxy is deployed in a standalone mode (e.g., as a gateway or a sidecar proxy) in which case each distinct l7mp proxy instance needs to be configured (using a static config file of via the l7mp proxy REST API), or it is used in conjunction with the l7mp service mesh operator for Kubernetes, which makes it possible to manage possibly large numbers of l7mp proxy instances enjoying the convenience of a high-level Kubernetes API.


## Features

* *Multiprotocol Support:* The main feature we want to support in l7mp is multiprotocol support. Whole l7mp is optimized for persistent, long-lived UDP-based media and tunneling protocol streams, and hence the support for the usual HTTP protocol suite is incomplete as of now, it should be pretty capable as a general purpose multiprotocol proxy and service mesh already, supporting lots of built-in transport and application-layer protocols. Below is a summary of the protocols supported by l7mp and the current status of the implementations.

| Type      | Protocol         | Session ID               | Type            | Role  | Mode             | Re/Lb   | Status  |
| :-------: | :--------------: | :----------------------: | :-------------: | :---: | :--------------: | :-----: | :-----: |
| Remote    | UDP              | IP 5-tuple               | datagram-stream | l/c   | singleton/server | yes/yes | Full    |
|           | TCP              | IP 5-tuple               | byte-stream     | l/c   | server           | yes/yes | Full    |
|           | HTTP             | IP 5-tuple               | byte-stream     | l     | server           | yes/yes | Partial |
|           | WebSocket        | IP 5-tuple + HTTP        | datagram-stream | l/c   | server           | yes/yes | Full    |
|           | JSONSocket       | IP 5-tuple + JSON header | datagram-stream | l/c   | server           | yes/yes | Full    |
|           | SCTP             | IP 5-tuple               | datagram-stream | l/c   | server           | yes/yes | TODO    |
|           | AF\_PACKET       | file desc                | datagram-stream | l/c   | singleton        | no/no   | TODO    |
| Local     | STDIO-fork       | N/A                      | byte-stream     | c     | singleton        | no/no   | Full    |
|           | UNIX/stream      | file desc/path           | byte-stream     | l/c   | server           | yes/yes | Full    |
|           | UNIX/dgram       | file desc/path           | datagram-stream | l/c   | singleton        | no/no   | TODO    |
|           | PIPE             | file desc/path           | byte-stream     | l/c   | singleton        | no/no   | TODO    |
| Transform | Stdio            | N/A                      | byte-stream     | c     | singleton        | yes/no  | Full    |
|           | Echo             | N/A                      | datagram-stream | c     | singleton        | yes/no  | Full    |
|           | Discard          | N/A                      | datagram-stream | c     | singleton        | yes/no  | Full    |
|           | Logger           | N/A                      | datagram-stream | c     | singleton        | yes/no  | Full    |
|           | JSONENcap        | N/A                      | datagram-stream | c     | singleton        | yes/no  | Full    |
|           | JSONDecap        | N/A                      | datagram-stream | c     | singleton        | yes/no  | Full    |

* *Traffic Management:* The traffic management features of l7mp allow fine-grained control over the way traffic flows through the cluster and chained through multiple microservices, load-balancing and session stickiness, ACLs, and resilience features like timeouts and retries. All this in a protocol-agnostic manner. 

| Feature                                         | Status       |
| :---------------------------------------------- | :-----:      |
| Rule-matching: JSONPredicate/JSONPointer        | Stable       |
| Traffic Control: label/content based routing    | Stable       |
| Multiple match-action tables (RuleLists)        | Stable       |
| Resilience features: timeouts, retries          | Stable       |
| Load-balancing: consistent hash or trivial      | Stable       |
| Canary deployments: through routing             | Stable       |
| Demultiplexing: separate ingress/egress streams | Stable       |
| Service chaining: ingress/egress routing        | Stable       |
| Traffic capture in sidecar                      | NONE/WONTFIX |

* *Observability:* l7mp comes with full Prometheus integration, which allows Prometheus to scrape the l7mp sidecar proxies and surface some useful counters and metrics. Note that Prometheus support is experimental now, supporting only a minimal set of metrics (basic ingress/egress counters and session traffic/byte-rate metrics), but the framework is there to add additional metrics simply.

| Feature                                      | Status       |
| :---------------------                       | :----:       |
| Prometheus Integration                       | Experimental |
| Configurable logging                         | Experimental |
| Grafana Service Dashboard                    | TODO         |
| Distributed tracing: through session metrics | Experimental |

* *Security and policy enforcement:* Currently only ACLs are supported through the request routing API, in that match-action rules can be added to the l7mp VirtualService router in order to filter requests based on metadata. 

| Feature                      | Status |
| :---------------------       | :----: |
| TLS/DTLS support             | TODO   |
| Control plane authentication | TODO   |
| Authorization                | TODO   |
| Encryption/decryption        | TODO   |


## Contributing

Join the [l7mp slack](https://l7mp.slack.com) or send pull requests to the [l7mp github repo](https://github.com/l7mp/l7mp).
