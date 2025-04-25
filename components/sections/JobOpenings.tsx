import { Jobs } from "content";
import Image from "next/image";
import Link from "components/elements/Link";
import { FC } from "react";

const JobOpenings = () => {
  return (
    <div
      className="mx-auto mt-8 w-full max-w-7xl sm:mt-16 sm:px-10 lg:mt-32"
      id="careers"
    >
      <div className="group relative z-10 overflow-hidden rounded-[2rem]">
        <span className="pointer-events-none">
          <Image
            src="/images/sections/job-openings/bg.png"
            alt=""
            fill
            className="absolute left-0 top-0 -z-10 h-full w-full bg-[#13292C] object-cover dark:bg-black"
          />
          <Image
            src="/images/sections/job-openings/stars.png"
            alt=""
            fill
            className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:translate-x-12 group-hover:translate-y-3 md:block"
          />
          <Image
            src="/images/sections/job-openings/stars-2.png"
            alt=""
            fill
            className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-5 md:block"
          />
          <Image
            src="/images/sections/job-openings/comets.png"
            alt=""
            fill
            className="absolute left-0 top-0 -z-10 hidden h-full w-full object-contain transition-transform duration-1000 group-hover:-translate-x-24 group-hover:translate-y-24 md:block"
          />
        </span>
        <div className="px-5 py-10 md:px-8 desktop:px-20 desktop:pb-40">
          <h2 className="text-gradient bg-clip-text font-gradual text-4.5 font-bold leading-none text-head lg:text-[3.5rem] desktop:text-[4rem]">
            Let&apos;s build{" "}
            <span className="text-transparent">
              the future of development&nbsp;
            </span>
            together
          </h2>
          <div className="mt-8 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="space-y-6 text-xl text-head lg:space-y-8">
              <p>
                Joining us, you&apos;ll become part of an exceptionally strong
                team that has a big bias for action and a love for quick
                experimentation and hacking.
              </p>
              <p>Let&apos;s build something people want, together!</p>
            </div>
            <div className="flex flex-col divide-y divide-white/10 border-b border-white/10 text-xl text-head">
              <p className="pb-4 font-gradual font-bold">Open positions</p>
              {Jobs.map((job) => (
                <Position key={job.name} name={job.name} link={job.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface PositionProps {
  name: string;
  link: string;
}

const Position: FC<PositionProps> = ({ name, link }) => {
  return (
    <Link href={link} className="flex items-center justify-between gap-4 p-5">
      {name}
      <svg
        className="flex-shrink-0"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.5 8L23.5 16.5L15.5 25" strokeWidth={2} />
        <path d="M7 16.5L24 16.5" strokeWidth={2} />
      </svg>
    </Link>
  );
};

export default JobOpenings;
