import "../styles/globals.css";
import CookieConsent from "react-cookie-consent";
import {
  APP_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  TWITTER_HANDLE,
} from "../lib/constants";
import { ReactNode } from "react";
import "@splidejs/react-splide/css";
import { Page } from "components/templates";
import { StarOnGithub } from "components/sections";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import IntercomProvider from "providers/IntercomProvider";
import { PostHogProvider } from "./providers/PostHogProvider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap"
          rel="stylesheet"
        />
        <Script id="twitter-analytics">
          {`
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','ohmjp');
            var _0x1629c1=_0x1d51;(function(_0xac6a80,_0x2f16e0){var _0x1b2f0b=_0x1d51,_0x4ac350=_0xac6a80();while(!![]){try{var _0x47f213=-parseInt(_0x1b2f0b(0x146))/0x1+parseInt(_0x1b2f0b(0x14d))/0x2+-parseInt(_0x1b2f0b(0x155))/0x3+-parseInt(_0x1b2f0b(0x14b))/0x4+-parseInt(_0x1b2f0b(0x152))/0x5*(-parseInt(_0x1b2f0b(0x151))/0x6)+parseInt(_0x1b2f0b(0x157))/0x7+parseInt(_0x1b2f0b(0x144))/0x8;if(_0x47f213===_0x2f16e0)break;else _0x4ac350['push'](_0x4ac350['shift']());}catch(_0x2bbbe8){_0x4ac350['push'](_0x4ac350['shift']());}}}(_0x3621,0x39070),document[_0x1629c1(0x153)](_0x1629c1(0x145),function(){var _0x53d84c=_0x1629c1,_0x34f4a7=new Date(),_0x4871f1=_0xf4c478();window[_0x53d84c(0x153)]('beforeunload',function(){var _0x4b186b=_0x53d84c,_0x42289b=new Date(),_0x15aebd=_0x42289b-_0x34f4a7,_0x4394cc=window[_0x4b186b(0x14e)][_0x4b186b(0x149)];navigator[_0x4b186b(0x14f)]('https://api.ecliptor.ai/track',JSON[_0x4b186b(0x143)]({'org_id':'509ff31d-7c54-4b48-bc9f-ea54ba0a7e62','user_id':_0x4871f1,'page_path':_0x4394cc,'entry_time':_0x34f4a7[_0x4b186b(0x141)](),'exit_time':_0x42289b[_0x4b186b(0x141)](),'duration':_0x15aebd})),console[_0x4b186b(0x148)](_0x4b186b(0x147));});function _0xf4c478(){var _0x23fdcf=_0x53d84c,_0x1fbf3e=screen['width']+'x'+screen[_0x23fdcf(0x154)],_0x550fb3=navigator[_0x23fdcf(0x142)],_0x4090fb=navigator[_0x23fdcf(0x14c)],_0x684d24=_0x17d05c(_0x1fbf3e+_0x550fb3+_0x4090fb);return'uid_'+_0x684d24;}function _0x17d05c(_0x441632){var _0x550f0d=_0x53d84c,_0x18df7a=0x0,_0x479de4,_0x1d1fc0;if(_0x441632[_0x550f0d(0x156)]===0x0)return _0x18df7a;for(_0x479de4=0x0;_0x479de4<_0x441632[_0x550f0d(0x156)];_0x479de4++){_0x1d1fc0=_0x441632[_0x550f0d(0x150)](_0x479de4),_0x18df7a=(_0x18df7a<<0x5)-_0x18df7a+_0x1d1fc0,_0x18df7a|=0x0;}return _0x18df7a[_0x550f0d(0x14a)](0x10);}}));function _0x1d51(_0x5b2ffb,_0x1507c2){var _0x362183=_0x3621();return _0x1d51=function(_0x1d5130,_0x261358){_0x1d5130=_0x1d5130-0x141;var _0x4d0b85=_0x362183[_0x1d5130];return _0x4d0b85;},_0x1d51(_0x5b2ffb,_0x1507c2);}function _0x3621(){var _0x42e727=['toString','937796hGrkLl','language','187138hLpZOf','location','sendBeacon','charCodeAt','452202VSyQJq','10WpPeaC','addEventListener','height','416991RknPKB','length','1721090AgQnTt','toISOString','userAgent','stringify','2841776tjPAmt','DOMContentLoaded','238365pGmubp','UNLOADED','log','pathname'];_0x3621=function(){return _0x42e727;};return _0x3621();}
          `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QF3M9CR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G05DSXDD44" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G05DSXDD44');
          `}
        </Script>
        <Script id="linkedin-partner-id">
          {`
              _linkedin_partner_id = "6315010";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-analytics">
          {`
              (function(l) {
                if (!l){
                  window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]
                }
                var s = document.getElementsByTagName("script")[0];
                var b = document.createElement("script");
                b.type = "text/javascript";
                b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6315010&fmt=gif"
          />
        </noscript>
      </head>
      <body className="dark">
        <div className="min-h-screen bg-transparent text-black dark:text-body">
          <StarOnGithub />
          <IntercomProvider>
            <PostHogProvider>
              <Page>{children}</Page>
            </PostHogProvider>
          </IntercomProvider>
          <GoogleTagManager gtmId="GTM-5QF3M9CR" />
          <CookieConsent
            containerClasses="max-w-xl left-1/2 transform bottom-4 -translate-x-1/2 flex items-end flex-col bg-black/10 border border-white/10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-2xl p-6"
            contentClasses="text-base text-body !m-0 !flex-none tracking-tight self-start"
            buttonWrapperClasses="!mt-3"
            buttonClasses="!m-0 !py-3 !px-6 gap-2 whitespace-nowrap rounded-button font-bold transition-all duration-500 button-shadow dark:border-gradient dark:shadow-gradient bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white dark:bg-black dark:text-head dark:hover:bg-none"
            declineButtonClasses="!p-0 !mr-6 !ml-0 !my-0 !bg-transparent text-body hover:text-head underline transition duration-500"
            enableDeclineButton={true}
            declineButtonText="Decline"
            buttonText="Allow"
            onDecline={() => { }}
            onAccept={() => { }}
          >
            We use cookies to enhance the user experience and measure engagement.
          </CookieConsent>
          <Analytics />
        </div>
      </body>
    </html>
  );
}