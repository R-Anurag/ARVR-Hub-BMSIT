"use client";
import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import logoImage from "../assets/images/ARVRHubLogo.png";

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-transparent overflow-hidden">
      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* ✅ Centered Logo + Text */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="AR/VR Hub Logo"
              className="w-14 h-14 object-contain"
            />
            <span className="text-2xl font-bold">AR/VR Hub</span>
          </div>

          {/* ✅ Centered Social Icons */}
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
              href="https://www.instagram.com/arvr_hub_bmsit?igsh=bWZpNzE1MnVzaXY5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/ar-vr-hub-bmsit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* ✅ Bottom Row */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 mt-8 gap-4 md:gap-0">
            {/* Quote - centered on mobile, left on desktop */}
            <p className="text-sm text-gray-400 max-w-md text-center md:text-left">
              Let us take you into the world of Augmented and Virtual Reality!
            </p>

            {/* Right Side Links */}
            <div className="flex flex-row justify-center space-x-6 md:flex-col md:items-end md:space-x-0 md:space-y-2">
              <a href="/ARVR-Hub-BMSIT/Home.jsx">Home</a>
              <a href="/ARVR-Hub-BMSIT/Teams.jsx#/Teams">Team</a>
              <a href="/ARVR-Hub-BMSIT/events#/events">Events</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
