"use client";
import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-transparent overflow-hidden">
      

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Section - Logo + Socials */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <span className="text-lg font-bold">AR/VR Hub</span>
            </div>
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/YOUR_INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <h4 className="font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#">Home</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Events</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
