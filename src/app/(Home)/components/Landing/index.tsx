"use client";
import BaseButton from "@/components/base/Button/Action";
import PlayerButton from "@/components/base/Icons/PlayerBtn";
import Image from "next/image";

type TProps = {
  className?: string;
};

const Landing = ({ className }: TProps) => {
  return (
    <section
      className={`flex flex-col md:flex-row justify-between ${className}`}
    >
      {/* Left Side */}
      <div className="mt-6 md:mt-16">
        <h1 className="text-[40px] md:text-[70px] font-extrabold leading-[50px] md:leading-normal">
          Best <br className="md:hidden" />
          <span className="text-primaryColor">Marketing</span>
          <br /> <span className="md:-mt-4 block">Digital Agency</span>
        </h1>
        <p className="text-[#3d3d3fad] text-sm md:text-xl md:w-9/12 mt-[25px] mb-12">
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose
        </p>
        <div className="flex items-center justify-between md:justify-normal md:items-baseline md:gap-x-10">
          <BaseButton
            text="Get Started"
            padding="px-6 py-2 md:px-8 md:py-4"
            clickHandler={() => {}}
          />
          <button className="flex items-center gap-x-4">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] shadow-lg rounded-full flex justify-center items-center">
              <PlayerButton />
            </div>
            <span className="text-primaryColor md:text-lg block">
              Watch Video
            </span>
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-7/12">
        <figure className="mt-10">
          <Image
            src={"/assets/images/landing-img.svg"}
            alt="landing-img"
            width={600}
            height={500}
          />
        </figure>
      </div>
    </section>
  );
};

export default Landing;
