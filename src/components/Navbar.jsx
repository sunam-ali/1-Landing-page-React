import { useState } from "react";
import { navItems } from "../data/navitems";
import Button from "./ui/Button";
import MenuIcon from "./ui/icons/MenuIcon";
import XIcon from "./ui/icons/XIcon";
import Logo from "./ui/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-lg border-b border-b-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Button
              className="border hover:bg-white hover:text-black"
              link="/login"
            >
              Sign In
            </Button>
            <Button
              className="bg-linear-to-r from-orange-500 to-orange-800"
              link="/register"
            >
              Create an account
            </Button>
          </div>
          {/* toggling button  */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu} className="mt-1 cursor-pointer">
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {/* mobile menu  */}
        {mobileMenuOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 mt-3 w-full p-12 flex flex-col space-y-6 justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  className="p-4 rounded-md cursor-pointer transition duration-100 text-center hover:bg-neutral-800"
                  key={index}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Button className="border border-white/70" link="/login">
                Sign In
              </Button>
              <Button
                className="bg-linear-to-r from-orange-500 to-orange-800"
                link="/register"
              >
                Create an account
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
