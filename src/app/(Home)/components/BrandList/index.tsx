"use client";

type TProps = {
  className?: string;
};

const brandList = [
  { src: "stack.svg", href: "#" },
  { src: "descript.svg", href: "#" },
  { src: "etsy.svg", href: "#" },
  { src: "spotify.svg", href: "#" },
  { src: "logitech.svg", href: "#" },
];

import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Slider from "@/components/base/Slider";

const BrandList = ({ className }: TProps) => {
  return (
    <section className={`${className}`}>
      <h2 className="mx-auto text-lg font-bold text-center">
        OUR TRUSTED CLIENTS
      </h2>
      <Slider
        autoplay
        loop
        modules={[Autoplay]}
        break320={{ slidesPerView: 1, spaceBetween: 20 }}
        break1280={{ slidesPerView: 4, spaceBetween: 20 }}
        break1500={{ slidesPerView: 5, spaceBetween: 30 }}
        className="mt-8 md:mt-[50px]"
      >
        {brandList?.map((brandItem, index) => (
          <SwiperSlide>
            <figure>
              <Image
                src={`/assets/images/brands/${brandItem?.src}`}
                alt={`brand-${index + 1}`}
                width={160}
                height={40}
                className="w-8/12 mx-auto md:mx-0 md:w-[160px] md:h-[40px]"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default BrandList;
