#!/bin/bash

# Delete transcoder resources
kubectl delete virtualservice.l7mp.io/transcoder-vsvc
kubectl delete target.l7mp.io/websocket-cluster
kubectl delete target.l7mp.io/uds-cluster
kubectl delete deployment.apps/transcoder-deployment
kubectl delete configmap/transcoder-sidecar-config

# Delete worker resources
kubectl delete virtualservice.l7mp.io/worker-svc
kubectl delete target.l7mp.io/udp-cluster
kubectl delete deployment.apps/worker-deployment
kubectl delete configmap/worker-sidecar-config

# Delete gateway resources
kubectl delete virtualservice.l7mp.io/gateway-vsvc