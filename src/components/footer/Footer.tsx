"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { logo } from "../navbar/Navbar";

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: "All Products", href: "/products" },
      { name: "Categories", href: "/categories" },
      { name: "Electronics", href: "/products?category=electronics" },
      { name: "Fashion", href: "/products?category=fashion" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "Returns", href: "/returns" },
      { name: "Track Order", href: "/track-order" },
    ],
  };

  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white border-t border-gray-800"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-block bg-white rounded-lg px-4 py-2"
            >
              {logo}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              FreshCart is your one-stop destination for quality products. We
              bring you the best brands with a seamless shopping experience.
            </p>
            <div className="space-y-4 text-sm text-gray-400">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FaPhoneAlt className="text-primary-500" /> +1 (800) 123-4567
              </a>
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-3 hover:text-primary-400 transition-colors"
              >
                <FaEnvelope className="text-primary-500" />{" "}
                support@freshcart.com
              </a>
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1" /> 123
                Commerce St, NY 10001
              </p>
            </div>

            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all shadow-sm"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 border-b border-primary-500/20 pb-2 inline-block">
              Shop
            </h3>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 border-b border-primary-500/20 pb-2 inline-block">
              Support
            </h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-bold text-lg mb-6">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates on new products and upcoming sales.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-none rounded-md px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              />
              <button className="bg-primary-600 hover:bg-primary-700 cursor-pointer px-6 py-2 rounded-md text-sm font-semibold transition-colors active:scale-95">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/20">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026{" "}
            <span className="text-primary-500 font-medium">FreshCart</span>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500">
            <FaCcVisa
              size={30}
              className="hover:text-primary-400 transition-colors cursor-pointer"
            />
            <FaCcMastercard
              size={30}
              className="hover:text-primary-400 transition-colors cursor-pointer"
            />
            <FaCcPaypal
              size={30}
              className="hover:text-primary-400 transition-colors cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
