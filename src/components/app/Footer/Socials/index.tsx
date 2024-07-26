import CallIcon from "@/components/base/Icons/Call";
import LocationIcon from "@/components/base/Icons/Location";
import MailIcon from "@/components/base/Icons/Mail";

const socials = [
  { text: "Dhaka, Bangladesh", icon: <LocationIcon />, link: "#" },
  { text: "0943833399", icon: <CallIcon />, link: "#" },
  { text: "support@proxylab.com", icon: <MailIcon />, link: "#" },
];

const Socials = () => {
  return (
    <ul className="text-darkColor flex flex-col gap-y-3.5">
      {socials?.map((social, index) => (
        <li className="flex items-center gap-x-2" key={index}>
          {social?.icon}
          <span>{social?.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
