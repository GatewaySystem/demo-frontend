output "alb_dns" {
  description = "ALB DNS name"
  value       = aws_lb.main.dns_name
}

output "cloudfront_domain" {
  description = "CloudFront distribution domain"
  value       = aws_cloudfront_distribution.frontend.domain_name
}

output "ecr_order_api" {
  value = aws_ecr_repository.order_api.repository_url
}

output "ecr_product_catalog" {
  value = aws_ecr_repository.product_catalog.repository_url
}

output "ecr_payment_service" {
  value = aws_ecr_repository.payment_service.repository_url
}

output "ecr_frontend" {
  value = aws_ecr_repository.frontend.repository_url
}

output "vpc_id" {
  value = aws_vpc.main.id
}
