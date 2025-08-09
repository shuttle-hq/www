import CustomButton from "components/elements/CustomButton";

export default function Hero() {
  const scrollToPositions = () => {
    const section = document.getElementById("open-positions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full relative flex items-center custom-galaxy-bg bg-no-repeat bg-center pt-24 sm:pt-52 max-w-[1440px] px-5 sm:px-10 lg:px-20 mx-auto">
      <div>
        <div className="flex flex-col gap-8 text-left">
          <h1 className="font-gradual font-bold text-5xl leading-52 sm:text-64 sm:leading-72 text-black dark:text-head">
            Join Us.{" "}
            <span className="block sm:inline">Re-invent developer</span>{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            experience. Simply.
          </h1>
          <div>
            <CustomButton
              className="justify-center"
              variant="secondary"
              onClick={scrollToPositions}
            >
              View Open Positions
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
