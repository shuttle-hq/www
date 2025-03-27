import Image from "next/image"

export default function CompanyMission() {
  return (
    <section
      className="
        flex flex-col 
        items-center 
        text-center 
        max-w-[1440px] 
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
          src="/images/pages/careers/sections/shattle.png"
          alt="Shuttle launching"
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
          items-center
          text-left
          order-2
          tablet:items-start
          tablet:mx-0
          tablet:order-2
        "
      >
        <h2 className="font-gradual font-bold text-40 leading-48 tracking-normal text-grey500">
          Shape the next generation of backend development
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
            At Shuttle we are re-thinking the cloud development experience. We
            believe that developers should be able to build and ship incredible
            software to production, without being cloud experts. Our mission is
            to provide the simplest, easiest and most joyful developer
            experience imaginable, and we are doing this by empowering the next
            generation of dreamers and builders.
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
            We&apos;re a team of 12 across 4 countries, backed by world-class
            investors with over 100k+ deployments to our platform.
          </p>
        </div>
      </div>
    </section>
  )
}
