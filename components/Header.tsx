"use client";
import React from "react";
import Link from "next/link";
import logo from '@/public/assets/logo-dm-transparent.png'
import HoverLink from "./snippets/HoverLink";
import Image from "next/image";


export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
  
    React.useEffect(() => {
      window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));

      // Add this effect to toggle the body overflow
      if (openNav) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }

      // Cleanup function
      return () => {
        document.body.classList.remove('overflow-hidden');
      };
    }, [openNav]);
  
    const generateHref = (item: string) => {
      switch (item) {
        case "Inicio":
          return "/";
        case "Nosotros":
          return "/nosotros";
        case "Blog":
          return "/blog";
        case "Contacto":
          return "/contacto";
        default:
          return "/";
      }
    };
  
    const menuItems = ["Inicio", "Nosotros", "Blog", "Contacto"];

    const commonLineStyles: React.CSSProperties = {
        transition: "0.5s",
        strokeWidth: "4px",
        stroke: "#F3F4F6",
        strokeLinecap: "round" as React.CSSProperties["strokeLinecap"], // Asegúrate de que sea del tipo correcto
      };

      
    return (
        
<>
<header className="w-full ">
    <nav style={{ zIndex: 100 }} 
    className="bg-dark w-full flex justify-between  fixed top-0 max-h-[80px]">
          <div>
            <div className="ml-6 my-1">
              <Link href={"./"}>
                <Image src={logo.src} alt="logo" width={130} height={10} />
              </Link>
            </div>
          </div>
  
        <div className="flex items-center lg:hidden">
            <div className="cursor-pointer" onClick={() => setOpenNav(!openNav)}>
             
            <div
            className="relative w-12 h-8 cursor-pointer mr-6"
            onClick={() => setOpenNav(!openNav)}
            style={{
            height: "50px",
            width: "50px",
            position: "relative",
            transform: "0.2s",
            }}
            >
            <svg
            className="pt-2"
            fill="none"
            viewBox="0 0 50 50"
            height="40"
            width="40"
            style={{ transition: "0.5s" }}
            > 
            {/* Línea superior */}
            <path
            style={{
            ...commonLineStyles,
            strokeDasharray: "40 40",
            strokeDashoffset: openNav ? "0" : "25",
            transformOrigin: "left",
            transform: openNav
              ? "rotateZ(45deg) translate(-7px, -5px)"
              : "none",
            stroke: openNav ? "#598fa6" : "#F3F4F6",
            }}
            d="M6 11L44 11"
            ></path>
 
        {/* Línea del medio */}
           <path
            style={{
            ...commonLineStyles,
            strokeDasharray: "40 40",
            strokeDashoffset: openNav ? "40" : "0",
            stroke: openNav ? "#598fa6" : "#F3F4F6",
            }}
            d="M6 24H43"
            ></path>
  
        {/* Línea inferior */}
           <path
            style={{
            ...commonLineStyles,
            strokeDasharray: "40 40",
            strokeDashoffset: openNav ? "0" : "60",
            transformOrigin: "left",
            transform: openNav
              ? "rotateZ(-45deg) translate(-5px, 5px)"
              : "none",
            stroke: openNav ? "#598fa6" : "#F3F4F6",
            }}
            d="M6 37H43"
            ></path>
            </svg>
        </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center mr-6">
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <HoverLink href={generateHref(item)} text={item} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
  
        <nav
          className={`h-[100vh] ${
            openNav ? "fixed inset-0" : "hidden"
          } px-8 bg-[#000000b3] backdrop-blur-sm w-full pt-4 pb-8 z-20 mt-[75px]`}
          style={{ backdropFilter: "blur(24px)" }}
        >
          {menuItems.map((item, index) => (
            <div key={`${item}-${index}`}>
              <Link
                className="w-full hover:text-blue-500 text-gray-200 font-semibold"
                href={generateHref(item)}
                onClick={() => setOpenNav(!openNav)}
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
      </header>
      <div className="h-[75.6px]"></div>
    
</>
        
    );
}