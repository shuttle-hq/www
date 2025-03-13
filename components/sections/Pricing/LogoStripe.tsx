"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import LogoImage from "./LogoImage";

const RunningLine = dynamic(
  () => import("../../RunningLine").then((mod) => mod.RunningLine),
  {
    loading: () => <div />,
  },
);

const LogoStrip: React.FC = () => {
  return (
    <section className="max-w-[780px]">
      <div>
        <RunningLine
          className="flex gap-10 items-center max-md:max-w-full"
          contentClassName="flex gap-10"
          lineClassName="gap-10"
          gapBetweenLines={40}
          height={30}
          items={[
            <LogoImage
              key="1"
              src="/images/pages/pricing/featuresList/uber.svg"
              className="w-[56px] h-[20px]"
            />,
            <LogoImage
              key="2"
              src="/images/pages/pricing/featuresList/github.svg"
              className="w-[70px] h-[18px]"
            />,
            <LogoImage
              key="3"
              src="/images/pages/pricing/featuresList/nike.svg"
              className="w-[74px] h-[26px]"
            />,
            <LogoImage
              key="4"
              src="/images/pages/pricing/featuresList/meta.svg"
              className="w-[87px] h-[17px]"
            />,
            <LogoImage
              key="5"
              src="/images/pages/pricing/featuresList/stellar.svg"
              className="w-[96px] h-[20px]"
            />,
            <LogoImage
              key="6"
              src="/images/pages/pricing/featuresList/mongo.svg"
              className="w-[106px] h-[29px]"
            />,
            <LogoImage
              key="7"
              src="/images/pages/pricing/featuresList/luminar.svg"
              className="w-[96px] h-[19px]"
            />,
            <LogoImage
              key="8"
              src="/images/pages/pricing/featuresList/layers.png"
              className="w-[34px] h-[27px]"
            />,
            <LogoImage
              key="9"
              src="/images/pages/pricing/featuresList/unwritten.svg"
              className="w-[99px] h-[17px]"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default LogoStrip;
