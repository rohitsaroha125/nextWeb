"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from './NavbarLinks.module.css'
import { NavbarOptions } from "./Navbar"

const NavbarLinks = ({navbarOptions}: {navbarOptions: NavbarOptions[]}) => {
    const pathName = usePathname()

    return(
        <div className={`flex items-center gap-14 ${styles.navbarPc}`}>
            {
                navbarOptions.map((option:NavbarOptions, i:number) => {
                    return <Link href={option.link} key={i} className={`${
                        pathName === option.link ? `bg-white text-black py-2 px-4 ${styles.activeNavLink}` : 'text-white'
                    }`}><p>{option.title}</p></Link>
                })
            }
        </div>
    )
}

export default NavbarLinks