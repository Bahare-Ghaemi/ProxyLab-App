import HamburgerMenu from "@/components/base/Icons/Hamburger";
import Logo from "@/components/base/Logo";
import { navList } from "@/utils";
import Link from "next/link";

type TProps = {
  className?: string;
};

const Drawer = ({ className }: TProps) => {
  return (
    <div className={`drawer ${className}`}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button text-primaryColor">
          <HamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white text-base-content min-h-full w-80 p-8">
          <Logo width={170} />
          <ul className="mt-5">
            {navList?.map((nav, index) => (
              <li key={index}>
                <Link href={nav?.link} className="px-0">{nav?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
