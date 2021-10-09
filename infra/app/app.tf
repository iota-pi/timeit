locals {
  application = "how-long"
  bucket_name = "how-long-app-${var.environment}"
  component   = "app"
  compress    = true
  origin_id   = "app_s3_origin"

  min_ttl     = var.environment == "production" ? 3600 : 0
  default_ttl = var.environment == "production" ? 14400 : 0
  max_ttl     = 86400

  allowed_methods = ["GET", "HEAD", "OPTIONS"]
  cached_methods  = ["GET", "HEAD"]

  viewer_protocol_policy = "redirect-to-https"

  standard_tags = {
    Application = local.application
    Component   = local.component
    Environment = var.environment
  }
}

resource "aws_s3_bucket" "app" {
  bucket = local.bucket_name
  acl    = "private"

  tags = local.standard_tags

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"]
  }
}

resource "aws_cloudfront_origin_access_identity" "app_oai" {}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.app.bucket_regional_domain_name
    origin_id   = local.origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.app_oai.cloudfront_access_identity_path
    }
  }

  aliases = [local.domain]

  enabled         = true
  is_ipv6_enabled = true

  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = local.allowed_methods
    cached_methods   = local.cached_methods
    target_origin_id = local.origin_id

    forwarded_values {
      query_string = false
      headers      = ["Origin"]

      cookies {
        forward = "none"
      }
    }

    min_ttl                = local.min_ttl
    default_ttl            = local.default_ttl
    max_ttl                = local.max_ttl
    compress               = local.compress
    viewer_protocol_policy = local.viewer_protocol_policy
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.root_cert.arn
    ssl_support_method  = "sni-only"
  }

  tags = local.standard_tags

  depends_on = [aws_acm_certificate_validation.root_cert]
}

output "app_bucket" {
  value = local.bucket_name
}
