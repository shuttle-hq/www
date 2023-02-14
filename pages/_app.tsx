import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import CookieConsent from 'react-cookie-consent'
import Head from 'next/head'
import { setupFathomAnalytics } from "../lib/fathom";
import {
	APP_NAME,
	SITE_TITLE,
	SITE_DESCRIPTION,
	SITE_URL,
	TWITTER_HANDLE
} from '../lib/constants'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import '@splidejs/react-splide/css'
import { Page } from 'components/templates'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const transitionClass = 'transition hover:brightness-125'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const { user } = pageProps
	useEffect(() => setupFathomAnalytics(router), []);

	const getLayout = (Component as any).getLayout || ((page: ReactNode) => <Page>{page}</Page>)

	return (
		<UserProvider>
			<Head>
				<title>{SITE_TITLE}</title>
			</Head>
			<DefaultSeo
				title={APP_NAME}
				description={SITE_DESCRIPTION}
				openGraph={{
					type: 'website',
					url: SITE_URL,
					site_name: APP_NAME,
				}}
				twitter={{
					handle: TWITTER_HANDLE,
					site: TWITTER_HANDLE,
					cardType: 'summary_large_image',
				}}
			/>
			<div className='min-h-screen bg-transparent text-black dark:text-[#7A7A7A]'>
				{getLayout(<Component {...pageProps} />)}
				<CookieConsent
					style={{
						// Hidden until restyle
						display: 'none',
						justifyContent: 'center',
					}}
					enableDeclineButton={true}
					declineButtonText='Decline'
					// only a limited subset of tailwind classes work
					declineButtonClasses={transitionClass}
					declineButtonStyle={{
						borderRadius: '4px',
						fontWeight: '500',
						color: 'rgb(15 23 42)',
						padding: '4px 16px',
						backgroundColor: '#7777dd',
						minWidth: '87px',
						opacity: '0.7',
					}}
					buttonText='Accept'
					// only a limited subset of tailwind classes work
					buttonClasses={transitionClass}
					buttonStyle={{
						borderRadius: '4px',
						fontWeight: '500',
						color: 'rgb(15 23 42)',
						padding: '4px 16px',
						backgroundColor: '#f25100',
						minWidth: '87px',
					}}
					onDecline={() => {}}
					onAccept={() => {}}
				>
					We use cookies to enhance the user experience and measure engagement.
				</CookieConsent>
			</div>
		</UserProvider>
	)
}
