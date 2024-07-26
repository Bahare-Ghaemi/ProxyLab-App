import Logo from "@/components/base/Logo";
import Socials from "./Socials";
import FooterNavigation from "./Navigations";
import NewsRegisteration from "./NewsRegisteration";

type TProps = {
  className?: string;
};

const Footer = ({ className }: TProps) => {
  return (
    <footer
      className={`bg-white text-sm md:text-base mt-20 mb-6 md:w-10/12 mx-auto rounded-3xl md:px-10 py-8 ${className}`}
    >
      <div className="flex flex-col md:flex-row gap-y-9 justify-between w-10/12 mx-auto md:w-full md:mx-0">
        <div className="flex flex-col gap-y-[26px]">
          <Logo />
          <Socials />
        </div>
        <FooterNavigation
          title="Service"
          navList={[
            { tilte: "UI UX Design", link: "#" },
            { tilte: "Mobile Design", link: "#" },
            { tilte: "Motion Graphic", link: "#" },
            { tilte: "Web Development", link: "#" },
            { tilte: "Digital Marketing", link: "#" },
            { tilte: "Business Development", link: "#" },
          ]}
        />
        <div className="flex justify-between md:gap-x-24">
          <FooterNavigation
            title="Company"
            navList={[
              { tilte: "Service", link: "#" },
              { tilte: "Features", link: "#" },
              { tilte: "Our Team", link: "#" },
              { tilte: "Portfolio", link: "#" },
              { tilte: "Blog", link: "#" },
              { tilte: "Contact Us", link: "#" },
            ]}
          />
          <FooterNavigation
            title="Our Social Media"
            navList={[
              { tilte: "Dribbble", link: "#" },
              { tilte: "Medium", link: "#" },
              { tilte: "Instagram", link: "#" },
              { tilte: "Facebook", link: "#" },
              { tilte: "Twitter", link: "#" },
              { tilte: "Behance", link: "#" },
            ]}
          />
        </div>
        <NewsRegisteration />
      </div>
    </footer>
  );
};

export default Footer;
