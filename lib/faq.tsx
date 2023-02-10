export const QUESTIONS = [
    {
        question: 'How secure is shuttle?',
        answer: "We build and deploy every project in its own container. This gives you safe isolation from other users, and also across all the projects that are owned by your account.",
    },
    {
        question: 'What happens when I deploy to shuttle?',
        answer: "Your code is analyzed and built on our servers. The first time you introduce additional resources in your code, like the first time you use a database, we will add that resource to your project and wire it automatically to your deployment.",
    },
    {
        question: 'Why should I use Rust?',
        answer: "We believe Rust is the language of the future because of the safety guarantees Rust provides and the efficiency of running Rust code. Also, with Rust you build once and everything just works - saving you tons of time on maintenance. And shuttle makes the experience of building your backend with Rust better than anything you can find for any other language.",
    },
    {
        question: 'Can I use any frontend framework with shuttle?',
        answer: "Of course! When you deploy a project on shuttle, your API becomes available at a URL of the form ${project_name}.shuttleapp.rs. And since shuttle is compatible with any of the common frontend hosting solutions (Vercel, Netlify, etc), you just have to make your API calls to the URL of your project, and you’re up. Soon you’ll also be able to use shuttle to deliver static content at the edge and host your preact or Next.js projects with the rest of your code on shuttle.",
    },
    {
        question: 'Is there a local development experience?',
        answer: "Absolutely. As a matter of fact, shuttle makes sure that whatever you see in a local development environment works in exactly the same way when it gets deployed to our cloud. This includes all the resources you could end up needing, like databases and secrets for example.",
    },
    {
        question: 'Do you plan to have a WASM runner?',
        answer: "We are putting a lot of effort into developing a WASM runner that plays well with other parts of a shuttle project. We are very impressed by what we’re seeing so far in terms of improved build times and faster (we’re taking milliseconds…) deploy times. We’re expecting to roll out stable support for WASM services shortly.",
    },
    {
        question: 'How does this differ from using serverless framework with Rust Lambda and provided runtime?',
        answer: "You can bring your lambda code to shuttle as is. And we run it on dedicated infrastructure that keeps the state of your services across requests, has no cold-start and can even have long-running threads, all of which is not possible on AWS Lambda.",
    },
]