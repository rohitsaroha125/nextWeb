"use client";
import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import MobileNavLinks from "./MobileNavLinks";
import styles from './NavbarLinks.module.css'

export interface NavbarOptions {
  title: string;
  link: string;
}

const navbarOptions: NavbarOptions[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <div className={`w-full flex justify-between py-5 ${styles.navBar}`}>
      <div>
        <h1 className="text-2xl font-bold text-white">NextWeb</h1>
      </div>
      <NavbarLinks navbarOptions={navbarOptions} />
      <div className={`${styles.btn2}`} data-menu="2" onClick={toggleMenu}>
        <div className={styles.icon}></div>
      </div>
      {open && <MobileNavLinks navbarOptions={navbarOptions} />}
    </div>
  );
};

export default Navbar;
