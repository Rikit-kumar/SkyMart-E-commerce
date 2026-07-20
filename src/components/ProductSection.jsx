import products from "../data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router";


const ProductSection = () => {
  return (
    <section id="featured-products" className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-[1500px] px-6">

        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-3 uppercase tracking-[4px] text-sm text-lime-300">
              Our Collection
            </p>

            <h2 className="text-5xl font-bold text-white">
              Top Rated Products
            </h2>

            <p className="mt-4 max-w-xl text-zinc-500">
              Discover our hand-picked premium products loved by thousands of
              customers.
            </p>
          </div>

          <button className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-lime-300 hover:text-lime-300">
            View All
          </button>
        </div>

        <div className="grid grid-cols-4 gap-7">
          {products
            .filter((p) => p.featured)
            .map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
