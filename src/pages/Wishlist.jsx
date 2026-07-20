import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

import { Heart } from "lucide-react";
import { Link } from "react-router";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <>
        <Navbar />

        <section className="flex min-h-screen flex-col items-center justify-center bg-[#0B0B0B] px-6 text-white">
          <Heart size={90} className="fill-lime-300 text-lime-300" />

          <h1 className="mt-8 text-4xl font-bold">Your Wishlist is Empty</h1>

          <p className="mt-4 max-w-md text-center text-zinc-500">
            Save your favorite products to your wishlist and purchase them
            anytime.
          </p>

          <Link
            to="/shop"
            className="mt-10 rounded-2xl bg-lime-300 px-8 py-4 font-semibold !text-black transition hover:scale-105"
          >
            Explore Products
          </Link>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0B0B0B] py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-300">
                Wishlist
              </p>

              <h1 className="mt-2 text-5xl font-bold">
                Your Favorite Products
              </h1>
            </div>

            <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-400">
              {wishlist.length} {wishlist.length === 1 ? "Product" : "Products"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
