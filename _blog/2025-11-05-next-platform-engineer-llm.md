---
title: "Your Next Platform Engineer Is a Large Language Model"
description: "AI coding assistants write functions but stop short of infrastructure. Learn how LLMs could soon manage cloud resources and close the gap in DevOps."
author: demola
tags: [rust, iac, coding-tools, llms, iad]
thumb: 
cover: 
date: "2025-11-05"
---

Copilot helps you write functions. Who helps you provision the database that those functions need?

If you're using GitHub Copilot or Cursor, you've probably experienced the magic of these AI coding tools. You type a prompt or write a quick comment, hit tab, and suddenly you have a working function. These assistants are fast, intuitive, and quickly becoming second nature for developers, driving real productivity gains.

The thing is, this beautifully generated code doesn’t do much until it’s connected to real infrastructure. Your AI can write the perfect S3 upload handler or database query, but it can't create the bucket or spin up the Postgres instance. That part still falls on you, and that’s where the magic stops and the manual work begins.

In this guide, you’ll see why AI coding tools hit a wall at infrastructure, why they struggle there, and what it would take for them to act like real platform engineers. We’ll walk through building a Python API with Copilot, the work required to provision the infrastructure behind it, and a new approach that lets you build and deploy both in one step.

## Why Infrastructure is Still Too Complex for LLMs

At first glance, provisioning infrastructure looks like just another automation problem that LLMs should excel at. But under the hood, it’s a completely different challenge from coding. Code lives in a controlled and deterministic environment where functions, variables, and classes can be defined, executed, and produce predictable results.

Infrastructure isn’t like that. It’s stateful, dynamic, and full of invisible dependencies that can shift without warning. Working with it goes far beyond syntax. It involves configuration, security, and a web of moving parts that AI still struggles to understand. Until these tools can reason about systems the same way they reason about code, they’ll stay great copilots, not platform engineers.

Let’s take a simple example. You ask an LLM to help you build a FastAPI service that uploads files to S3. It confidently generates a clean upload handler like this:

```py
def upload_file(file):
    s3_client.put_object(
        Bucket="my-bucket", 
        Key=file.name, 
        Body=file
    )
```

Looks good at first glance. It’s clean, correct, and runs fine in your editor. The only problem is that the bucket doesn’t exist. The IAM role, policy, and environment variables needed for this handler to actually work don’t exist either.

That’s where the real work begins. You’ll still need to:

- Write Terraform to create the S3 bucket with versioning, encryption, and lifecycle policies
- Configure IAM with the right roles and least-privilege policies
- Add environment variables to your Kubernetes or Docker Compose files
- Wire credentials through your CI/CD pipeline
- Test the full integration to make sure everything connects properly

Then there’s the **config explosion**. If you’ve ever worked with Terraform or Kubernetes YAML, you know how deep the rabbit hole goes, with nested variables, duplicated settings across environments, and modules that reference other modules. LLMs might generate valid configuration files, but they often hallucinate resources or miss dependencies you only discover at runtime. For example, if you ask LLM to create a Terraform configuration for AWS Lambda logging, it will come up with something like this:

```yaml
resource "aws_lambda_logging_policy" "default" {
lambda_name = "my-function"
log_group   = "aws_cloudwatch_log_group.my-function"
}
```

It looks right, but there’s no such resource as `aws_lambda_logging_policy` in Terraform. The model simply made it up, assuming AWS must have a dedicated policy for Lambda logs. It sounds believable, but you’ll only find out it’s wrong when Terraform throws an error.

There’s also the issue of **trust**. Developers don’t just need AI to *write* infrastructure; they need to trust that it won’t destroy what they’ve already built. Because infrastructure is stateful, a single bad deletion can permanently wipe data. When an LLM drops a database, the data doesn’t come back.

For now, AI coding tools are like talented interns who can write great infrastructure code but can’t be trusted in production. The real breakthrough will happen when AI can safely reason about infrastructure, understand system state, respect guardrails, and make changes with confidence. That’s where the next wave of innovation is heading: AI not just as a coding assistant, but as a true **platform engineer**.

## How AI Can Become your Platform Engineer

Now imagine a different workflow. You ask your AI assistant to build the same FastAPI app that supports S3 file uploads. It generates the upload function, but this time it also:

- Provisions an S3 bucket with sensible defaults
- Sets up the necessary IAM permissions
- Feeds the bucket name back into your code as an environment variable
- Updates your deployment configuration automatically

Here, the function and the infrastructure work together in a closed loop. No manual provisioning. The AI doesn’t just generate code; it learns from what’s already deployed. If a resource exists, it reuses it. If a policy fails, it adapts. The real unlock is an ecosystem where AI acts like a platform engineer, handling deployment details while you focus on building features.

This is exactly what Shuttle is building toward: a system where infrastructure context flows back into the AI, closing the loop that’s missing in most tools. Shuttle’s strength lies in treating *infrastructure as data* [LINK TO THE OTHER ARTICLE], not as a static configuration. It provides opinionated defaults, secure patterns, predictable environments, and a safe feedback loop that lets AI provision confidently.

So what does that look like in practice? How does code stay in sync with the infrastructure it depends on? And how does an AI keep that loop safe, predictable, and developer-friendly? Let’s break that down in the next section.

## Connecting Code and Infrastructure in Practice

Let's compare the current state with what's possible when infrastructure and code generation work together. 

If you open Copilot and type in the prompt:

```
Create a FastAPI endpoint that uploads files to an s3 bucket.
```

Copilot will generate something like this:

```py
# app.py
from fastapi import FastAPI, UploadFile
import boto3

app = FastAPI()
s3_client = boto3.client('s3')

@app.post("/upload")
async def upload_file(file: UploadFile):
    s3_client.put_object(
        Bucket="my-bucket",  
        Key=file.filename,
        Body=await file.read()
    )
    return {"filename": file.filename}
```

This code works, but once it’s written, you’ll pause your flow and spend the next hour writing Terraform files, configuring IAM, updating Kubernetes manifests, and testing the deployment. Without infrastructure automation, a lot of manual work and context switching still happen.

Now, let’s compare that with Shuttle’s workflow, which uses an infrastructure-aware AI model. Here’s a sample API that manages S3 uploads and uses an AWS RDS database:

```rust
#[shuttle_runtime::main]
async fn main(
    #[shuttle_aws_rds::Postgres] db: PgPool,
) -> shuttle_axum::ShuttleAxum {
    sqlx::query(
        r#"
        CREATE TABLE IF NOT EXISTS s3_uploads (
            id UUID PRIMARY KEY,
            filename VARCHAR(255) NOT NULL,
            s3_key VARCHAR(512) NOT NULL,
            s3_bucket VARCHAR(255) NOT NULL,
            s3_url VARCHAR(512) NOT NULL,
            file_size BIGINT NOT NULL,
            content_type VARCHAR(100),
            uploaded_at TIMESTAMPTZ NOT NULL
        )
        "#,
    )
    .execute(&db)
    .await
    .expect("Failed to create s3_uploads table");
    
    let state = Arc::new(AppState { db });

    let router = Router::new()
        .route("/", get(health_check))
        .route("/uploads", post(create_upload))
        .route("/uploads", get(get_uploads))
        .route("/uploads/:id", get(get_upload_by_id))
        .with_state(state);
    Ok(router.into())
}
```

Two things stand out in this code:  `#[shuttle_runtime::main]` and `#[shuttle_aws_rds::Postgres]`. These are **macros**, which are annotations that describe what you want Shuttle to handle.

When Shuttle detects these macros, it automatically provisions the required infrastructure. The `#[shuttle_aws_rds::Postgres]` macro tells Shuttle to create a Postgres instance and inject the connection pool into your app. 
There’s no need for Terraform or manual setup, since the infrastructure context flows directly into your code.

This is what the future looks like: code and infrastructure generated together, with the platform safely managing provisioning behind the scenes.

**Try it Yourself**
Want to see infrastructure-as-code in action? Run the command below to try it out yourself:

```bash
shuttle init --from shuttle-hq/shuttle-examples --subfolder iad/upload-manager
```


## The Road Ahead: AI Will Soon Be Your Infrastructure Assistant

The gap between code generation and infrastructure provisioning won’t last forever. LLMs are becoming better at understanding context, and platforms are evolving to give them safer, more reliable ways to manage resources.

The next generation of AI coding tools will do more than write code. They will understand your intent, create the infrastructure you need, and deliver a running service without you having to touch a single console. Whether it’s an API route that requires an S3 bucket or a database query that needs Postgres, the entire process will happen seamlessly.

Shuttle is already treating infrastructure as structured data through Rust macros that declare resources at the type level. This is one of the earliest production examples of Infrastructure as Data in action, showing how AI can reason about and manage infrastructure safely.

If you want early access, you can join the **beta waitlist** and help shape the next phase of AI-assisted development.

