"use client";

import BaseButton from "@/components/base/Button/Action";

const WhatWeDoLeftSide = () => {
  return (
    <div className="w-full md:w-5/12">
      <span className="md:text-[24px] text-primaryColor">What we do</span>
      <h2 className="text-3xl md:text-[42px] font-bold leading-[40px] md:leading-normal">
        We Are Here To Help You Build Your Business
      </h2>
      <p className="text-[#515151] text-sm md:text-base mt-4 md:mt-8 mb-6">
        Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem
        accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab
        illo invento veritatis quasi architecto beatae vitae dicta.
      </p>
      <BaseButton
        text="Explore all service"
        padding="px-4 py-3 md:px-8 md:py-4"
        clickHandler={() => {}}
      />
    </div>
  );
};

export default WhatWeDoLeftSide;
