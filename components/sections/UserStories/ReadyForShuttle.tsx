import Link from "next/link";
import userStoriesStyles from "../../../pages/customers/UserStories.module.css";

export const ReadyForShuttle = () => {
  return (
    <div
      className={`w-full mx-auto px-16 py-14 rounded-3xl grid grid-cols-[2.25fr_1.25fr] gap-16 justify-center items-start ${userStoriesStyles["bg-wide"]}`}
    >
      <h2 className="text-neutral-200 text-[40px] font-bold font-gradual leading-[48px]">
        Ready to eliminate infrastructure complexity for your Rust project?
      </h2>
      <div className="self-stretch justify-start">
        <Link
          className="bg-gradient-3 bg-clip-text text-transparent text-xl font-normal underline hover:no-underline"
          href="https://console.shuttle.dev/signup"
        >
          Get started with Shuttle
        </Link>
        <span className="text-zinc-400 text-xl font-normal">
          {" "}
          and deploy your Rust applications with seamless scaling capabilities.
        </span>
      </div>
    </div>
  );
};
