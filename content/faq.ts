import { QuestionAttrs } from '../components/sections/FrequentlyAskedQuestions'

export const Questions: QuestionAttrs[] = [
	{
		question: 'What makes Shuttle different from other solutions like Heroku, Supabase, or Vercel?',
		answer: 'Shuttle revolutionizes backend development by saving you valuable time. With our infrastructure from code approach {linked to docs}, you can provision resources directly within your Rust codebase. Say goodbye to complex config files and the need to navigate through the AWS console. With a single line of code, your resources are ready. This efficiency translates to faster development cycles, allowing you to focus on building your application instead of managing or learning how to manage infrastructure.',
	},
	{
		question: 'Is Shuttle open source?',
		answer: 'Yes, Shuttle is open source enabling developers to not only use but also contribute to our platform. We believe in the power of open collaboration and transparency. ',
	},
	{
		question: 'Is Shuttle secure?',
		answer: 'We build and deploy every project in its own container. This gives you safe isolation from other users, and also across all the projects that are owned by your account.',
	},
	{
		question: 'What about frontend hosting?',
		answer: 'You can provision a static folder {link to docs} and serve your frontend counterpart seamlessly.',
	},
	{
		question: 'Why should I use Rust?',
		answer: 'We believe Rust is the language of the future because of the safety guarantees Rust provides and the efficiency of running Rust code. Also, with Rust you build once and everything just works - saving you tons of time on maintenance. And shuttle makes the experience of building your backend with Rust better than anything you can find for any other language.',
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
		question: 'What happens when I cancel my subscription?',
		answer: "If you choose to cancel your subscription, you'll still have access to your existing resources until the end of your billing period. After that, your access to premium features and resources associated with your subscription will be downgraded to the free Community tier. Your data and projects will remain intact, and you can choose to reactivate a premium subscription at any time to regain access to the additional features and resources. We value your experience and strive to make transitions as smooth as possible.",
	},
]

export default Questions
