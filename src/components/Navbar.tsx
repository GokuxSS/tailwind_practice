import logoImage from "../assets/images/logosaas.png";
import menuSvg from "../assets/icons/menu.svg"

import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="container">
     <div className="py-4">
      <Image 
        src= {logoImage}
        alt="Logo"
        className="size-12"
        />
     </div>
    </div>
  );
};
