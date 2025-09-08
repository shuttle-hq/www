import Image from "next/image";

export default function WhatWereLookingFor() {
  return (
    <section className="flex flex-col items-center text-center gap-8 md:flex-row md:text-left md:items-stretch md:justify-between lg:gap-16 xl:gap-24">
      <div className="w-full relative aspect-[580/458] order-1 md:flex-1 md:max-w-xl md:h-auto md:self-stretch md:order-1">
        <Image
          src="/images/pages/careers/sections/astronaut.jpg"
          alt="Astronaut on the moon"
          fill
          sizes="(max-width: 767px) 100vw, 580px"
          className="rounded-4xl object-cover"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6 items-start text-left order-2 md:items-start md:mx-0 md:order-2">
        <h2 className="font-gradual font-bold text-40 leading-48 text-grey500 text-left">
          What we&apos;re looking for
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-base leading-6 tracking-1 sm:text-xl sm:leading-8 md:text-xl md:leading-8">
            At Shuttle, we’re a growth mindset company. We value honesty,
            openness, drive, and ambition. We’re looking for people who share
            those qualities.
          </p>
          <p className="text-base leading-6 tracking-1 sm:text-xl sm:leading-8 md:text-xl md:leading-8">
            We’re building a culture that brings out the best in people. We
            believe the company you work at should be the launch pad for your
            full potential.
          </p>
          <p className="text-base leading-6 tracking-1 sm:text-xl sm:leading-8 md:text-xl md:leading-8">
            We value ownership and responsibility. We want people who propose
            ideas and take them from start to finish.
          </p>
          <p className="text-base leading-6 tracking-1 sm:text-xl sm:leading-8 md:text-xl md:leading-8">
            Above all, we want you to be your best self, curious, experimental,
            and always learning.
          </p>
        </div>
      </div>
    </section>
  );
}
