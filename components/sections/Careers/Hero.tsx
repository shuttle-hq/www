import CustomButton from "components/elements/CustomButton";

export default function Hero() {
  const scrollToPositions = () => {
    const section = document.getElementById("open-positions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[600px] mb-16 md:mb-24 mt-16 md:mt-24  overflow-hidden custom-galaxy-bg bg-no-repeat bg-center">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:items-center lg:gap-12 md:text-left relative z-10">
        <div className="flex flex-col gap-6 text-left w-full lg:max-w-[60%] order-1 lg:order-1">
          <h1 className="font-gradual font-bold text-5xl md:text-6xl leading-tight md:leading-tight tracking-normal text-black dark:text-head">
            Join Us. Re-invent developer experience. Simply.
          </h1>
          <CustomButton
            className="w-56 justify-center mx-auto lg:mx-0"
            variant="secondary"
            onClick={scrollToPositions}
          >
            View Open Positions
          </CustomButton>
        </div>
      </div>
    </section>
  );
}