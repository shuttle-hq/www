import CustomButton from "components/elements/CustomButton";

export default function Hero() {
  const scrollToPositions = () => {
    const section = document.getElementById("open-positions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[600px] overflow-hidden custom-galaxy-bg bg-no-repeat bg-center mb-16 mt-16 md:mb-24 md:mt-24">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col items-center gap-8 text-center relative z-10 sm:px-6 md:text-left lg:px-8 lg:flex-row lg:justify-between lg:items-center lg:gap-12">
        <div className="flex flex-col gap-6 text-left w-full order-1 lg:max-w-[60%] lg:order-1">
          <h1 className="font-gradual font-bold text-5xl leading-tight tracking-normal text-black dark:text-head md:text-6xl md:leading-tight">
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