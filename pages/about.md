---
title: About
permalink: /about/
---

<img src="../assets/images/under-construction.png" alt="Under construction" width="150">

## About

L7mp is a Layer-7, multiprotocol service proxy and a service mesh framework. The emphasis is on multiprotocol support, which lets l7mp to handle lots of transport- and application-layer network protocols natively not just the usual TCP/HTTP, and transparently convert between different protocol encapsulations. The intention is for l7mp to serve as an incubator project to prototype the main service mesh features that are indispensable to support network-intensive legacy/non-HTTP applications seamlessly in Kubernetes.

The distribution contains an l7mp proxy component, a programmable proxy that can stitch an arbitrary number of application-level traffic streams together into an end-to-end stream in a protocol-agnostic manner (e.g., you can pipe a UNIX domain socket to a WebSocket stream and vice versa), and a service mesh component, in the form of a Kubernetes operator, which can manage a legion of l7mp gateway and sidecar proxy instances seamlessly to enforce a rich set of high-level traffic management and observability policies throughout an entire cluster.
