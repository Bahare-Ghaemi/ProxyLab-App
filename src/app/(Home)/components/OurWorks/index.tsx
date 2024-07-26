import WorkList from "./List";

type TProps = {
  className?: string;
};

const OurWorks = ({ className }: TProps) => {
  return (
    <section className={`${className}`}>
      <span className="text-primaryColor md:text-2xl">Our Work</span>
      <h2 className="text-3xl md:text-[42px] leading-[40px] md:leading-normal font-bold mt-2 mb-8 md:mb-12">See Our Recent Case Studies</h2>
      <WorkList/>
    </section>
  );
};

export default OurWorks;
