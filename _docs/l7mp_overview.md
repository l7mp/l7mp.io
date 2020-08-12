---
title: Overview
tags: 
 - jekyll
 - github
order: 1
description: Overview of the basic concepts in l7mp
---

## What is l7mp?

*[L7mp is currently under construction, with many advertised features untested, not working as promised, or completely missing.]*

L7mp is a Layer-7, multiprotocol service proxy and a service mesh framework. The emphasis is on *multiprotocol* support, which lets l7mp to handle lots of transport- and application-layer network protocols natively not just the usual TCP/HTTP, and transparently convert between different protocol encapsulations. The intention is for l7mp to serve as an incubator project to prototype the main service mesh features that are indispensable to support network-intensive legacy/non-HTTP applications seamlessly in Kubernetes.

The distribution contains an *l7mp proxy* component, a programmable proxy that can stitch an arbitrary number of application-level traffic streams together into an end-to-end stream in a protocol-agnostic manner (e.g., you can pipe a UNIX domain socket to a WebSocket stream and vice versa), and a *service mesh* component, in the form of a Kubernetes operator, which can manage a legion of l7mp gateway and sidecar proxy instances seamlessly to enforce a rich set of high-level traffic management and observability policies throughout an entire cluster.

## Data plane: The l7mp proxy

The l7mp proxy is modeled after [Envoy](https://github.com/envoyproxy/envoy), in that it uses similar abstractions (Listeners, Clusters, etc.), but in contrast to Envoy that is mostly HTTP/TCP-centric, l7mp is optimized for persistent, long-lived UDP-based media and tunneling protocol streams. The l7mp proxy features an extended routing API, which allows to transparently pipe application streams across diverse protocol encapsulations, with automatic and transparent protocol transformation, native support for datagram- and byte-streams, stream multiplexing and demultiplexing, encapsulation/decapsulation, etc.

Considering the strong emphasis on multiprotocol support, the l7mp proxy may actually be closer in nature to `socat(1)` than to Envoy, but it is dynamically configurable via a REST API in contrast to `socat(1)` which is a static CLI tool (in turn `socat` it is much more feature-complete).

The l7mp proxy is written in Javascript/Node.js. This way, it is much simpler and easier to extend than Envoy or `socat`, but at the same time it is also much slower. It does not have to be that way though; an XDP/ebpf-based proxy-acceleration framework is under construction that would enable l7mp to run at hundreds of thousands of packets per second speed.

## Control plane: The l7mp service mesh operator

<img src="../assets/images/under-construction.png" alt="Under construction" width="50">

## Features

<img src="../assets/images/under-construction.png" alt="Under construction" width="50">

## Contributing

Join the [l7mp slack](https://l7mp.slack.com) or send pull requests to the [l7mp github repo](https://github.com/l7mp/l7mp).
