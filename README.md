# Basic Micro-services

- Monorepo Dependency Management

- set up yarn workplace: multiple package same repo- packages can share code

### Notes

- `kubectl apply -f kubernetes/pod.yaml`
- `kubectl logs service-a -f`
- `kubectl port-forward service-a 5000:5000` (forward a port from your local machine to a port on a service running inside a Kubernetes cluster)
- `kubectl get services`
- `kubectl describe services service-b`
- `get pod -w`
- `delete pod service-a`

### Port

- port for http: 80
- port for https: 443

### Summary

- pod: the smallest unit in K8s
- inside pod is 1 container or more
- deployment: create and manage pods => maintain number of replicas
- service: to allow pods talk to each others. instead of ip address, we can use name
