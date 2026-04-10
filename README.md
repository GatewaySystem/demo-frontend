# Demo Frontend

React storefront for the Gateway e-commerce demo. Built with React, Vite, and nginx.

## Quick Start

```bash
npm install
npm run dev    # runs on port 3000
```

## Pages

- `/` — Product grid with category filters
- `/cart` — Shopping cart with checkout
- `/orders` — Order history

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| VITE_ORDER_API_URL | http://localhost:8080 | Order API URL (dev mode) |
| ORDER_API_URL | order-api:8080 | Order API URL (nginx proxy, production) |

## Terraform

The `terraform/` directory contains AWS infrastructure definitions for the full e-commerce stack:
- VPC with public/private subnets
- ECS Fargate cluster with 4 services
- ALB with path-based routing
- ECR repositories
- CloudFront CDN
- CloudWatch monitoring + SNS alerts
- S3 for static assets
- Route 53 DNS
