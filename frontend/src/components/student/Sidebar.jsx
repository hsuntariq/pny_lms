import React, { useEffect, useState } from "react";
import { sidebar_data } from "./data/sidebar_data";

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");

  useEffect(() => {
    setSelected("Dashboard");
  }, []);

  return (
    <>
      <ul className="rounded-md md:w-[30%] xl:w-[25%] bg-gray-900 text-white py-10 px-5">
        {sidebar_data?.map((item, index) => {
          return (
            <li
              onClick={() => setSelected(item.title)}
              className={`flex gap-3 py-2 my-2 items-center cursor-pointer transition-all duration-300 hover:bg-white hover:text-black px-3 rounded-lg ${
                selected == item.title && "bg-white text-black"
              } `}
              key={index}
            >
              {item?.icon} {item?.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
