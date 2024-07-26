import { TTestimonial } from "@/types";
import Image from "next/image";

type TProps = {
  data: TTestimonial;
};

const Testimonial = ({ data: testimonial }: TProps) => {
  return (
    <div className="bg-white shadow-lg shadow-[#d6d6d687] m-3 mb-6 px-10 py-8 rounded-[29px]">
      <div className="flex gap-x-4 items-center">
        <figure>
          <Image
            src={testimonial?.image}
            alt="testimonial-img"
            width={70}
            height={70}
          />
        </figure>
        <div className="flex flex-col gap-y-.5">
          <span className="text-darkColor font-bold">
            {testimonial?.title}
          </span>
          <span className="text-mutedColor text-sm">{testimonial?.job}</span>
        </div>
      </div>
      <div className="mt-[20px]">
        <p className="text-mutedColor text-sm md:text-base leading-[25px]">{testimonial?.comment}</p>
      </div>
    </div>
  );
};

export default Testimonial;
