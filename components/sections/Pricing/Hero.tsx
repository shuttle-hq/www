import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative mb-96 flex flex-col items-center justify-center px-4 pt-32 sm:pt-80">
      <Image
        src="/images/pages/pricing/stars.svg"
        alt=""
        width={1920}
        height={1080}
        className="absolute left-1/2 top-1/3 -z-10 ml-auto mr-auto max-w-5xl -translate-x-1/2"
      />
      <Image
        src="/images/pages/pricing/rust-native.svg"
        alt=""
        width={189}
        height={99}
        className="absolute left-1/2 top-[200px] -z-10 ml-auto mr-auto max-w-5xl -translate-x-[100%] -translate-y-[190%] scale-[0.6] sm:-translate-x-[255%] sm:translate-y-0 sm:scale-100"
      />
      <Image
        src="/images/pages/pricing/no-config.svg"
        alt=""
        width={286}
        height={99}
        className="absolute left-1/2 top-52 -z-10 ml-auto mr-auto max-w-5xl -translate-x-[25%] -translate-y-[170%] scale-[0.6] sm:translate-x-[75%] sm:translate-y-0 sm:scale-100"
      />
      <Image
        src="/images/pages/pricing/cicd.svg"
        alt=""
        width={219}
        height={99}
        className="absolute -bottom-28 left-1/2 -z-10 ml-auto mr-auto max-w-5xl -translate-x-[15%] -translate-y-[15%] scale-[0.6] sm:translate-x-[100%] sm:translate-y-0 sm:scale-100"
      />
      <Image
        src="/images/pages/pricing/get-started.svg"
        alt=""
        width={276}
        height={99}
        className="absolute -bottom-32 left-1/2 -z-10 ml-auto mr-auto max-w-5xl -translate-x-[70%] translate-y-[30%] scale-[0.6] sm:-translate-x-[140%] sm:translate-y-0 sm:scale-100"
      />

      <h1 className="w-fit text-center font-gradual text-5xl font-bold text-black dark:text-head lg:text-6.5">
        Empowering you to build
        <br />
        and deploy great
        <br />
        applications quickly
      </h1>
    </div>
  );
};

export default Hero;
