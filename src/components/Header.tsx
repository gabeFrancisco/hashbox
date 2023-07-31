import Link from "next/link";
import React from "react";

const Header = () => {
  const links = [
    {
      title: "Hashes",
      link: "/hashes",
    },
    {
      title: "GUIDs",
      link: "/guids",
    },
  ];
  return (
    <header className="flex flex-row items-center w-full border-b-2 border-gray-300 border-dashed">
      <div className="text-3xl mx-10 text-gray-800">🄷🄰🅂🄷<span className="text-blue-800">🄱🄾🅇</span></div>
      <div>
        <ul className="flex flex-row text-gray-800">
          {links.map((el, key) => (
            <li className="m-5">
              <Link href={el.link}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
