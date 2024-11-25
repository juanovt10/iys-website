import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const socials = [
    {
      icon: Facebook,
      link: "#",
    },
    {
      icon: Twitter,
      link: "#",
    },
    {
      icon: Instagram,
      link: "#",
    },
    {
      icon: Linkedin,
      link: "#",
    }
  ]

  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="flex justify-between mx-20">
        {/* Section 1: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Office</h3>
          <p>Avenida 42 #28-47</p>
          <p>Villavicencio, Meta</p>

          <div className="flex mt-4 space-x-1">
            {socials.map((social, index) => {
              const Icon = social.icon; // Get the component reference
              return (
                <Link
                  key={index}
                  href={social.link}
                  className="border border-gray-600 rounded-lg p-2 hover:border-primary"
                >
                  <Icon className="h-6 w-6" /> {/* Render the dynamic icon */}
                </Link>
              );
            })}
          </div>
        </div>


        {/* Section 3: Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-400 hover:text-primary">Automation Solutions</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-primary">Digital Consulting</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-primary">Web Development</Link></li>
          </ul>
        </div>

        {/* Section 4: General Inquiries */}
        <div>
          <h3 className="text-xl font-bold mb-4">General Inquiries</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-gray-400">123-456-789</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-gray-400">abc@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t mx-20 border-gray-800 pt-6 text-center md:flex md:justify-between md:items-center text-gray-400">
        <p>&copy; 2024 Infraestructura y Senalizacion. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 md:mt-0 space-x-4">
          <Link href="#" className="hover:text-primary">About Us</Link>
          <Link href="#" className="hover:text-primary">Projects</Link>
          <Link href="#" className="hover:text-primary">Contact Us</Link>
          <Link href="#" className="hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
