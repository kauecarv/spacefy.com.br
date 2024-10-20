"use client";

import Image from "next/image";
import NavbarLogo from "../Logo";
import AdminButton from "./buttons/AdminButton";
import MakeBudge from "./buttons/MakeBudge";
import MobileNavigation from "./MobileNavigation";
import NavbarNavigation from "./Navigation";

const NavbarComponent = () => {
  const userAdmin = true;

  return (
    <>
      <header className="w-full bg-black py-6 relative z-10">
        <div className="hidden xl:block absolute top-0 left-0 w-1/2 h-full">
          <Image
            src="/assets/blurs/white.png"
            alt="Blur Branco"
            width={64}
            height={64}
            className="absolute top-[-350px] left-[-190px] !w-full h-[850px] object-cover opacity-70 mix-blend-lighten"
          />
        </div>
        <div className="hidden xl:block absolute top-0 right-0 w-full h-full">
          <Image
            src="/assets/blurs/purple.png"
            alt="Blur Roxo"
            width={64}
            height={64}
            className="absolute top-[-100px] right-[-240px] !w-[600px] h-[600px] object-cover opacity-60 mix-blend-lighten"
          />
        </div>
        <div className="flex flex-wrap gap-4 xs:gap-0 items-center justify-center xl:justify-around py-4 h-fit px-4 md:px-24">
          <NavbarLogo />

          <div className="block xl:hidden px-8">
            <MobileNavigation />
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <NavbarNavigation />
          </div>

          <div className="flex gap-2">
            <MakeBudge />

            {userAdmin ? <AdminButton /> : null}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponent;
