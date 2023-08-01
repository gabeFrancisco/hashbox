import Link from "next/link";
import React from "react";

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
      <div className="text-3xl mx-10 text-gray-800 lg:text-md">🄷🄰🅂🄷<span className="text-blue-800">🄱🄾🅇</span></div>
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
