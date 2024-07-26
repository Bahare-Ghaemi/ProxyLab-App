"use client";

import BaseButton from "@/components/base/Button/Action";

type TProps = {
  className?: string;
};

const AboutUsLeftSide = ({ className }: TProps) => {
  return (
    <div className={`${className}`}>
      <span className="md:text-[24px] text-primaryColor">About Us</span>
      <h2 className="text-3xl md:text-[42px] leading-[40px] md:leading-normal font-bold">
        We're More Than Digital Agency in the World
      </h2>
      <p className="text-[#515151] text-sm md:text-base mt-6 md:mt-8 mb-6">
        Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem
        accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab
        illo invento veritatis quasi architecto beatae vitae dicta.
      </p>
      <BaseButton padding="px-5 py-3 md:px-8 md:py-4" text="Get in touch" clickHandler={() => {}} />
    </div>
  );
};

export default AboutUsLeftSide;
