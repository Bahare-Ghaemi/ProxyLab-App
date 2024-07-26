import Image from "next/image";

type TProps = {
  className?: string;
};

const AboutUsRightSide = ({ className }: TProps) => {
  return (
    <div className={`${className}`}>
      <figure>
        <Image
          src={"/assets/images/about-img.svg"}
          alt="about-img"
          width={650}
          height={570}
        />
      </figure>
    </div>
  );
};

export default AboutUsRightSide;
