import Image from "next/image";
import Link from "next/link";

type TProps ={
  width?: number
  height?: number
  className?: string
}

const Logo = ({width = 190, height = 40, className}: TProps) => {
  return (
    <Link href={"/"} className={`${className}`}>
      <figure>
        <Image
          src={"/assets/images/logo.svg"}
          alt="proxy-lab-logo"
          width={width}
          height={height}
        />
      </figure>
    </Link>
  );
};

export default Logo;
