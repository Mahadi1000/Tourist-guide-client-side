/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";

const PackageTab = ({ items }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const handleDetails = (item) => {
            if (user) {
              navigate(`/packegeDetails/${item.place}`, { state: item });
            } else {
              navigate("/login");
            }
  }

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
            {items &&
              items.map((item) => (
                <div
                  key={item._id}
                  className="rounded-md shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100"
                >
                  <div className="flex group items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.guide.image}
                        alt=""
                        className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                      />
                      <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leadi">
                          {item.guide.name}
                        </h2>
                        <span className="inline-block text-xs leadi dark:text-gray-400">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <button title="Open options" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                        <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                        <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover group-hover:scale-110 transition object-center w-full h-72 dark:bg-gray-500"
                  />
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        title="Bookmark post"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                      </button>

                      <p>{item.package.price}</p>
                    </div>
                    <div>
                      <div className="flex justify-around">
                        <p>Packege: {item.package.name}</p>
                        <p>Duration: {item.package.duration}</p>
                      </div>
                      <hr className="mt-2" />
                      <p>Place: {item.place}</p>
                    </div>
                  </div>
                  <div className=" p-4 ">
                    <button
                      onClick={() => handleDetails(item)}
                      className="btn "
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PackageTab;
