import Link from "next/link";
import React from "react";

import logo from "../../public/logo.svg";
import Image from "next/image";

const Header = () => {
  const links = [
    {
      title: "Hashes",
      link: "/",
    },
    {
      title: "GUIDs",
      link: "guids",
    },
    {
      title: "Base64",
      link: "base64",
    },
    {
      title: "BCrypt",
      link: "bcrypt",
    },
  ];
  return (
    <header className="top-0 sticky bg-white shadow-md flex flex-col md:flex-row lg:flex-row  lg:w-full items-center z-30">
      <div className="mx-10 mt-5 text-gray-800 md:mt-0 lg:text-md w-52 flex flex-row items-center justify-center">
        <Image className="text-blue-800" src={logo} alt="Logo" />
      </div>
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
