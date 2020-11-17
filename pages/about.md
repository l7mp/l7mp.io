---
title: About
permalink: /about/
---

<img src="../assets/images/under-construction.png" alt="Under construction" width="150">

## About

L7mp is an experimental Layer-7, multiprotocol service proxy and a service mesh framework. The emphasis is on multiprotocol support, which lets l7mp to handle lots of transport- and application-layer network protocols natively, not just the usual TCP/HTTP, and transparently convert between different protocol encapsulations. The intention for l7mp is to serve as an incubator project to prototype the main service mesh features that are indispensable to support network-intensive legacy/non-HTTP applications seamlessly in Kubernetes.

The distribution contains an l7mp proxy component and a service mesh operator for Kubernetes. 

The l7mp proxy is a programmable proxy very similar in nature to Envoy. The difference is that the l7mp proxy is purposely built from the bottom-up to support multiprotocol operations, in that it can stitch an arbitrary number of application-level traffic streams together into an end-to-end stream in a protocol-agnostic manner; e.g., you can pipe a UNIX domain socket to a WebSocket stream and vice versa and it should just work as expected. The proxy is written in a high-level language framework, node.js, which makes it particularly easy to extend: adding a new protocol to l7mp is a matter of implementing a custom listener and a cluster, usually about a hundred lines of Javascript code. Meanwhile, a tc/ebpf-based kernel acceleration service is in development to mitigate the Javascript performance tax.

The l7mp service mesh operator can be used to manage a legion of l7mp gateway and sidecar proxy instances seamlessly. It allows to enforce a rich set of high-level traffic management and observability policies throughout an entire cluster, enjoying the convenience of a high-level Kubernetes API, much akin to the Istio or the Service Mesh Interface API.

The l7mp framework is work-in-progress. This means that at any instance of time some features may not work as advertised or may not work at all, and some critical features, including the security API, are left for further development. Yet, l7mp is already capable enough to serve as a demonstrator to get a glimpse into the multiprotocol future of the service mesh concept.


