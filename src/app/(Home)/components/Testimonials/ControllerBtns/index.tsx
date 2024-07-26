"use client";

import LeftArrowIcon from "@/components/base/Icons/Arrow-Left";
import RightArrowIcon from "@/components/base/Icons/Arrow-Right";
import { MutableRefObject } from "react";
import { useSwiper } from "swiper/react";

type TProps = {
  swiperContainerRef: MutableRefObject<any>;
};

const SwiperBtnsController = ({ swiperContainerRef: ref }: TProps) => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns flex gap-x-4 md:flex-col gap-y-2">
      <button
        onClick={() => ref?.current?.swiper?.slideNext()}
        className="w-12 h-12 rounded-full flex justify-center items-center bg-primaryColor text-white hover:text-primaryColor hover:bg-white duration-300 hover:shadow-xl"
      >
        <LeftArrowIcon />
      </button>
      <button
        onClick={() => ref?.current?.swiper?.slidePrev()}
        className="w-12 h-12 rounded-full flex justify-center items-center bg-primaryColor text-white hover:text-primaryColor hover:bg-white duration-300 hover:shadow-xl"
      >
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default SwiperBtnsController;
