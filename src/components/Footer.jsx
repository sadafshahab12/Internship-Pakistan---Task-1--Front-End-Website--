import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-navyBlue text-white py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Internship Pakistan</h3>
            <p className="text-sm leading-7">
              Internship Pakistan is dedicated to connecting students and young
              professionals with valuable internship opportunities, empowering
              them to grow and excel in their careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/internships" className="hover:underline">
                  Internships
                </a>
              </li>
              <li>
                <a href="/aboutus" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-sm mb-4">
              Stay connected with us on social media for updates and
              opportunities.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/internshippakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navyBlue p-2 rounded-full hover:bg-gray-200"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/internshippk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navyBlue p-2 rounded-full hover:bg-gray-200"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/internshippakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navyBlue p-2 rounded-full hover:bg-gray-200"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/internshippakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-navyBlue p-2 rounded-full hover:bg-gray-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Internship Pakistan. All rights
            reserved.
          </p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/sadaf-shahab-ssr123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Sadaf Shahab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
