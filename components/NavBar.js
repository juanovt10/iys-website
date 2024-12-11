'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import ColombianFlag from "../assets/icons/colombia.png";
import USFlag from "../assets/icons/united-states.png";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
];

const NavBar = () => {
  const [language, setLanguage] = useState("en");

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en";
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage); // Save preference
    }
  };

  const isSpanish = language === "es";

  return (
    <>
      <nav className="border-b fixed backdrop-blur bg-white/80 z-50 w-full">
        <div className="flex items-center justify-between px-3 py-2 md:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="Logo" width={50} height={50} />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`text-lg transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-gray-700"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild>
              <Link href="/contact">Contact</Link>
            </Button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
              aria-label={`Switch to ${isSpanish ? "English" : "Spanish"}`}
            >
              <Image
                src={isSpanish ? USFlag : ColombianFlag}
                alt=""
                width={24}
                height={16}
              />
              <span className="text-sm font-medium">
                {isSpanish ? "EN" : "ES"}
              </span>
            </button>
          </div>


          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`text-lg font-medium ${
                        pathname === item.href ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Button asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
                  <div className="flex items-center space-x-4 mt-4">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center space-x-2"
                      aria-label={`Switch to ${
                        isSpanish ? "English" : "Spanish"
                      }`}
                    >
                      <Image
                        src={isSpanish ? USFlag : ColombianFlag}
                        alt=""
                        width={24}
                        height={16}
                      />
                      <span className="text-sm font-medium">
                        {isSpanish ? "EN" : "ES"}
                      </span>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <div className="h-[65px] md:h-[65px]" />
    </>
  );
};

export default NavBar;
