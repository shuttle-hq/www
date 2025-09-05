import { trackEvent } from "lib/posthog";
import CustomButton from "components/elements/CustomButton";
import userStoriesStyles from "../../pages/customers/UserStories.module.css";

export const NewConsoleCTA = () => {
  return (
    <div
      className={`w-full mx-auto px-10 py-3 rounded-3xl grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 justify-center items-center mt-16 mb-8 ${userStoriesStyles["bg-wide"]}`}
    >
      <div className="flex flex-col">
        <h2 className="text-white text-3xl lg:text-[40px] font-bold font-gradual leading-tight">
          Experience the New Shuttle Console
        </h2>
        <p className="text-gray-300 text-xl -mt-8">
          Deploy with confidence using our redesigned interface.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <CustomButton
          className="w-full sm:w-[180px] lg:w-full h-[56px] justify-center"
          variant="primary"
          invertOnDark
          href="https://console.shuttle.dev"
          onClick={() => {
            trackEvent("blog_new_console_cta_get_started");
          }}
        >
          Get Started
        </CustomButton>
      </div>
    </div>
  );
};
