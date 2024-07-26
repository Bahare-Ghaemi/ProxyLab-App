"use client";

import Slider from "@/components/base/Slider";
import testimonials from "@/data/testimonials";
import Image from "next/image";
import { SwiperSlide, Swiper, SwiperRef } from "swiper/react";
import Testimonial from "./Item";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import SwiperBtnsController from "./ControllerBtns";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LegacyRef, MutableRefObject, useRef } from "react";

type TProps = {
  className?: string;
};

const Testimonials = ({ className }: TProps) => {
  const swiperContainerRef = useRef() as MutableRefObject<any>;

  return (
    <section className={`flex flex-col gap-y-12 md:flex-row justify-between ${className}`}>
      <div className="w-full md:w-5/12">
        <span className="text-primaryColor md:text-2xl md:font-semibold mb-2 md:mb-4 inline-block">
          testimonial
        </span>
        <h2 className="font-bold text-3xl md:text-[42px] leading-[40px] md:leading-[53px] mb-10">
          What Our Customer Say About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-x-7 gap-y-6">
          <Swiper
            slidesPerView={"auto"}
            loop
            className="w-full"
            modules={[Autoplay, Navigation, Pagination, A11y]}
            ref={swiperContainerRef}
          >
            {testimonials?.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Testimonial data={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperBtnsController swiperContainerRef={swiperContainerRef} />
        </div>
      </div>
      <div className="md:w-6/12">
        <figure>
          <Image
            src={"/assets/images/testimonial.svg"}
            alt="testimonial"
            className="w-full"
            width={500}
            height={500}
          />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
