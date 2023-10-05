import { QuestionAttrs } from '../components/sections/FrequentlyAskedQuestions'

export const pricingQuestions: QuestionAttrs[] = [
	{
		question: 'What makes Shuttle different from other solutions like Heroku, Supabase, or Vercel?',
		answer: 'Shuttle revolutionizes backend development by saving you valuable time. With our <a href="https://docs.shuttle.rs/introduction/how-shuttle-works" target="_blank" style="text-decoration: underline;">infrastructure from code approach</a>, you can provision resources directly within your Rust codebase. Say goodbye to complex config files and the need to navigate through the AWS console. With a single line of code, your resources are ready. This efficiency translates to faster development cycles, allowing you to focus on building your application instead of managing or learning how to manage infrastructure.',
	},
	{
		question: 'Is Shuttle open source?',
		answer: 'Yes, Shuttle is <a href="https://github.com/shuttle-hq" target="_blank" style="text-decoration: underline;">open source</a> enabling developers to not only use but also contribute to our platform. We believe in the power of open collaboration and transparency.',
	},
	{
		question: 'What about frontend hosting?',
		answer: 'You can build any frontend app compiled to HTML/CSS/JS/WASM. Then, deploy and serve it with your Shuttle app.',
	},
	{
		question: 'Why should I use Rust?',
		answer: 'We believe Rust is the language of the future because of the safety guarantees Rust provides and the efficiency of running Rust code. Also, with Rust you build once and everything just works - saving you tons of time on maintenance. Shuttle makes the experience of building your backend with Rust better than anything you can find for any other language.',
	},
	{
		question: 'How do I handle payments and access invoices?',
		answer: 'We use Stripe for payments, providing a secure and easy way to pay for our services. You can access and manage your invoices and billing details in your Stripe dashboard. You can adjust your plan and billing information with just a few clicks.',
	},
	{
		question: 'Can I upgrade or downgrade at any time?',
		answer: "Absolutely! You can upgrade or downgrade your plan at any time to better align with your project's requirements. Whether you're expanding or scaling back, we adapt to your needs, ensuring you have the resources necessary to succeed.",
	},
	{
		question: 'What happens if I cancel my subscription?',
		answer: "If you choose to cancel your subscription, you'll still have access to your existing resources until the end of your billing period. After that, your access to premium features and resources associated with your subscription will be downgraded to the free Community tier.",
	},
]

export const landingQuestions: QuestionAttrs[] = [
	{
		question: 'How secure is Shuttle?',
		answer: 'We build and deploy every project in its own container. This gives you safe isolation from other users, and also across all the projects that are owned by your account.',
	},
	{
		question: 'What happens when I deploy to Shuttle?',
		answer: 'Your code is analyzed and built on our servers. The first time you introduce additional resources in your code, like the first time you use a database, we will add that resource to your project and wire it automatically to your deployment.',
	},
	{
		question: 'Why should I use Rust?',
		answer: 'We believe Rust is the language of the future because of the safety guarantees Rust provides and the efficiency of running Rust code. Also, with Rust you build once and everything just works - saving you tons of time on maintenance. And Shuttle makes the experience of building your backend with Rust better than anything you can find for any other language.',
	},
	{
		question: 'Can I use any frontend framework with Shuttle?',
		answer: 'Of course! When you deploy a project on Shuttle, your API becomes available at a URL of the form ${project_name}.Shuttleapp.rs. And since Shuttle is compatible with any of the common frontend hosting solutions (Vercel, Netlify, etc), you just have to make your API calls to the URL of your project, and you’re up. Soon you’ll also be able to use Shuttle to deliver static content at the edge and host your preact or Next.js projects with the rest of your code on Shuttle.',
	},
	{
		question: 'Is there a local development experience?',
		answer: 'Absolutely. As a matter of fact, Shuttle makes sure that whatever you see in a local development environment works in exactly the same way when it gets deployed to our cloud. This includes all the resources you could end up needing, like databases and secrets for example.',
	},
	{
		question: 'Do you plan to have a WASM runner?',
		answer: 'We are putting a lot of effort into developing a WASM runner that plays well with other parts of a Shuttle project. We are very impressed by what we’re seeing so far in terms of improved build times and faster (we’re taking milliseconds…) deploy times. We’re expecting to roll out stable support for WASM services shortly.',
	},
	{
		question: 'How does this differ from using serverless framework with Rust Lambda and provided runtime?',
		answer: 'You can bring your lambda code to Shuttle as is. And we run it on dedicated infrastructure that keeps the state of your services across requests, has no cold-start and can even have long-running threads, all of which is not possible on AWS Lambda.',
	},
]
