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
              width={56}
              height={20}
            />,
            <LogoImage
              key="2"
              src="/images/pages/pricing/featuresList/github.svg"
              width={70}
              height={18}
            />,
            <LogoImage
              key="3"
              src="/images/pages/pricing/featuresList/nike.svg"
              width={74}
              height={26}
            />,
            <LogoImage
              key="4"
              src="/images/pages/pricing/featuresList/meta.svg"
              width={87}
              height={17}
            />,
            <LogoImage
              key="5"
              src="/images/pages/pricing/featuresList/stellar.svg"
              width={96}
              height={20}
            />,
            <LogoImage
              key="6"
              src="/images/pages/pricing/featuresList/mongo.svg"
              width={106}
              height={29}
            />,
            <LogoImage
              key="7"
              src="/images/pages/pricing/featuresList/luminar.svg"
              width={96}
              height={19}
            />,
            <LogoImage
              key="8"
              src="/images/pages/pricing/featuresList/layers.png"
              width={34}
              height={27}
            />,
            <LogoImage
              key="9"
              src="/images/pages/pricing/featuresList/unwritten.svg"
              width={99}
              height={17}
            />,
            <LogoImage
              key="10"
              src="/images/pages/pricing/featuresList/stronghold.svg"
              width={103}
              height={24}
            />,
            <LogoImage
              key="11"
              src="/images/pages/pricing/featuresList/fortanix.svg"
              width={113}
              height={23}
            />,
            <LogoImage
              key="12"
              src="/images/pages/pricing/featuresList/hrmano.svg"
              width={126}
              height={27}
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default LogoStrip;
