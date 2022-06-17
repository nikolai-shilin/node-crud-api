
8. There could be implemented horizontal scaling for application (there is a `npm` script `start:multi` that starts multiple instances of your application using the Node.js `Cluster` API (equal to the number of logical processor cores on the host machine) with a **load balancer** that distributes requests across them)
