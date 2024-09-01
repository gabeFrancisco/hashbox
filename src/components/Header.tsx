import Link from "next/link";
import React from "react";

import logo from "../../public/logo.webp"
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
    <header className="sticky top-0 z-30 flex flex-col items-center bg-white shadow-md md:flex-row lg:flex-row lg:w-full">
      <div className="flex flex-row items-center justify-center mx-10 mt-5 text-gray-800 md:mt-0 lg:text-md w-52">
        <Image className="text-blue-800" src={logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex flex-row text-sm text-gray-800 lg:text-md">
          {links.map((el, key) => (
            <li className="m-4 hover:text-blue-800">
              <Link href={el.link}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
