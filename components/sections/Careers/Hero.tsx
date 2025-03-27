import CustomButton from "components/elements/CustomButton"

export default function Hero() {
  const scrollToPositions = () => {
    const section = document.getElementById("open-positions")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative flex items-center custom-galaxy-bg bg-no-repeat bg-center pt-[100px] mobileS:pt-[208px]">
      <div className="w-full max-w-[1344px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col gap-8 text-left md:text-left">
          <h1 className="font-gradual font-bold text-5xl leading-52 mobileS:text-64 mobileS:leading-72 text-black dark:text-head">
            Join Us. Re-invent developer{" "}
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
  )
}
