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

## The l7mp data plane

The data plane of the l7mp framework is comprised by a set of l7mp proxy instances. The l7mp proxy supports multiple deployment models; e.g., it can be deployed as an ingress gateway to feed traffic with exotic protocol encapsulations into a Kuberntes cluster, or as a sidecar proxy to expose a legacy UDP/SCTP application to a Kuberntes cluster using a cloud-native protocol.

The l7mp proxy is modeled after [Envoy](https://github.com/envoyproxy/envoy), in that it uses similar abstractions (Listeners, Clusters, etc.), but in contrast to Envoy that is mostly HTTP/TCP-centric, l7mp is optimized for persistent, long-lived UDP-based media and tunneling protocol streams. The l7mp proxy features an extended routing API, which allows to transparently pipe application streams across diverse protocol encapsulations, with automatic and transparent protocol transformation, native support for datagram- and byte-streams, stream multiplexing and demultiplexing, encapsulation/decapsulation, etc.

Considering the strong emphasis on multiprotocol support, the l7mp proxy may actually be closer in nature to `socat(1)` than to Envoy, but it is dynamically configurable via a REST API in contrast to `socat(1)` which is a static CLI tool (in turn `socat` it is much more feature-complete).

The l7mp proxy is written in Javascript/Node.js. This way, it is much simpler and easier to extend than Envoy or `socat`, but at the same time it is also much slower. It does not have to be that way though; an XDP/ebpf-based proxy-acceleration framework is under construction that would enable l7mp to run at hundreds of thousands of packets per second speed.


## The l7mp control plane

The l7mp distribution contains a Kubernetes operator that makes it possible to deploy and configure multiple instances of l7mp as sidecar proxies and service/API gateways, in a framework that can be best described as a multiprotocol service mesh. The operator is currently under construction, more details to follow soon.


## Deployment models

Currently there are two ways to deploy l7mp: either the l7mp proxy is deployed in a standalone mode (e.g., as a gateway or a sidecar proxy) in which case each distinct l7mp proxy instance needs to be configured separately (using a static config file of via the l7mp proxy REST API), or it can be used in conjunction with the l7mp service mesh operator for Kubernetes, which makes it possible to manage possibly large numbers of l7mp proxy instances enjoying the convenience of a high-level Kubernetes API.


## Features

<img src="../assets/images/under-construction.png" alt="Under construction" width="50">

## Contributing

Join the [l7mp slack](https://l7mp.slack.com) or send pull requests to the [l7mp github repo](https://github.com/l7mp/l7mp).
