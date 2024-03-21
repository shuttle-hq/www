import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='dark'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
