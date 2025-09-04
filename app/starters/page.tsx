import { Starter } from "components/elements";
import { CallToAction } from "components/sections";
import { Calendar, Discord, Paperclip, React } from "components/svgs";
import { StarterAttrs } from "../../components/elements/Starter";
import { AllStartersContent } from "../../content";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Starter Templates | Shuttle",
  description: "Learn more about Shuttle's starter templates.",
  openGraph: {
    images: [
      {
        url: "https://www.shuttle.dev/images/og-image.png",
        width: 3516,
        height: 1432,
        alt: "Shuttle.dev - Build Backends Fast",
      },
    ],
  },
};

export default function StartersPage() {
  const starters = AllStartersContent;
  
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
      <main className="mx-auto max-w-7xl p-5 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-gradual text-5xl font-bold text-black dark:text-head lg:text-6xl">
            Starter Templates
          </h1>
          <p className="text-lg text-body">
            Get started with Shuttle using our pre-built templates
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </main>
      <CallToAction />
    </>
  );
}