import Image from "next/image";
import Link from "next/link";

type TWorkItem = {
  src: string;
  href: string;
  type: string;
};

type TProps = {
  data: TWorkItem;
};

const WorkItem = ({ data: workItem }: TProps) => {
  return (
    <div className="work-item">
      <Link href={workItem?.href}>
        <figure>
          <Image
            src={workItem?.src}
            alt="work-img"
            width={360}
            height={340}
            className="w-full h-full rounded-lg hover:scale-105 duration-300"
          />
        </figure>
      </Link>
    </div>
  );
};

export default WorkItem;
