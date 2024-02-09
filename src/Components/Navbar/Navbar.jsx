import { useEffect, useState } from "react";
import logo from "../../assets/logo.png"
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cupcake"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("cupcake");
    } else {
      setTheme("forest");
    }
  };
  const handleSignOut = () => {
    LogOut().then().catch();
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const navLinks = (
    <>
      <li className=" ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" ">
        <NavLink to="/ourPackages">Our Packeges</NavLink>
      </li>
      <li className=" ">
        <NavLink to="/contact">Contact With Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent text-yellow-400 fixed z-10 h-20">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost  text-white">
            <img className="w-full h-full text-white" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            {user ? (
              <div className="mx-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  {user && (
                    <div className="w-36 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  )}
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  w-72 bg-[#242428c4] rounded-box"
                >
                  <p className="mx-auto">{user.displayName}</p>
                  <hr className="w-3/4 mt-2 mx-auto" />
                  <li>
                    <Link to={'dashboard'}>Profile</Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Sign Out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline mx-3 btn-warning text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>

        <input
          onChange={handleToggle}
          type="checkbox"
          className="toggle toggle-info"
        />
      </div>
    </div>
  );
};

export default Navbar;
