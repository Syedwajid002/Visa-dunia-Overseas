import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "../Assets/LogoW.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} className="h-20 w-24" alt="" />
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for overseas education. Helping students
              achieve their dreams of studying abroad with expert guidance and
              support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/why-study-abroad"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Why Study Abroad
                </Link>
              </li>
              <li>
                <Link
                  to="/study-destinations"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/student-services"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Student Services
                </Link>
              </li>
              <li>
                <Link
                  to="/test-prep"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link
                  to="/immigration"
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Immigration Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Admission Guidance</span>
              </li>
              <li>
                <span className="text-gray-300">Visa Assistance</span>
              </li>
              <li>
                <span className="text-gray-300">Test Preparation</span>
              </li>
              <li>
                <span className="text-gray-300">Accommodation Support</span>
              </li>
              <li>
                <span className="text-gray-300">Pre-Departure Training</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+91 99632 05226</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">
                  info@visaduniaoverseas.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300">
                  Laxmi Theater Complex, J.P.N Road, Warangal, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Visa Dunia Overseas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
