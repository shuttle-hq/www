import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import CookieConsent from 'react-cookie-consent'
import Head from 'next/head'
import { setupFathomAnalytics } from '../lib/fathom'
import { APP_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_URL, TWITTER_HANDLE } from '../lib/constants'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import '@splidejs/react-splide/css'
import { Page } from 'components/templates'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { StarOnGithub } from 'components/sections'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const { user } = pageProps
	useEffect(() => setupFathomAnalytics(router), [])

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
				<StarOnGithub />
				{getLayout(<Component {...pageProps} />)}
				<CookieConsent
					containerClasses='max-w-xl left-1/2 transform bottom-4 -translate-x-1/2 flex items-end flex-col bg-black/10 border border-white/10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-2xl p-6'
					contentClasses='text-base text-[#FFFFFF8F] !m-0 !flex-none tracking-tight self-start'
					buttonWrapperClasses='!mt-3'
					buttonClasses='!m-0 !py-3 !px-6 gap-2 whitespace-nowrap rounded-button font-bold transition-all duration-500 button-shadow dark:border-gradient dark:shadow-gradient bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white dark:bg-black dark:text-[#C2C2C2] dark:hover:bg-none'
					declineButtonClasses='!p-0 !mr-6 !ml-0 !my-0 !bg-transparent text-[#7A7A7A] hover:text-[#FFFFFF] underline transition duration-500'
					enableDeclineButton={true}
					declineButtonText='Decline'
					buttonText='Allow'
					onDecline={() => {}}
					onAccept={() => {}}
				>
					We use cookies to enhance the user experience and measure engagement.
				</CookieConsent>
			</div>
		</UserProvider>
	)
}
