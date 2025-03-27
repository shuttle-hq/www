import Image from "next/image"

export default function WhatWereLookingFor() {
  return (
    <section
      className="
        flex flex-col 
        items-center 
        text-center 
        max-w-[1424px] 
        mx-auto 
        px-5 
        gap-8
        mobileM:px-10
        mobileM:gap-[107px]
        tablet:flex-row
        tablet:text-left
        tablet:items-stretch
        tablet:justify-between
        tablet:gap-10
        tablet:px-10
        laptop:px-20
        laptop:gap-14
        desktop:gap-[107px]
      "
    >
      <div
        className="
          w-full 
          relative 
          aspect-[580/458] 
          order-1
          tablet:flex-1
          tablet:max-w-[580px]
          tablet:h-auto
          tablet:self-stretch
          tablet:order-1
        "
      >
        <Image
          src="/images/pages/careers/sections/astronaut.png"
          alt="Astronaut on the moon"
          fill
          sizes="(max-width: 767px) 100vw, 580px"
          className="rounded-4xl object-cover"
          priority
        />
      </div>

      <div
        className="
          flex-1 
          flex 
          flex-col 
          justify-center 
          gap-6
          items-start
          text-left
          order-2
          tablet:items-start
          tablet:mx-0
          tablet:order-2
        "
      >
        <h2 className="font-gradual font-bold text-40 leading-48 text-grey500 text-left">
          What we&apos;re looking for
        </h2>
        <div className="flex flex-col gap-6">
          <p
            className="
              text-base 
              leading-6 
              tracking-1
              mobileS:text-xl 
              mobileS:leading-8
              mobileM:text-xl 
              mobileM:leading-8
              tablet:text-xl 
              tablet:leading-8
            "
          >
            We&apos;re a growth mindset company. We&apos;re honest, open-minded,
            driven, and ambitious and we are only looking for people who share
            these qualities with us.
          </p>
          <p
            className="
              text-base 
              leading-6 
              tracking-1
              mobileS:text-xl 
              mobileS:leading-8
              mobileM:text-xl 
              mobileM:leading-8
              tablet:text-xl 
              tablet:leading-8
            "
          >
            We are building a culture that brings out the best in people and we
            truly believe that the company you work at should be the launch pad
            for unleashing your full potential.
          </p>
          <p
            className="
              text-base 
              leading-6 
              tracking-1
              mobileS:text-xl 
              mobileS:leading-8
              mobileM:text-xl 
              mobileM:leading-8
              tablet:text-xl 
              tablet:leading-8
            "
          >
            We believe in ownership and responsibility. We&apos;re looking for
            people that propose ideas and then take them from start to finish.
          </p>
        </div>
      </div>
    </section>
  )
}
