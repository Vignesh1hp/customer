import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="w-64 fixed h-full  shadow-md ">
      <div className="flex h-18 justify-center items-center">
        {/* <h1 className="text-2xl text-center text-black font-bold h-18">Logo</h1> */}
        <img src="./img.jpg" alt="Logo" />
      </div>

      <hr className="text-gray-400"/>

      <ul className="font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-[#FE6A49] hover:text-[white] py-4">
          <a href="#" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2 ml-4"></FaHome>
            Dashbord
          </a>
        </li>

        <li className="mb-2 rounded hover:shadow hover:bg-[#FE6A49] hover:text-[white] py-4">
          <a href="#" className="px-3">
            <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2 ml-4"></FaUsers>
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
