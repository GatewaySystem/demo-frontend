resource "aws_ecr_repository" "order_api" {
  name                 = "${var.project_name}/order-api"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
}

resource "aws_ecr_repository" "product_catalog" {
  name                 = "${var.project_name}/product-catalog"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
}

resource "aws_ecr_repository" "payment_service" {
  name                 = "${var.project_name}/payment-service"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
}

resource "aws_ecr_repository" "frontend" {
  name                 = "${var.project_name}/frontend"
  image_tag_mutability = "MUTABLE"
  force_delete         = true
}
