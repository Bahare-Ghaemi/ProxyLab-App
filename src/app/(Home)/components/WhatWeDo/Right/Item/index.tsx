"use client";
import { useState } from "react";

type TItem = {
  color: string;
  bgColor: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

type TProps = {
  item: TItem;
};

const WhatWeDoItem = ({ item }: TProps) => {
  const [isHover, setIsHover] = useState<null | string>(null);

  return (
    <div
      className={`rounded-[15px] shadow-xl shadow-[#00000011] cursor-context-menu group duration-300 hover:shadow-lg`}
      style={{
        backgroundColor: isHover == item?.title ? item?.color : "white",
      }}
      onMouseEnter={() => setIsHover(item?.title)}
      onMouseLeave={() => setIsHover(null)}
    >
      <div className="bg-white p-8 flex flex-col items-center mb-[10px] justify-between">
        <div className="flex flex-col items-center">
          <div
            className="w-[70px] h-[70px] rounded-full flex justify-center items-center"
            style={{ backgroundColor: item?.bgColor }}
          >
            {item?.icon}
          </div>
          <h4 className="text-xl font-bold mt-4 mb-2">{item?.title}</h4>
          <p className="text-[#747474] text-sm leading-[26px] text-center">
            {item?.desc}
          </p>
        </div>
        <button className={`text-xs underline mt-3 text-[${item?.color}]`}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default WhatWeDoItem;
