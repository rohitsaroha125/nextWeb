import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
    return(
        <div className="w-full flex justify-between py-5">
            <div><h1 className="text-2xl font-bold text-white">NextWeb</h1></div>
            <NavbarLinks />
        </div>
    )
}

export default Navbar