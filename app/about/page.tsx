import {
  AboutHero,
  BackedBy,
  JobOpenings,
  Mission,
  WorkingWithUs,
} from "components/sections";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Shuttle",
  description: "Meet the innovators at Shuttle, the cloud development platform tailored for Rust. Read about our mission to empower developers worldwide.",
};

export default function About() {
  return (
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
  );
}