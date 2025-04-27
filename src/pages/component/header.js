import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex flex-row bg-[#292929] h-20 w-full items-center justify-between">
  <div className="flex items-center justify-end mr-32 w-2/5">
    <img src="logo.webp" className="h-10 w-10" />
  </div>
  <div className="flex items-center justify-start w-3/5">
    <ul className="flex flex-row text-white gap-5">
      <li>
        <Link href="/"><span>Home</span></Link>
      </li>
      <li>
        <Link href="#"><span>About Us</span></Link>
      </li>
      <li>
        <Link href="#"><span>Services</span></Link>
      </li>
      <li>
        <Link href="#"><span>Gallery</span></Link>
      </li>
      <li>
        <Link href="#"><span>Contact Us</span></Link>
      </li>
    </ul>
  </div>
</div>

    </>
  );
};

export default Header;
