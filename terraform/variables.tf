variable "project_name" {
  description = "Project name used for resource naming"
  default     = "demo-ecommerce"
}

variable "region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment"
  default     = "prod"
}

variable "vpc_cidr" {
  description = "VPC CIDR block"
  default     = "10.0.0.0/16"
}
