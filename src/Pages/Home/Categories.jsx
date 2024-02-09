/* eslint-disable no-unused-vars */
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiWindmill } from "react-icons/gi";
import { GiModernCity } from "react-icons/gi";
import { TbMountain } from "react-icons/tb";
import { TbPool } from "react-icons/tb";
import { GiBoatFishing } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { useState } from "react";
const categoryItem = [
  {
    label: "Beach",
    icon: <FaUmbrellaBeach />,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: <GiWindmill />,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: <GiModernCity />,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: <TbMountain />,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: <TbPool />,
    description: "This property has a beautiful pool!",
  },
  {
    label: "Lake",
    icon: <GiBoatFishing />,
    description: "This property is near a lake!",
  },
  {
    label: "Caves",
    icon: <GiCaveEntrance />,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: <GiForestCamp />,
    description: "This property offers camping activities!",
  },
];


const Categories = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (label) => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
      const updateQuery = { ...currentQuery, category: label };
      const url = queryString.stringifyUrl({
        url: "/",
        query: updateQuery,
      });
      navigate(url);
      setActiveCategory(label)
    }
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.ibb.co/p1DvZCp/pexels-photo-collections-213958.jpg')",
        color: "black",
      }}
      className="h-[450px] bg-cover mt-16 bg-fixed flex flex-col items-center relative"
    >
      <div className="absolute inset-0 bg-black opacity-80 z-0">
        <h1 className="text-center text-white mt-10 text-4xl font-bold my-6">
          Tour Type
        </h1>
        <div className=" flex mt-7 items-center overflow-x-auto justify-center gap-8 hover:text-neutral-800 transition cursor-pointer">
          {categoryItem.map((category) => (
            <div
              onClick={() => handleClick(category.label)}
              className={`flex p-6 border-b-2 flex-col justify-center items-center ${
                activeCategory === category.label
                  ? "bg-gray-200 rounded-lg border-b-neutral-800 text-neutral-800"
                  : "border-transparent text-neutral-500"
              }`}
              key={category.label}
            >
              <div className="text-4xl">{category.icon}</div>
              <h2 className="text-sm font-medium">{category.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
