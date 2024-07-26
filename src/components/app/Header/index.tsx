"use client";

import Logo from "@/components/base/Logo";
import Navigation from "./Navigation";
import BaseButton from "@/components/base/Button/Action";
import CallIcon from "@/components/base/Icons/Call";
import Drawer from "../Drawer";

const Header = () => {
  return (
    <header className="py-7 md:py-10">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <Logo className="hidden md:block" />
        <Logo className="md:hidden" width={140} />
        <Navigation className="hidden md:block" />
        <div className="flex items-center gap-x-4">
          <BaseButton
            text={<CallIcon />}
            padding="py-2 px-[10px] md:hidden"
            clickHandler={() => {}}
          />
          <BaseButton
            text={"Contact US"}
            className="hidden md:block"
            clickHandler={() => {}}
          />
          <Drawer className="md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
