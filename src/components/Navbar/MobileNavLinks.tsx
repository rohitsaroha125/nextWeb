import { NavbarOptions } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './NavbarLinks.module.css'

const MobileNavLinks = ({
  navbarOptions,
}: {
  navbarOptions: NavbarOptions[];
}) => {
    const pathName = usePathname()

  return (
    <div className={`flex items-center gap-14 ${styles.mobileMenu}`}>
      {navbarOptions.map((option: NavbarOptions, i: number) => {
        return (
          <Link
            href={option.link}
            key={i}
            className={`${
              pathName === option.link
                ? `text-white font-bold`
                : "text-white"
            }`}
          >
            <p>{option.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNavLinks;
