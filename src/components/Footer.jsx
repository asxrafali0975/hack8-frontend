import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 px-6 md:px-16 border-t border-purple-600/40">
      <div className="grid md:grid-cols-3 gap-40">
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-purple-400">Hack8 </h2>
            <img
              src="infiniteclub.jpeg"
              alt="Infinite Club Logo"
              className="w-[20%] rounded-full sm:h-10  object-contain"
            />
          </div>

          <p className="mt-2 text-sm">Code. Create. Conquer.</p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-3">About</h3>
          <p className="text-sm leading-relaxed">
            An 8-hour coding marathon organized by The Infinite Club, Axis
            Colleges.
          </p>
        </div>

        {/* Quick Links */}

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-3">
            Contact
          </h3>
          <p className="text-sm">Email: theinfiniteclub@axiscolleges.in</p>
          <p className="text-sm">Phone: +91 6307757731</p>
          <p className="text-sm">Phone: +91 7408929302</p>

          <div className="flex gap-4 mt-4 text-xl">
            <a
              href="https://www.instagram.com/theinfiniteclub_aihe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="hover:text-purple-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-purple-600/40 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 Hack8 Hackathon | The Infinite Club, Axis Colleges</p>
        <p className="mt-1 text-xs text-gray-500">
          Powered by The Infinite Club, Department of Computer Application
        </p>
      </div>
    </footer>
  );
}
