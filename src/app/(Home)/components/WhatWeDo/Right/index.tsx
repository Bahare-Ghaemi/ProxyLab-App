import DesignIcon from "@/components/base/Icons/Design";
import DevelopIcon from "@/components/base/Icons/Develop";
import ProgressIcon from "@/components/base/Icons/Progress";
import TargetIcon from "@/components/base/Icons/Target";
import WhatWeDoItem from "./Item";

const list = [
  {
    title: "Digital Marketing",
    desc: "That is the simply dummy text the printing and typesetting industry. ",
    icon: <TargetIcon />,
    color: "#34D27B",
    bgColor: "#E9F6EE",
  },
  {
    title: "SEO",
    desc: "That is the simply dummy text the printing and typesetting industry. ",
    icon: <ProgressIcon />,
    color: "#7879F1",
    bgColor: "#7879F10F",
  },
  {
    title: "UI UX Design",
    desc: "That is the simply dummy text the printing and typesetting industry. ",
    icon: <DesignIcon />,
    color: "#FD695A",
    bgColor: "#BC5C560F",
  },
  {
    title: "Web Development",
    desc: "That is the simply dummy text the printing and typesetting industry. ",
    icon: <DevelopIcon />,
    color: "#53C8FF",
    bgColor: "#68CDFD14",
  },
];

const WhatWeDoRightSide = () => {
  return (
    <div className="grid md:grid-cols-2 mt-10 md:mt-0 gap-8 w-full md:w-6/12">
      {list.map((item, index) => (
        <WhatWeDoItem item={item} key={index} />
      ))}
    </div>
  );
};

export default WhatWeDoRightSide;
