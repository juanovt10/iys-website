'use client'

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"; // For active class
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Logo from "../assets/images/logo.png"

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname(); // Get current path

  return (
    <>
    
      <nav className="border-b fixed backdrop-blur bg-white/80 z-50 w-full">
        <div className="flex items-center justify-between px-4 py-2 md:px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="Logo" width={70} height={70} />
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
          </div>

          {/* <div className="hidden md:flex items-center space-x-4">
            <button>
              <Image src={ColombianFlag} alt="Switch to Spanish" width={24} height={16} />
            </button>
            <button>
              <Image src={USFlag} alt="Switch to English" width={24} height={16} />
            </button>
          </div> */}
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Button asChild onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Contact</Link>
                  </Button>
                  {/* Mobile Language Switcher */}

                  {/* <div className="flex items-center space-x-4 mt-4">
                    <button>
                      <Image src={ColombianFlag} alt="Switch to Spanish" width={24} height={16} />
                    </button>
                    <button>
                      <Image src={USFlag} alt="Switch to English" width={24} height={16} />
                    </button>
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      
      <div className="h-[72px] md:h-[85px]" />
    </>
  )
}

export default NavBar