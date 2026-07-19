import {
  Heart,
  Star,
  ShoppingCart,
  Eye,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#121212] transition-all duration-500 hover:-translate-y-2 hover:border-lime-300/40 hover:shadow-[0_20px_50px_rgba(163,230,53,.10)]">
      {/* ================= IMAGE ================= */}

      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#181818]">
        {/* Featured Badge */}

        {product.featured && (
          <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black z-20">
            <BadgeCheck size={14} />
            Featured
          </span>
        )}

        {/* New Arrival Badge */}

        {product.newArrival && (
          <span className="absolute left-4 top-14 flex items-center gap-1 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white z-20">
            <Sparkles size={14} />
            New
          </span>
        )}

        {/* Wishlist */}

        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110 ${
            isInWishlist(product.id)
              ? "bg-red-500 text-white"
              : "bg-black/50 text-white hover:bg-lime-300 hover:text-black"
          }`}
        >
          <Heart
            size={18}
            className={`transition-all duration-300 ${
              isInWishlist(product.id) ? "fill-current scale-110" : "scale-100"
            }`}
          />
        </button>

        {/* Product Image */}

        <img
          src={product.image}
          alt={product.name}
          className="h-56 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
        />

        {/* Hover Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="p-6">
        {/* Stock */}

        <div className="mb-4">
          {product.stock ? (
            <span className="rounded-full bg-lime-300/10 px-3 py-1 text-xs font-medium text-lime-300">
              In Stock
            </span>
          ) : (
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
              Out of Stock
            </span>
          )}
        </div>

        {/* Rating */}

        <div className="mb-3 flex items-center gap-2">
          <Star size={17} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm font-medium text-zinc-300">
            {product.rating}
          </span>

          <span className="text-xs text-zinc-500">(120 Reviews)</span>
        </div>

        {/* Product Name */}

        <h3 className="line-clamp-2 text-xl font-bold text-white transition duration-300 group-hover:text-lime-300">
          {product.name}
        </h3>

        {/* Product Title */}

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">
          {product.title}
        </p>

        {/* Price */}

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-lime-300">${product.price}</h2>
        </div>

        {/* Buttons */}

        <div className="mt-7 flex gap-3">
          {/* Add To Cart */}

          <button
            onClick={() => addToCart(product)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-lime-300 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          {/* View Details */}

          <Link
            to={`/product/${product.id}`}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
