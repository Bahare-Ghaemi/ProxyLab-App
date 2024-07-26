import AboutUsLeftSide from "./Left";
import AboutUsRightSide from "./Right";

type TProps = {
  className?: string;
};

const AboutUs = ({ className }: TProps) => {
  return (
    <section
      className={`${className} flex flex-col gap-y-10 md:flex-row justify-between items-center`}
    >
      <AboutUsLeftSide className="w-full md:w-5/12" />
      <AboutUsRightSide className="" />
    </section>
  );
};

export default AboutUs;
