"use client";
import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa"; // <-- social icons

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-t from-black via-[#2b0040] to-[#7d3cff] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between">
        {/* Left Side - Logo + Social */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-2">
            {/* Logo Placeholder */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-600"></div>
            <span className="text-xl font-semibold">AR/VR Hub</span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-5 text-2xl">
            <a
              href="#"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-2 gap-12 mt-12 md:mt-0 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="uppercase font-semibold mb-4">How We Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Prior Authorization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Insurance Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Benefit Checks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="uppercase font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Careers
                </a>
              </li>
              <li className="mt-4 text-gray-400">
                45 W 27th St, FL 8, New York, NY 10001
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
