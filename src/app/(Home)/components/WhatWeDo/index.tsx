import BaseButton from "@/components/base/Button/Action";
import WhatWeDoLeftSide from "./Left";
import WhatWeDoRightSide from "./Right";

type TProps = {
  className?: string;
};

const WhatWeDo = ({ className }: TProps) => {
  return (
    <section className={`${className} flex flex-col md:flex-row justify-between items-center`}>
      {/* Left Side */}
      <WhatWeDoLeftSide/>
      {/* Right Side */}
      <WhatWeDoRightSide/>
    </section>
  );
};

export default WhatWeDo;
