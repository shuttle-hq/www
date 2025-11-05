---
title: "Why Infrastructure as Data is the Next Step After IaC"
description: "IaC made cloud setups consistent, but also painfully complex. See how Infrastructure as Data simplifies it into readable, type-safe, AI-friendly workflows built for developers."
author: demola
tags: [rust, iac, coding-tools, llms, iad]
thumb: 
cover: 
date: "2025-11-05"
---

Infrastructure as Code (IaC) gave us reproducibility. But reproducibility isn’t the same as simplicity. When Terraform launched back in 2014, it completely changed the game. No more manually spinning up servers or dealing with the classic “it works on my machine” problem. Suddenly, teams could version their infrastructure, review it like code, and deploy it consistently across environments.

In the previous article [**ADD LINK TO NEXT PLATFORM ENGINEER IS LLM ARTICLE WHEN PUBLISHED**], we saw how even the best AI tools struggle with the messy, stateful nature of real-world systems. Traditional tools like Terraform and Pulumi encode that complexity into hundreds of lines of configuration that still require careful human management. To move forward, we need a new approach. Infrastructure should be treated as data that can be understood and managed intelligently. That is the idea behind Infrastructure as Data.

In this guide, you will learn what Infrastructure as Data is, how it solves the pain points of IaC, and see both approaches side by side so you can understand the difference in action.

## What is Infrastructure as Data?

At its core, IaD is a shift from writing verbose, imperative code to defining clear, declarative data that describes *what* you need, not *how* to get it. Instead of crafting long scripts or managing complex module logic, you describe your environment as data, often in JSON, YAML, or a higher-level schema, and let the tooling handle the “how.”

Think of it as moving from *“code that builds infrastructure”* to *“data that defines infrastructure.”*

The core principles of IaD are:

- **Simple Declarative Artifact**: IaD focuses on describing the desired state instead of instructing the system step by step. You define what your infrastructure should look like, for example, “a web service with two replicas and a Postgres database,” and the orchestration layer figures out how to create, update, or remove the necessary resources.
- **Readable and Writable by both Humans and LLMs**: AI-assisted development is becoming the norm, so infrastructure definitions should benefit from it too. IaD formats are designed to be easy for both engineers and language models to read and write, which makes collaboration and automation much smoother.
- **Static Correctness at Authoring Time**: IaD systems catch invalid configurations before deployment. If your configuration will not deploy, it should fail at parsing time. With type systems and schema validation, you catch errors early, long before they reach your cloud provider.
- **Composable and Reuseable Data Units**: IaD encourages building infrastructure from reusable, composable building blocks. Think of them like LEGO pieces. Each block represents a tested, known-good configuration such as a database service, load balancer, or telemetry. You can reference, combine, or extend these blocks as data.

The goal is about recognizing that infrastructure requirements are fundamentally **data that describes dependencies**, not **logic that provisions resources**.

For example, in IaC, even a minimal AWS storage setup might look like this:

```yaml
resource "aws_s3_bucket" "uploads" {
bucket = "my-app-uploads-prod"
}

resource "aws_db_instance" "main" {
identifier        = "prod-postgres"
engine            = "postgres"
instance_class    = "db.t3.micro"
allocated_storage = 20
db_name          = "myapp"
username         = var.db_username
password         = var.db_password
}
```

In contrast, an IaD setup written in YAML could look something like this:

```yaml
storage:
    uploads:
    type: bucket
    
database:
    main:
    type: postgres
    size: 1GB
```

The difference in cognitive load is obvious. It’s short, readable, and focused on intent. No providers and dependencies to wire together. You can skim through it in seconds, and an LLM could generate this from a simple prompt like, *“Set up S3 for uploads and Postgres for users in dev.”*

## Difference between Infrastructure as Code and Infrastructure as Data

The table below highlights how IaC and IaD differ:

| **Aspect**         | **Infrastructure as Code (IaC)**       | **Infrastructure as Data (IaD)**                              |
| ------------------ | -------------------------------------- | ------------------------------------------------------------- |
| **Representation** | Code or DSL (Terraform, CDK, Pulumi)   | Structured data (JSON, YAML, or schema-based models)          |
| **Focus**          | Defining logic and dependencies        | Defining desired state and relationships                      |
| **Audience**       | DevOps / Cloud engineers               | Developers, platforms, and automation systems                 |
| **Execution**      | Requires compilation or interpretation | Parsed and applied by a data-driven orchestrator              |
| **Goal**           | Automate infrastructure provisioning   | Abstract infrastructure into composable, reusable data models |

Now that we’ve unpacked what IaD really means and seen how it differs from IaC, the next question is: *why does it matter?*

IaD makes architecture cleaner, sure. But the real story is how it becomes the foundation for something bigger. Making data the center of how environments are expressed and turning infrastructure into something both humans and intelligent systems (like LLMs) can understand and manipulate safely.

This opens the door to a future where infrastructure doesn’t just follow developer intent, it can also anticipate it. In the next section, we’ll explore what that looks like with IaD at the intersection of developers, AI, and automation.

## Infrastructure as Code for Developers and LLMs

IaD closes the gap between infrastructure and application code in ways IaC never could.

When your infrastructure is represented as data, the context flows naturally into your development workflow. Your IDE knows what resources exist. Your type system validates that you are using them correctly. Your [AI coding assistant](https://www.shuttle.dev/blog/2025/09/09/ai-coding-tools-rust) can read your infrastructure data and suggest relevant implementations without parsing hundreds of lines of Terraform.

With IaD workflows integrated into LLMs, you get several advantages:

- **Automatic context generation:** When you declare resources such as a database, your application code automatically knows about them. You no longer need to copy connection strings manually.
- **Compile-time validation:** Errors are caught at authoring time, the same way type errors are caught before deployment.
- **Smarter AI-assisted changes:** When you prompt an LLM to “add a secret manager” or any other resource, it can read your infrastructure data, understand your setup, and suggest updates to both your application code and infrastructure definitions. It does not need to depend on provider-specific workflows.

This is the workflow that [**Shuttle**](https://www.shuttle.dev/) is building toward: infrastructure as data that stays tightly coupled with your application’s development cycle. You write Rust code that declares its infrastructure needs using annotations (Rust macros). Shuttle provisions the required resources and injects them at runtime. You do not need separate repositories, and your application and infrastructure stay in sync automatically.

## Demo: How It Works With Shuttle

To see IaD in action, let’s build a simple Rust API with **Axum** that stores todos in **Postgres**. You will see how Shuttle handles the database declaration using macros.

**Step 1: Set up Shuttle**

1. Create a [free Shuttle account](https://console.shuttle.dev/signup).
2. Install the [Shuttle CLI](https://docs.shuttle.dev/getting-started/installation), which lets you deploy straight from your machine.

For Linux and macOS users:

```bash
curl -sSfL https://www.shuttle.dev/install | bash
```

For Windows (PowerShell) users:

```bash
iwr https://www.shuttle.dev/install-win | iex
```


3. Configure the CLI by running: 

```
Shuttle login
```

This will open a browser where you can log in with your credentials.

**Step 2: Initialize the Project**

To do this, run the command below:

```bash
shuttle init
```

Shuttle will ask you a few questions to help scaffold your Rust project. You can follow the format below:

```bash
Project name: todos
Create directory: Press <Retun/Enter Key>
What type of project template would you like to start from?: Select "Browse our full library of templates" -> Postgres - Todo list with a Postgres database (axum) 
Create a project on Shuttle with the name "todos"? -> Yes Press <Retun/Enter Key>
```

Once you answer the prompts, Shuttle will scaffold a Todo API in Rust with a Postgres database using Axum. You will also notice that Shuttle automatically assigns a project ID, which makes deploying from your machine simple and seamless.

<CaptionedImage
  src="/images/blog/IaD-is-next-step-after-IaC/shuttle-project-id.png"
  alt="Shuttle Project ID"
  caption="Shuttle Project ID"
/>


**Step 3: Inspect the Application Code**

Open the `src/main.rs` file. You will see the application code, and the entry point might look a bit unfamiliar at first:

```rust
#[shuttle_runtime::main]
async fn main(#[shuttle_shared_db::Postgres] pool: PgPool) -> shuttle_axum::ShuttleAxum {
    sqlx::migrate!()
        .run(&pool)
        .await
        .expect("Failed to run migrations");

    let state = MyState { pool };
    let router = Router::new()
        .route("/todos", post(add))
        .route("/todos/{id}", get(retrieve))
        .with_state(state);

    Ok(router.into())
}
```

You’ll notice that infrastructures the application needs are defined using macros:


- `#[shuttle_runtime::main]` provisons the Shuttle runtime environment where your app runs.
- `#[shuttle_shared_db::Postgres]` provisions a Postgres database with a connection pool that your app can query directly.

**Step 4: Deploy and Run the Project**

To deploy the project and provision the required infrastructure, run:

```bash
shuttle deploy
```

Shuttle reads the macros, provisions the Postgres database, and connects the application automatically with the right connection strings.


> You can also run your application locally using `shuttle run`. Before running the command, make sure Docker is running because Shuttle starts a Docker container for the Postgres database by default. Check out [running Shuttle locally](https://docs.shuttle.dev/docs/local-run) to learn more.

**Step 5: View your Deployment**

Finally, open your [Shuttle console](https://console.shuttle.dev/) to see your deployment resources (Postgres database in this case), API URL, and other deployment details.

<CaptionedImage
  src="/images/blog/IaD-is-next-step-after-IaC/shuttle-console.png"
  alt="Shuttle console"
  caption="Shuttle console"
/>


This is Shuttle giving you a first taste of IaD. The infrastructure and application code are coupled at the type level with structured data describing the infrastructure, validated statically, and integrated directly into the development workflow.

**Try it Yourself**

Want to see infrastructure as code generation in action? Run the command below to try it out yourself:

```bash
shuttle init --from shuttle-hq/shuttle-examples --subfolder iad/todos
```

## Wrapping Up

IaC gave operations teams powerful control, yet made life harder for developers. The verbosity, fragile pipelines, and separation from application code do not fit the way modern software is built.

**Infrastructure as Data (IaD)** is the next step forward. It treats infrastructure as structured, type-safe data instead of layers of procedural code. It fits perfectly into the workflow of AI-assisted development, coupled with strong typing and seamless app-infra integration.

We're just at the beginning of the post-IaC era. The tools are emerging. The patterns are forming. The workflows are getting simpler. Join us as we explore where it's heading. 

Want early access to IaD? Sign up for the beta waitlist [LINK].

