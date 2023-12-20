import { Link, NavLink } from "react-router-dom";
import pic from "../assets/icons8-task-100.png";
import userIcon from "../assets/icons8-user-96.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // const user = false;
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-extrabold dark:text-white  border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-extrabold dark:text-white border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
          }
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-extrabold dark:text-white border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
          }
          to={"/faq"}
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-extrabold dark:text-white border-2 border-y-gray-600"
              : "bg-secondary dark:text-white font-semibold"
          }
          to={"/benefits"}
        >
          Benefits
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-base-100 ">
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
          <a className=" text-xl font-bold text-orange-300 flex justify-center items-center">
            <span className="">
              <img src={pic} alt="" />
            </span>
            TASK NEST
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                ) : (
                  <img alt="Tailwind CSS Navbar component" src={userIcon} />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user && <li>Welcome, {user.displayName}</li>}

              {user ? (
                <li>
                  <button onClick={handleLogOut} className="btn btn-sm">
                    LogOut
                  </button>
                </li>
              ) : (
                <li>
                  <Link to={"/login"} className="btn btn-sm">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
