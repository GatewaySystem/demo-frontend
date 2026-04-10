# CloudWatch log groups
resource "aws_cloudwatch_log_group" "order_api" {
  name              = "/ecs/${var.project_name}/order-api"
  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "product_catalog" {
  name              = "/ecs/${var.project_name}/product-catalog"
  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "payment_service" {
  name              = "/ecs/${var.project_name}/payment-service"
  retention_in_days = 30
}

resource "aws_cloudwatch_log_group" "frontend" {
  name              = "/ecs/${var.project_name}/frontend"
  retention_in_days = 30
}

# SNS topic for alarms
resource "aws_sns_topic" "alerts" {
  name = "${var.project_name}-alerts"
}

# CPU alarm for order-api (the critical orchestrator)
resource "aws_cloudwatch_metric_alarm" "order_api_cpu" {
  alarm_name          = "${var.project_name}-order-api-cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = 300
  statistic           = "Average"
  threshold           = 80
  alarm_description   = "Order API CPU utilization above 80%"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    ClusterName = aws_ecs_cluster.main.name
    ServiceName = aws_ecs_service.order_api.name
  }
}

# Error rate alarm
resource "aws_cloudwatch_metric_alarm" "order_api_5xx" {
  alarm_name          = "${var.project_name}-order-api-5xx"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "HTTPCode_Target_5XX_Count"
  namespace           = "AWS/ApplicationELB"
  period              = 60
  statistic           = "Sum"
  threshold           = 10
  alarm_description   = "Order API returning >10 5xx errors per minute"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    TargetGroup  = aws_lb_target_group.order_api.arn_suffix
    LoadBalancer = aws_lb.main.arn_suffix
  }
}
