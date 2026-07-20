import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  BadgeCheck,
  Sparkles,
  Star,
  Minus,
  Plus,
  Heart,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import Navbar from "../components/Navbar";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B0B] text-4xl font-bold text-white">
        Product Not Found
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0B0B0B] text-white">
        <div className="mx-auto max-w-7xl px-8 py-12">

          <div className="mb-8">
            <p className="text-sm uppercase tracking-[5px] text-lime-300">
              Product Details
            </p>

            <h1 className="mt-2 text-4xl font-bold">Explore Product</h1>
          </div>

          <Link
            to="/shop"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-[#121212] px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-x-1 hover:border-lime-300 hover:bg-lime-300 hover:!text-black"
          >
            <ArrowLeft size={18} />
            Back to Shop
          </Link>

          <div className="grid gap-16 lg:grid-cols-2">

            <div className="relative flex items-center justify-center rounded-[40px] border border-zinc-800 bg-gradient-to-br from-[#161616] to-[#0d0d0d] p-16">

              <div className="absolute h-80 w-80 rounded-full bg-lime-300/10 blur-[120px]" />

              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 h-[420px] object-contain transition duration-500 hover:scale-110"
              />
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                {product.featured && (
                  <span className="flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-black">
                    <BadgeCheck size={16} />
                    Featured
                  </span>
                )}

                {product.newArrival && (
                  <span className="flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold">
                    <Sparkles size={16} />
                    New Arrival
                  </span>
                )}
              </div>

              <h1 className="mt-8 text-4xl font-bold leading-tight">
                {product.name}
              </h1>

              <div className="mt-5 flex items-center gap-3">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />

                <span className="font-medium">{product.rating}</span>

                <span className="text-zinc-500">(128 Reviews)</span>
              </div>

              <h2 className="mt-6 text-4xl font-bold text-lime-300">
                ${product.price}
              </h2>

              <p className="mt-8 max-w-xl leading-8 text-zinc-400">
                {product.description}
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-zinc-300">
                    Category :
                  </span>

                  <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-semibold text-zinc-300">Stock :</span>

                  {product.stock ? (
                    <span className="rounded-full bg-lime-300/10 px-4 py-2 text-sm text-lime-300">
                      In Stock
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">
                      Out of Stock
                    </span>
                  )}
                </div>

                <div className="mt-10">
                  <h3 className="mb-4 text-lg font-semibold">Quantity</h3>

                  <div className="flex w-fit items-center rounded-2xl border border-zinc-800 bg-[#121212]">
                    <button
                      onClick={decreaseQuantity}
                      className="flex h-14 w-14 items-center justify-center transition hover:bg-zinc-800"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="w-16 text-center text-xl font-bold">
                      {quantity}
                    </span>

                    <button
                      onClick={increaseQuantity}
                      className="flex h-14 w-14 items-center justify-center transition hover:bg-zinc-800"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">

                  <button onClick={() => addToCart(product)} className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-lime-300 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-lime-400">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>

                  <button className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-[#121212] transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                    <Heart size={22} />
                  </button>
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-lime-300 bg-transparent py-4 font-semibold text-lime-300 transition-all duration-300 hover:bg-lime-300 hover:text-black">
                  <CreditCard size={20} />
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="my-16 h-px bg-zinc-800"></div>

          <section className="mt-20">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[4px] text-lime-300">
                  Similar Products
                </p>

                <h2 className="mt-2 text-4xl font-bold">You May Also Like</h2>
              </div>

              <Link
                to="/shop"
                className="rounded-full border border-zinc-800 px-5 py-3 transition hover:border-lime-300 hover:text-lime-300"
              >
                View All
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))
              ) : (
                <div className="col-span-full rounded-3xl border border-zinc-800 bg-[#111111] p-10 text-center">
                  <h3 className="text-2xl font-bold">No Related Products</h3>

                  <p className="mt-3 text-zinc-500">
                    We couldn't find similar products.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
