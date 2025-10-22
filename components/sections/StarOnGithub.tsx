import { trackEvent } from "lib/posthog";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Feature flag: Toggle between announcement banner and GitHub star banner
const SHOW_FUNDRAISING_BANNER = true;

const bannerKeys = {
  "shuttle-raises-6m-banner": "shuttle-raises-6m-banner",
  starred: "starred",
};

const StarOnGithub = () => {
  const [starOpen, setStarOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const storageKey = SHOW_FUNDRAISING_BANNER
      ? bannerKeys["shuttle-raises-6m-banner"]
      : bannerKeys.starred;

    if (localStorage.getItem(storageKey)) setStarOpen(false);
    else setStarOpen(true);

    setMounted(true);
  }, []);

  if (router.pathname === "/cch") return null;

  const handleClose = () => {
    const storageKey = SHOW_FUNDRAISING_BANNER
      ? bannerKeys["shuttle-raises-6m-banner"]
      : bannerKeys.starred;
    setStarOpen(false);
    localStorage.setItem(storageKey, "true");
  };

  return (
    <div
      className="relative items-center justify-center py-2 text-sm font-bold text-white"
      style={{
        background:
          "linear-gradient(85.52deg, #FC540C -7.27%, rgba(255, 215, 111, 0.72) 108.87%)",
        display: starOpen && mounted ? "flex" : "none",
      }}
    >
      {SHOW_FUNDRAISING_BANNER ? (
        <>
          Shuttle raises $6 million to build the AI Platform Engineer&nbsp;
          <Link
            href="/blog/2025/10/22/shuttle-raises-6-million?utm_source=shuttle-website&utm_campaign=banner"
            onClick={() => {
              trackEvent("announcement_banner_click");
            }}
            className="underline"
          >
            Read more
          </Link>
        </>
      ) : (
        <>
          ⭐️ If you like Shuttle,&nbsp;
          <a
            href="https://github.com/shuttle-hq/shuttle"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("github_star_cta");
            }}
            className="underline"
          >
            give it a star on GitHub
          </a>
          <span className="hidden sm:block">&nbsp;or&nbsp;</span>
          <a
            href="https://twitter.com/shuttle_dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("twitter_follow_cta");
            }}
            className="hidden sm:block underline"
          >
            follow us on Twitter
          </a>
        </>
      )}
      <button className="absolute right-3" onClick={handleClose}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.49023 6.48926L18.511 18.5101"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M6.49023 18.5107L18.511 6.48993"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
};

export default StarOnGithub;
