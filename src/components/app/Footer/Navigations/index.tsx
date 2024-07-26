import Link from "next/link";

type TNav = {
  tilte: string;
  link: string;
};

type TProps = {
  title: string;
  navList: TNav[];
};

const FooterNavigation = ({ navList, title }: TProps) => {
  return (
    <div className="space-y-[18px] md:space-y-[26px]">
      <h6 className="text-darkColor font-bold">{title}</h6>
      <ul className="flex flex-col gap-y-3">
        {navList?.map((navItem, index) => (
          <li key={index}>
            <Link href={navItem?.link} className="text-mutedColor">
              {navItem?.tilte}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavigation;
