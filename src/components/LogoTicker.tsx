import Image from "next/image";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";


const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-xl text-center text-[#7A7A7A]">Trusted by the world’s most innovative teams</h2>

        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative before:left-0 after:right-0 before:top-0 after:bottom-0">
          <div className="flex flex-wrap gap-16 justify-center">
            {
              images.map((img)=>{
                return (
                  <Image key={img.alt} src={img.src} alt={img.alt} className="flex-none h-8 w-auto"/>
                )
              })
            }
          </div> 
        </div>  
      </div>
    </div>
  );
};
