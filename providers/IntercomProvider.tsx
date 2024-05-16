import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

// declare Intercom for typescript
declare global {
	interface Window {
		Intercom: any
		intercomSettings: any
		attachEvent: (event: string, callback: () => void) => void
	}
}

const APP_ID = 'rwqmvfqn'

export default function IntercomProvider({ children }: { children: ReactElement }) {
	const router = useRouter()

	useEffect(() => {
		;(function () {
			var w = window
			var ic = w.Intercom
			if (typeof ic === 'function') {
				ic('reattach_activator')
				ic('update', w.intercomSettings)
			} else {
				var d = document
				var i: any = function () {
					i.c(arguments)
				}
				i.q = []
				i.c = function (args: any) {
					i.q.push(args)
				}
				w.Intercom = i
				var l = function () {
					var s = d.createElement('script')
					s.type = 'text/javascript'
					s.async = true
					s.src = 'https://widget.intercom.io/widget/' + 'rwqmvfqn'
					var x = d.getElementsByTagName('script')[0]
					x.parentNode?.insertBefore(s, x)
				}
				if (document.readyState === 'complete') {
					l()
				} else if (w.attachEvent) {
					w.attachEvent('onload', l)
				} else {
					w.addEventListener('load', l, false)
				}
			}
		})()

		window && window.Intercom && window.Intercom('boot', { app_id: APP_ID })
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const handleRouteChange = () => {
			if (typeof window !== 'undefined') {
				window?.Intercom('update', { app_id: APP_ID })
			}
		}

		router.events.on('routeChangeStart', handleRouteChange)

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [router.events])

	return children
}
