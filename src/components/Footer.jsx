import { NavLink } from "react-router";
import { Globe, Mail, Phone, MapPin, ShoppingBag } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Cart", path: "/cart" },
  ];

  const categories = [
    "Electronics",
    "Clothing",
    "Furniture",
    "Sports",
    "Accessories",
  ];

  const supportLinks = [
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
    "Shipping Policy",
    "Returns & Refunds",
  ];

  return (
    <footer className="border-t border-zinc-800 bg-[#0B0B0B] text-white mt-15">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          <div>
            <NavLink to="/home" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-300">
                <ShoppingBag size={24} className="text-black" />
              </div>

              <h2 className="text-3xl font-bold">
                Sky
                <span className="text-lime-300">Mart</span>
              </h2>
            </NavLink>

            <p className="mt-6 max-w-sm leading-7 text-zinc-400">
              Discover premium products with unbeatable quality, secure
              payments, and fast delivery. SkyMart is your trusted destination
              for modern online shopping.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                <Globe size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                <Mail size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                <Phone size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                <MapPin size={18} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-zinc-400 transition hover:text-lime-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Categories</h3>

            <ul className="mt-6 space-y-4">
              {categories.map((category) => (
                <li
                  key={category}
                  className="cursor-pointer text-zinc-400 transition hover:text-lime-300"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Customer Support</h3>

            <ul className="mt-6 space-y-4">
              {supportLinks.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-zinc-400 transition hover:text-lime-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 rounded-3xl border border-zinc-800 bg-[#121212] p-8 md:p-10">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div>
                <h2 className="text-3xl font-bold">
                  Subscribe to our Newsletter
                </h2>

                <p className="mt-3 max-w-xl text-zinc-400">
                  Stay updated with our latest products, exclusive offers,
                  discounts, and exciting news delivered directly to your inbox.
                </p>
              </div>

              <div className="flex w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-700">
                <div className="flex items-center px-5 text-zinc-500">
                  <Mail size={20} />
                </div>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-zinc-500 autofill:bg-transparent"
                />

                <button className="bg-lime-300 px-8 font-semibold text-black transition hover:bg-lime-400">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">
            <p className="text-zinc-500">
              © 2026 <span className="font-semibold text-white">SkyMart</span>.
              All Rights Reserved.
            </p>
            <p className="text-sm text-zinc-500">
              Crafted by{" "}
              <span className="rounded-full border border-lime-300/50 bg-lime-300/10 px-4 py-1 font-semibold text-lime-300 transition hover:bg-lime-300 hover:text-black">
                RIKIT KUMAR
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
