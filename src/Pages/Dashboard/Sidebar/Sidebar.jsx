import { useState } from "react";
// Components
import { MdAddCard } from "react-icons/md";
import MenuItem from "./MenuItem";
import logo from "../../../assets/logo.png";
// Icons
import { FaUserSecret } from "react-icons/fa";
import { SiFoursquarecityguide } from "react-icons/si";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import ToggleBtn from "./ToggleButton";
import useAdmin from "../../../Hooks/useAdmin";

const Sidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isAdmin] = useAdmin();

  //   For guest/host menu item toggle button
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            {/*  */}
            <img
              className="hidden md:block"
              alt="logo"
              width="100"
              height="100"
              src={logo}
            />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              {/* <Logo /> */}
              <img
                className="hidden md:block"
                alt="logo"
                width="100"
                height="100"
                src={logo}
              />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is host */}
            <ToggleBtn toggleHandler={toggleHandler} />
            <nav>
              {isAdmin ? (
                <>
                  <MenuItem
                    icon={MdAddCard}
                    label="Add Package"
                    address="add-package"
                  />

                  {/* Menu Items */}
                  <MenuItem
                    icon={BsGraphUp}
                    label="Statistics"
                    address="/dashboard"
                  />
                  <MenuItem
                    icon={TbBrandBooking}
                    label="Manage Packages"
                    address="manage-item"
                  />
                  <MenuItem
                    icon={SiFoursquarecityguide}
                    label="Manage Tour Guide"
                    address="manage-guide"
                  />
                  <MenuItem
                    icon={FaUserSecret}
                    label="Manage Users"
                    address="manage-users"
                  />
                </>
              ) : (
                <>
                  {" "}
                  <MenuItem
                    icon={BsGraphUp}
                    label="Statistics"
                    address="/dashboard"
                  />
                  <MenuItem
                    icon={BsGraphUp}
                    label="My Bookings"
                    address="my-booking"
                  />
                </>
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <MenuItem
            icon={FcSettings}
            label="Home"
            address="/"
          />
          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
