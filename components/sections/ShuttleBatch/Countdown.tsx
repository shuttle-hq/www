import { Button } from "components/elements";
import { DISCORD_URL } from "lib/constants";
import { Divider } from "components/svgs/batch";
import Counter, {
  CountdownRenderProps,
  CountdownRendererFn,
  zeroPad,
} from "react-countdown";

const renderer = (props: CountdownRenderProps) => {
  const { days, hours, minutes, seconds } = props;
  return (
    <>
      {zeroPad(days)} : {zeroPad(hours)} : {zeroPad(minutes)} :{" "}
      {zeroPad(seconds)}
    </>
  );
};

export const Countdown = () => {
  return (
    <>
      <section className="mx-auto mt-24 w-full max-w-7xl items-center px-5 sm:px-10 lg:mt-28">
        <p className="mt-4 text-center text-xl text-body">
          Shuttle Batch 2023 starts in
        </p>
        <h2 className="text-gradient mt-12 bg-clip-text text-center font-gradual text-[80px] font-bold leading-[150%] text-head">
          <span className="text-transparent">
            <Counter date={1683007200000} renderer={renderer} />
          </span>
        </h2>
        <div className="flex justify-center gap-24 text-body">
          <p className="mt-4 text-lg">Days</p>
          <p className="mt-4 text-lg">Hours</p>
          <p className="mt-4 text-lg">Minutes</p>
          <p className="mt-4 text-lg">Seconds</p>
        </div>
        <div className="my-32 flex justify-center gap-4">
          <Button
            variant="primary"
            invertOnDark
            className="bg-[#13292C] text-white"
            href="https://shuttlerust.typeform.com/shuttle-batch-2"
          >
            Apply now
          </Button>
          <Button variant="secondary" invertOnDark href={DISCORD_URL}>
            Join Discord
          </Button>
        </div>
        <div className="flex w-full">
          <Divider />
        </div>
      </section>
    </>
  );
};
