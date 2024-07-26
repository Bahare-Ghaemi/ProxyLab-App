"use client";
import { useMemo, useState } from "react";
import WorkItem from "./Item";

const workList = [
  { src: "/assets/images/work-1.svg", type: "app", href: "#" },
  { src: "/assets/images/work-2.svg", type: "web", href: "#" },
  { src: "/assets/images/work-3.svg", type: "app", href: "#" },
  { src: "/assets/images/work-4.svg", type: "web", href: "#" },
  { src: "/assets/images/work-5.svg", type: "app", href: "#" },
  { src: "/assets/images/work-6.svg", type: "web", href: "#" },
];

const WorkList = () => {
  const [activeTab, setActiveTab] = useState(1);

  const filteredWorkList = useMemo(() => {
    switch (activeTab) {
      case 1:
        return workList;
        break;
      case 2:
        return workList?.filter((workItem) => workItem?.type == "app");
        break;
      case 3:
        return workList?.filter((workItem) => workItem?.type == "web");
        break;
      default:
        break;
    }
  }, [activeTab, workList]);

  return (
    <div className="">
      <div role="tablist" className="tabs tabs-bordered pb-5">
        <a
          role="tab"
          className={`tab md:text-lg ${activeTab == 1 && "tab-active"}`}
          onClick={() => setActiveTab(1)}
        >
          All
        </a>
        <a
          role="tab"
          className={`tab md:text-lg ${activeTab == 2 && "tab-active"}`}
          onClick={() => setActiveTab(2)}
        >
          Application
        </a>
        <a
          role="tab"
          className={`tab md:text-lg ${activeTab == 3 && "tab-active"}`}
          onClick={() => setActiveTab(3)}
        >
          Website
        </a>
      </div>
      <div className="work-list grid md:grid-cols-3 ">
        {filteredWorkList?.map((workItem, index) => (
          <WorkItem data={workItem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
