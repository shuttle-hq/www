import {
  AboutHero,
  BackedBy,
  JobOpenings,
  Mission,
  WorkingWithUs,
} from "components/sections";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function About() {
  return (
    <>
      <NextSeo
        title="About | Shuttle"
        description="Meet the innovators at Shuttle, the cloud development platform tailored for Rust. Read about our mission to empower developers worldwide."
      />
      <main>
        <Image
          src="/images/sections/mission/mission.jpg"
          alt="bg"
          fill
          style={{ objectFit: "cover", zIndex: -1, top: 0 }}
          quality={100}
        />
        <AboutHero />
        <Mission />
        <BackedBy />
        <WorkingWithUs />
        <JobOpenings />
      </main>
    </>
  );
}
