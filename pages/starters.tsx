import { Starter } from "components/elements";
import { CallToAction } from "components/sections";
import { Calendar, Discord, Paperclip, React } from "components/svgs";
import { StarterAttrs } from "../components/elements/Starter";
import { GetStaticPropsResult } from "next";
import { AllStartersContent } from "../content";
import { NextSeo } from "next-seo";

const StarterXProps = {
  bg: "/images/sections/featured-starters/3-bg.png",
  bgClassName:
    "pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-cover",
  stars: "/images/sections/featured-starters/3-stars.png",
  starsClassName:
    "pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-3",
  stars2: "/images/sections/featured-starters/3-stars-2.png",
  stars2ClassName:
    "pointer-events-none absolute left-0 top-0 h-full w-full rounded-[2rem] object-contain transition-transform duration-1000 group-hover:-translate-x-5 group-hover:-translate-y-1",
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const starters = AllStartersContent;
  return {
    props: {
      starters,
    },
  };
}

interface Props {
  readonly starters: StarterAttrs[];
}

export default function StartersPage({ starters }: Props) {
  const children = starters.map((starter, idx) => {
    return (
      <Starter
        {...{ ...starter, ...StarterXProps }}
        key={idx}
        templateKey={idx + 1}
      />
    );
  });
  return (
    <>
      <NextSeo
        title="Starter Templates | Shuttle"
        description="Learn more about Shuttle's starter templates."
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
      <div className="mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28">
        <header className="max-w-2xl">
          <h1 className="w-fit font-gradual text-5xl font-bold dark:text-head lg:text-6.5">
            Learn with Shuttle
          </h1>
          <p className="mt-4 sm:text-xl lg:text-2xl">
            Shuttle is an open-source serverless platform written 100% in Rust,
            which treats your apps as plugins, not containers.
          </p>
        </header>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {children}
        </div>
      </div>

      <CallToAction />
    </>
  );
}
