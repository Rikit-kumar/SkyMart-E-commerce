import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

import { useState } from "react";
import { Search } from "lucide-react";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const [showFeatured, setShowFeatured] = useState(false);
  const [showNewArrival, setShowNewArrival] = useState(false);
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesFeatured = !showFeatured || product.featured;

    const matchesNewArrival = !showNewArrival || product.newArrival;

    const matchesStock = !showInStock || product.stock;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesFeatured &&
      matchesNewArrival &&
      matchesStock
    );
  });

  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case "low-high":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0B0B0B] text-white">
        {/* ================= HERO ================= */}

        <div className="border-b border-zinc-800 bg-[#101010]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-300">
              Premium Collection
            </p>

            <h1 className="mt-4 text-5xl font-bold">Explore Our Products</h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Discover premium gadgets, fashion, accessories, furniture and much
              more. Carefully selected products with the best quality.
            </p>

            {/* Breadcrumb */}

            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
              <Link to="/home" className="transition hover:text-lime-300">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-lime-300">Shop</span>
            </div>
          </div>
        </div>

        {/* ================= PRODUCT COUNT ================= */}

        <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between px-6">
          <h2 className="text-3xl font-bold">All Products</h2>

          <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-400">
            {filteredProducts.length} Products
          </span>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-5 px-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}

          <div className="relative w-full max-w-lg">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 w-full rounded-2xl border border-zinc-700 bg-[#121212] pl-14 pr-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-lime-300"
            />
          </div>

          {/* Sort */}

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="h-14 rounded-2xl border border-zinc-700 bg-[#121212] px-5 text-white outline-none transition duration-300 focus:border-lime-300"
          >
            <option value="default">Default</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="rating">Highest Rating</option>
          </select>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-4 px-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-lime-300 text-black shadow-lg"
                  : "border border-zinc-700 bg-[#121212] text-zinc-400 hover:border-lime-300 hover:text-lime-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-4 px-6">
          <button
            onClick={() => setShowFeatured(!showFeatured)}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
              showFeatured
                ? "bg-lime-300 text-black"
                : "border border-zinc-700 bg-[#121212] text-zinc-400 hover:border-lime-300 hover:text-lime-300"
            }`}
          >
            ⭐ Featured
          </button>

          <button
            onClick={() => setShowNewArrival(!showNewArrival)}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
              showNewArrival
                ? "bg-lime-300 text-black"
                : "border border-zinc-700 bg-[#121212] text-zinc-400 hover:border-lime-300 hover:text-lime-300"
            }`}
          >
            ✨ New Arrival
          </button>

          <button
            onClick={() => setShowInStock(!showInStock)}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
              showInStock
                ? "bg-lime-300 text-black"
                : "border border-zinc-700 bg-[#121212] text-zinc-400 hover:border-lime-300 hover:text-lime-300"
            }`}
          >
            📦 In Stock
          </button>

          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSortOption("default");
              setShowFeatured(false);
              setShowNewArrival(false);
              setShowInStock(false);
            }}
            className="rounded-xl border border-red-500 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Clear Filters
          </button>
        </div>

        {/* ================= PRODUCT GRID ================= */}

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <Search size={60} className="mx-auto text-zinc-600" />

              <h2 className="mt-6 text-3xl font-bold">No Products Found</h2>

              <p className="mt-3 text-zinc-500">
                Try searching with another keyword.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;
