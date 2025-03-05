"use client";

import * as React from "react";
import LogoImage from "./LogoImage";
import { RunningLine } from "../../RunningLine";

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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb189e48394d0fb7baf1d1db32201361a6f1e7e695e463f17041435dfac65f7?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
              className="w-14 aspect-[2.8]"
            />,
            <LogoImage
              key="2"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09b211b0e8e4d1acbabed6dbba186067d4b36918dfcfa598860d6b4072a75d8e?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
              className="aspect-[3.89] w-[70px]"
            />,
            <LogoImage
              key="3"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dc41ecd06bc7d6d05bb2c62e53f2857814aac193328168ad836f59d0fcf1db3?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
              className="aspect-[2.85] w-[74px]"
            />,
            <LogoImage
              key="4"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df43c7cdc6d1a77a5c0e705991140505b89d7b03ab712e00b545d6f87b5131cf?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
              className="aspect-[5.13] w-[87px]"
            />,
            <LogoImage
              key="5"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a85124c4c78be7d525cd644f86b44e49a8b36b03e45ba6f8194bc06035fe951?placeholderIfAbsent=true&apiKey=c8cd7228d5b149c59753a0e9d2f2b879"
              className="aspect-[3.65] w-[106px]"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default LogoStrip;
