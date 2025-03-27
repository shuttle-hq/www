import Image from "next/image"

export default function CompanyMission() {
  return (
    <section className="flex flex-col items-center text-center gap-8 md:flex-row md:text-left md:items-stretch md:justify-between lg:gap-16 xl:gap-24">
      <div className=" w-full relative aspect-[580/458] order-1 md:flex-1 md:max-w-xl md:h-auto md:self-stretch md:order-1">
        <Image
          src="/images/pages/careers/sections/shattle.png"
          alt="Shuttle launching"
          fill
          sizes="(max-width: 767px) 100vw, 580px"
          className="rounded-4xl object-cover"
          priority
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6 items-center text-left order-2 md:items-start md:mx-0 md:order-2">
        <h2 className="font-gradual font-bold text-40 leading-48 tracking-normal text-grey500">
          Shape the next generation of backend development
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-base leading-6 tracking-1 sm:text-xl sm:leading-8 md:text-xl md:leading-8">
            At Shuttle we are re-thinking the cloud development experience. We
            believe that developers should be able to build and ship incredible
            software to production, without being cloud experts. Our mission is
            to provide the simplest, easiest and most joyful developer
            experience imaginable, and we are doing this by empowering the next
            generation of dreamers and builders.
          </p>
          <p className="text-base leading-6 tracking-1 sm:text-xl sm:leading-8 md:text-xl  md:leading-8">
            We&apos;re a team of 12 across 4 countries, backed by world-class
            investors with over 100k+ deployments to our platform.
          </p>
        </div>
      </div>
    </section>
  )
}
