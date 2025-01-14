import {
  CallToAction,
  ShuttleHeroesBenefits,
  ShuttleHeroesHero,
  ShuttleHeroesResponsibilities,
} from "components/sections";
import { NextSeo } from "next-seo";

export default function ShuttleHeroes() {
  return (
    <>
      <NextSeo
        title="Shuttle Heroes | Shuttle"
        description="Learn more about the Shuttle Heroes program and how to join."
        openGraph={{
          images: [
            {
              url: "https://www.shuttle.dev/images/og-image.png",
              width: 3516,
              height: 1432,
              alt: "Shuttle.dev - Build Backends Fast",
            },
          ],
        }}
      />
      <ShuttleHeroesHero />
      <ShuttleHeroesResponsibilities />
      <ShuttleHeroesBenefits />
      <CallToAction subtext="Become a part of shuttle heroes program!" />
    </>
  );
}
