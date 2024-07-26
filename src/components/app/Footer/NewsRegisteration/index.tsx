"use client";

import BaseButton from "@/components/base/Button/Action";

type TProps = {
  className?: string;
};

const NewsRegisteration = ({ className }: TProps) => {
  return (
    <div className={`${className}`}>
      <h6 className="text-darkColor font-bold">Join a Newsletter</h6>
      <form className="mt-[18px] md:mt-[26px]">
        <label htmlFor="email" className="flex flex-col">
          <span>Your Email</span>
          <input
            type="text"
            id="email"
            name="email"
            className="border border-primaryColor bg-transparent focus:outline-0 ring-offset-2 focus:ring-1 focus:ring-primaryColor rounded-xl px-4 py-3 mt-2"
            placeholder="Enter Your Email"
          />
        </label>
        <BaseButton
          fontSize={14}
          padding="px-4 py-2"
          clickHandler={() => {}}
          text="Subscribe"
          className="mt-3"
        />
      </form>
    </div>
  );
};

export default NewsRegisteration;
