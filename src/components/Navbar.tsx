import { navlinks } from "@/utility/navlinks";
import Navlink from "./Navlink";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full fixed z-10 top-0 left-0 right-0 flex justify-between bg-slate-700">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        priority={true}
      />
      <div className="grid grid-cols-4">
        {navlinks.map((link, index) => (
          <Navlink key={index} link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
