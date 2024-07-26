"use client";

import BaseButton from "@/components/base/Button/Action";
import Image from "next/image";

type TProps = {
  className?: string;
};

const CallToAction = ({ className }: TProps) => {
  return (
    <section
      className={`bg-primaryColor rounded-2xl relative flex flex-col-reverse gap-y-5 md:flex-row justify-around pt-[30px] md:py-[50px] px-8 ${className}`}
    >
      <div className="">
        <figure className="md:absolute bottom-0 left-0">
          <Image
            src={"/assets/images/person-2.svg"}
            alt="img"
            width={412}
            height={414}
          />
        </figure>
      </div>
      <div className="flex flex-col gap-y-10 md:w-5/12">
        <h2 className="text-center md:text-left text-4xl md:text-[42px] leading-[48px] md:leading-normal font-bold text-white">
          Have A Project In Mind? Let's Get To Work.
        </h2>
        <BaseButton
          text="Get in touch"
          clickHandler={() => {}}
          bgColor="white"
          txtColor="#FD695A"
          className="w-8/12 mx-auto md:mx-0 md:w-4/12"
        />
      </div>
    </section>
  );
};

export default CallToAction;
