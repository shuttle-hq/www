import Image from "next/image";

export default function WhatWereLookingFor() {
  return (
    <section className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:items-center lg:gap-[107px] lg:text-left md:text-left max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      <div className="w-full max-w-[535px] h-auto flex items-center justify-center mx-auto order-1 lg:order-1">
        <Image
          src="/images/pages/careers/sections/astronaut.png"
          alt="Astronaut on the moon"
          width={535}
          height={458}
          className="rounded-4xl object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col py-7 mx-auto md:mx-0 order-2 lg:order-2">
        <h2 className="font-gradual font-bold text-[40px] leading-[48px] tracking-[0%] text-[#E0E0E0] mb-6">
          What we&apos;re looking for
        </h2>
        <p className="font-atkinson text-[20px] leading-[32px] tracking-[1%] text-[#A2A2A2]">
          We&apos;re a growth mindset company. We&apos;re honest, open-minded,
          driven, and ambitious and we are only looking for people who share
          these qualities with us.
        </p>
        <p className="font-atkinson text-[20px] leading-[32px] tracking-[1%] text-[#A2A2A2] mt-6">
          We are building a culture that brings out the best in people and we
          truly believe that the company you work at should be the launch pad
          for unleashing your full potential.
        </p>
        <p className="font-atkinson text-[20px] leading-[32px] tracking-[1%] text-[#A2A2A2] mt-6">
          We believe in ownership and responsibility. We&apos;re looking for people
          that propose ideas and then take them from start to finish.
        </p>
      </div>
    </section>
  );
}