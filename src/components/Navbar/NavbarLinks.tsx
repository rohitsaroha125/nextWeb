import Link from "next/link"

interface NavbarOptions{
    title: string,
    link: string
}

const navbarOptions: NavbarOptions[] = [
    {
        title:'Home',
        link:'/'
    },
    {
        title: 'About Us',
        link: '/about'
    },
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: 'Contact Us',
        link: '/contact'
    },
]

const NavbarLinks = () => {
    return(
        <div className="flex gap-14">
            {
                navbarOptions.map((option:NavbarOptions, i:number) => {
                    return <Link href={option.link} key={i}><p className="text-white">{option.title}</p></Link>
                })
            }
        </div>
    )
}

export default NavbarLinks