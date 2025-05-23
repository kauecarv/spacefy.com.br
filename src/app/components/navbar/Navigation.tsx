"use client";  

import { motion } from "framer-motion";
import Link from "next/link";

const NavbarNavigation = () => {

  const navItems = [
    { label: "Quem Somos?", href: "about-us" },
    { label: "Nossos Serviços", href: "services" },
    { label: "Projetos Entregues", href: "projects" },
    { label: "Ver Avaliações", href: "reviews" }
  ];

  return (
    <motion.ul
      className="hidden xl:flex text-white w-full max-w-4xl  py-4 px-6 z-50"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}  
      animate={{ opacity: 1, y: 0, scale: 1 }}  
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {navItems.map((item, index) => (
        <li
          key={index}
          className="px-4 hover:-translate-y-1 transition duration-300"  
        >
          <Link 
            href={`#${item.href}`}
            className="font-poppins transition duration-300 hover:text-spacefy text-md font-normal text-white"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.href);
              if (element) {
                const navbarOffset = 100; 
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                  top: elementPosition - navbarOffset,
                  behavior: "smooth"
                });
              }
            }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default NavbarNavigation;
