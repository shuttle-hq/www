import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import CookieConsent from 'react-cookie-consent'
import { APP_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_URL, TWITTER_HANDLE } from '../lib/constants'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import '@splidejs/react-splide/css'
import { Page } from 'components/templates'
import { StarOnGithub } from 'components/sections'
import { Analytics } from '@vercel/analytics/react'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { GoogleTagManager } from '@next/third-parties/google'

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
		// Enable debug mode in development
		loaded: (posthog) => {
			if (process.env.NODE_ENV === 'development') posthog.debug()
		},
		capture_pageview: true,
	})
}

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		// Track page views
		const handleRouteChange = () => posthog?.capture('$pageview')

		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	const getLayout = (Component as any).getLayout || ((page: ReactNode) => <Page>{page}</Page>)

	return (
		<>
			<DefaultSeo
				title={SITE_TITLE}
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
			<div className='min-h-screen bg-transparent text-black dark:text-body'>
				<StarOnGithub />
				<PostHogProvider client={posthog}>{getLayout(<Component {...pageProps} />)}</PostHogProvider>
				<GoogleTagManager gtmId='GTM-5QF3M9CR' />
				<CookieConsent
					containerClasses='max-w-xl left-1/2 transform bottom-4 -translate-x-1/2 flex items-end flex-col bg-black/10 border border-white/10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-2xl p-6'
					contentClasses='text-base text-body !m-0 !flex-none tracking-tight self-start'
					buttonWrapperClasses='!mt-3'
					buttonClasses='!m-0 !py-3 !px-6 gap-2 whitespace-nowrap rounded-button font-bold transition-all duration-500 button-shadow dark:border-gradient dark:shadow-gradient bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white dark:bg-black dark:text-head dark:hover:bg-none'
					declineButtonClasses='!p-0 !mr-6 !ml-0 !my-0 !bg-transparent text-body hover:text-head underline transition duration-500'
					enableDeclineButton={true}
					declineButtonText='Decline'
					buttonText='Allow'
					onDecline={() => {}}
					onAccept={() => {}}
				>
					We use cookies to enhance the user experience and measure engagement.
				</CookieConsent>
				<Analytics />
			</div>
		</>
	)
}
