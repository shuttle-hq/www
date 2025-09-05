import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { APP_NAME, SITE_DESCRIPTION, SITE_URL, TWITTER_HANDLE } from "lib/constants";
import { ReactNode } from "react";
import { Providers } from "./providers";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_DESCRIPTION,
    template: "%s | Shuttle",
  },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

