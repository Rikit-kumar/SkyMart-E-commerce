import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { NavLink, useNavigate } from "react-router";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router";
import {
  ShoppingBag,
  House,
  Store,
  Info,
  ShoppingCart,
  CircleUserRound,
  LogOut,
  Heart,
} from "lucide-react";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userName = currentUser?.fullName || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logout Successfully");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0B0B0B]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8">
        {/* Logo */}

        <NavLink to="/home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300">
            <ShoppingBag size={22} className="text-black" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Sky
            <span className="text-lime-300">Mart</span>
          </h1>
        </NavLink>

        {/* Navigation */}

        <nav>
          <ul className="flex items-center gap-12">
            <li>
              <NavLink to="/home">
                {({ isActive }) => (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-2 pb-1 transition-all duration-300 ${
                      isActive
                        ? "text-lime-300"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <House
                      size={19}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-lime-300 fill-lime-300"
                          : "group-hover:text-lime-300"
                      }`}
                    />

                    <span>Home</span>

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-lime-300 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/shop">
                {({ isActive }) => (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-2 pb-1 transition-all duration-300 ${
                      isActive
                        ? "text-lime-300"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Store
                      size={19}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-lime-300 fill-lime-300"
                          : "group-hover:text-lime-300"
                      }`}
                    />

                    <span>Shop</span>

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-lime-300 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">
                {({ isActive }) => (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-2 pb-1 transition-all duration-300 ${
                      isActive
                        ? "text-lime-300"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Info
                      size={19}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-lime-300 fill-lime-300"
                          : "group-hover:text-lime-300"
                      }`}
                    />

                    <span>About</span>

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-lime-300 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-6">
          {/* Cart */}

          <button
            onClick={() => navigate("/cart")}
            className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-[#121212] transition-all duration-300 hover:border-lime-300 hover:text-lime-300"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-lime-300 text-xs font-bold text-black shadow-lg">
                {totalItems}
              </span>
            )}
          </button>

          <Link
            to="/wishlist"
            className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-[#121212] transition hover:border-lime-300 hover:!text-lime-300"
          >
            <Heart size={22} />

            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* User */}

          <div className="flex items-center gap-3 rounded-full border border-zinc-700 px-4 py-2">
            {/* <CircleUserRound size={24} className="text-lime-300" /> */}
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 font-bold text-black">
              {userName.charAt(0).toUpperCase()}
            </div>

            <div>
              {/* <p className="text-xs text-zinc-500">Welcome</p> */}

              <h3 className="font-semibold text-white">{userName}</h3>
            </div>
          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-400"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
