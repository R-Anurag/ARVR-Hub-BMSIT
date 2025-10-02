"use client";
import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-black overflow-hidden">
      {/* Radial Spherical Gradient Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-end">
        <div className="w-[1200px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(125,60,255,0.7)_0%,_rgba(0,0,0,0)_70%)]"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between">
        {/* Left Side - Logo + Social */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <span className="text-xl font-semibold">AR/VR Hub</span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://instagram.com/YOUR_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
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
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
