import Image from "next/image"

export default function CompanyMission() {
  return (
    <section className="flex flex-col gap-8 items-center text-center max-w-[1344px] mx-auto px-5 sm:px-10 md:text-left lg:flex-row lg:justify-between lg:items-center lg:gap-[107px] lg:text-left">
      <div className="w-full max-w-[535px] h-auto flex items-center justify-center mx-auto order-1 lg:order-1">
        <Image
          src="/images/pages/careers/sections/shattle.png"
          alt="Shuttle launching"
          width={535}
          height={458}
          className="rounded-4xl object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 order-2 md:mx-0 lg:order-2">
        <h2 className="font-gradual font-bold text-4xl leading-tight tracking-normal text-grey500">
          Shape the next generation of backend development
        </h2>
        <p className="text-xl leading-8 tracking-wide text-body">
          At Shuttle we are re-thinking the cloud development experience. We
          believe that developers should be able to build and ship incredible
          software to production, without being cloud experts. Our mission is to
          provide the simplest, easiest and most joyful developer experience
          imaginable, and we are doing this by empowering the next generation of
          dreamers and builders.
        </p>
        <p className="text-xl leading-8 tracking-wide text-body">
          We&apos;re a team of 12 across 4 countries, backed by world-class
          investors with over 100k+ deployments to our platform.
        </p>
      </div>
    </section>
  )
}
