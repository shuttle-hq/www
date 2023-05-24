import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap'
					rel='stylesheet'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<body className='dark'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
