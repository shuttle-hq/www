import Image from "next/image";

export default function CompanyMission() {
  return (
    <section className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:items-center lg:gap-[107px] lg:text-left md:text-left max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      <div className="w-full max-w-[535px] h-auto flex items-center justify-center mx-auto order-1 lg:order-1">
        <Image
          src="/images/pages/careers/sections/shattle.png"
          alt="Shuttle launching"
          width={535}
          height={458}
          className="rounded-4xl object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 py-7 mx-auto md:mx-0 order-2 lg:order-2">
        <h2 className="font-gradual font-bold text-[40px] leading-[48px] tracking-[0%] text-[#E0E0E0]">
          Shape the next generation of backend development
        </h2>
        <p className="font-atkinson text-[20px] leading-[32px] tracking-[1%] text-[#A2A2A2]">
          At Shuttle we are re-thinking the cloud development experience. We
          believe that developers should be able to build and ship incredible
          software to production, without being cloud experts. Our mission is
          to provide the simplest, easiest and most joyful developer experience
          imaginable, and we are doing this by empowering the next generation
          of dreamers and builders.
        </p>
        <p className="font-atkinson text-[20px] leading-[32px] tracking-[1%] text-[#A2A2A2]">
          We&apos;re a team of 12 across 4 countries, backed by world-class investors
          with over 100k+ deployments to our platform.
        </p>
      </div>
    </section>
  );
}