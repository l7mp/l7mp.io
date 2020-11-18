#!/bin/bash

# Delete configmaps 
kubectl delete configmap dns-config 
kubectl delete configmap l7mp-ingress-gw

# Delete DNS 
kubectl delete service dns 
kubectl delete statefulsets.apps dns

# Delete l7mp ingress 
kubectl delete daemonsets.apps l7mp-ingress-gw