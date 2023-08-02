import Link from "next/link";
import React from "react";

import logo from '../../public/logo.svg'
import Image from "next/image";

const Header = () => {
  const links = [
    {
      title: "Hashes",
      link: "/",
    },
    {
      title: "GUIDs",
      link: "/guids",
    },
    {
      title: "Colors",
      link: 'colors'
    }
  ];
  return (
    <header className="top-1 sticky shadow-lg bg-white flex flex-col md:flex-row lg:flex-row  lg:w-full items-center border-b-2  ">
      <div className="mx-10 text-gray-800 lg:text-md w-52 flex flex-row items-center justify-center"><Image className="text-blue-800" src={logo} alt="Logo"/></div>
      <div>
        <ul className="flex flex-row text-gray-800 text-sm lg:text-md">
          {links.map((el, key) => (
            <li className="m-5 hover:text-blue-800">
              <Link href={el.link}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
