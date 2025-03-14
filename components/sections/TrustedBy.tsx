import {
  Cube,
  EdgeAndNode,
  F5,
  Github,
  GoDaddy,
  Hulu,
  Meta,
  MongoDB,
  Nike,
  Stellar,
  Tencent,
  Uber,
  UiPath,
  Luminar,
} from "components/svgs";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div className="mx-auto mt-24 w-full max-w-7xl sm:px-10 lg:mt-32">
      <div className="group relative z-10 w-full overflow-hidden rounded-[2rem] bg-[#13292C] dark:bg-black">
        <span className="pointer-events-none">
          <Image
            src="/images/sections/trusted-by/bg.png"
            alt="background"
            fill
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          />
          <Image
            src="/images/sections/trusted-by/stars.png"
            alt="stars"
            fill
            className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block"
          />
          <Image
            src="/images/sections/trusted-by/stars-2.png"
            alt="stars 2"
            fill
            className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 md:block"
          />
        </span>
        <div className="grid w-full gap-5 px-5 py-10 md:px-8 lg:grid-cols-[450px_1fr] lg:items-center lg:gap-12 lg:py-16 desktop:px-20">
          <div>
            <h2 className="font-gradual text-4.5 font-bold leading-none text-white dark:text-head lg:text-5xl">
              Trusted by some of the top engineers in the world
            </h2>
          </div>
          <div className="group relative aspect-[556/313] w-full">
            <Uber
              className="absolute left-[10%] top-[4.15%] text-white transition-all duration-500 group-hover:left-[12.2%] group-hover:top-0"
              width={56}
            />
            {/*<Cube
              className="absolute left-[10%] top-[4.15%] text-white transition-all duration-500 group-hover:left-[12.2%] group-hover:top-0"
              width={56}
            />*/}
            {/*<Luminar
              className="absolute left-[10%] top-[4.15%] text-white transition-all duration-500 group-hover:left-[12.2%] group-hover:top-0"
              width={56}
            />*/}
            <Github className="absolute left-[49.2%] top-[10.5%] text-white text-white transition-all duration-500 group-hover:left-[51.4%] group-hover:top-[6.4%]" />
            <Nike className="absolute left-[80.2%] top-0 text-white text-white transition-all duration-500 group-hover:left-[82.3%] group-hover:top-[2.2%]" />
            <Stellar
              width={96}
              className="absolute left-0 top-[46%] text-white text-white transition-all duration-500 group-hover:left-[2.15%] group-hover:top-[41.8%]"
            />
            <UiPath
              width={77}
              className="absolute left-[27.7%] top-[34.5%] text-white text-white transition-all duration-500 group-hover:left-[29.8%] group-hover:top-[30.35%]"
            />
            <MongoDB
              width={106}
              className="absolute left-[36%] top-[59.75%] text-white text-white transition-all duration-500 group-hover:left-[34.5%] group-hover:top-[55.6%]"
            />
            <F5
              width={32}
              className="absolute left-[62.76%] top-[45%] text-white text-white transition-all duration-500 group-hover:left-[61.33%] group-hover:top-[40.9%]"
            />
            <Meta
              width={87}
              className="absolute left-[82.9%] top-[37.3%] text-white text-white transition-all duration-500 group-hover:left-[81.47%] group-hover:top-[39.6%]"
            />
            <GoDaddy className="absolute left-[1.43%] top-[85.62%] text-white text-white transition-all duration-500 group-hover:left-0 group-hover:top-[81.4%]" />
            <EdgeAndNode className="absolute left-[35.61%] top-[95.2%] text-white text-white transition-all duration-500 group-hover:left-[35.97%] group-hover:top-[91.37%]" />
            <Hulu
              width={61}
              className="absolute left-[73.3%] top-[85.94%] text-white text-white transition-all duration-500 group-hover:left-[71.94%] group-hover:top-[91%]"
            />
            <Tencent className="absolute left-[81.83%] top-[73.16%] text-white text-white transition-all duration-500 group-hover:left-[80.39%] group-hover:top-[75.4%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
