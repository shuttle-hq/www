import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import CookieConsent from 'react-cookie-consent'
import Head from 'next/head'
import Script from 'next/script'

import {
	APP_NAME,
	SITE_TITLE,
	SITE_DESCRIPTION,
	SITE_URL,
	TWITTER_HANDLE,
	GA_MEASUREMENT_ID,
} from '../lib/constants'
import { gtagConsent, gtagRevokeConsent, setupGoogleAnalytics } from '../lib/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Footer, Navigation } from 'components/sections'
import '@splidejs/react-splide/css'

const transitionClass = 'transition hover:brightness-125'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const { user } = pageProps
	useEffect(() => setupGoogleAnalytics(router, user))

	return (
		<>
			<Head>
				<title>{SITE_TITLE}</title>
				<link
					href='https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap'
					rel='stylesheet'
				/>
			</Head>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
			/>
			{/* Disable ad storage always. Disable analytics storage by default for EU and EEA countries,
          allowing users to opt-in via the cookie consent banner. Analytics storage is enabled by default
          for remaining countries, but they may opt-out via cookie consent banner.*/}
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'region': ['BE', 'BG', 'CZ', 'DK', 'DE', 'EE', 'IE', 'GR', 'ES', 'FR', 'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT', 'RO', 'SI', 'SK', 'FI', 'SE', 'NO', 'CH', 'IS', 'LI', 'UK'],
            });
            gtag('consent', 'default', {
              'ad_storage': 'denied',
            });
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
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
			<div className='min-h-screen bg-transparent text-[#525151] dark:text-[#7A7A7A]'>
				<Navigation />
				<Component {...pageProps} />
				<Footer />
				<CookieConsent
					style={{
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
					onDecline={() => gtagRevokeConsent()}
					onAccept={() => gtagConsent()}
				>
					We use cookies to enhance the user experience and measure engagement.
				</CookieConsent>
			</div>
		</>
	)
}
