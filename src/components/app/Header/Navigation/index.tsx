import { navList } from "@/utils";
import Link from "next/link";

type TProps = {
  className?: string
}

const Navigation = ({className}: TProps) => {
  return (
    <nav className={`${className}`}>
      <ul className="flex items-center gap-x-12 font-bold">
        {navList?.map((navItem, index) => (
          <li key={index}>
            <Link
              href={navItem?.link}
              className="hover:text-primaryColor duration-300"
            >
              {navItem?.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
