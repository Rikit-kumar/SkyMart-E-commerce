import { ArrowRight } from "lucide-react";
import heroImage from "../assets/images/hero-main.png";

import { Package, Users, Star, ShieldCheck } from "lucide-react";
import { Laptop, Shirt, Sofa, House, Dumbbell, Watch } from "lucide-react";

const Hero = () => {
  const categories = [
    {
      id: 1,
      title: "Electronics",
      icon: Laptop,
    },
    {
      id: 2,
      title: "Clothing",
      icon: Shirt,
    },
    {
      id: 3,
      title: "Furniture",
      icon: Sofa,
    },
    {
      id: 4,
      title: "Home",
      icon: House,
    },
    {
      id: 5,
      title: "Sports",
      icon: Dumbbell,
    },
    {
      id: 6,
      title: "Accessories",
      icon: Watch,
    },
  ];

  const statistics = [
    {
      id: 1,
      value: "20K+",
      title: "Products",
      icon: Package,
    },
    {
      id: 2,
      value: "50K+",
      title: "Happy Customers",
      icon: Users,
    },
    {
      id: 3,
      value: "4.8",
      title: "Customer Rating",
      icon: Star,
    },
    {
      id: 4,
      value: "99%",
      title: "On-time Delivery",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="px-8 pt-8">
      <div className="relative overflow-hidden rounded-[30px] border border-zinc-800 bg-[#090909]">
        {/* Green Glow */}
        <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-lime-400/20 blur-[120px]" />

        <div className="grid min-h-[520px] grid-cols-2 items-center gap-10 px-14">
          {/* ================= Left ================= */}

          <div className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[5px] text-lime-300">
              New Arrivals
            </p>

            <h1 className="text-7xl font-bold leading-none">
              Discover.
              <br />
              Shop.
              <br />
              <span className="text-lime-300">Enjoy.</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-400">
              Explore premium electronics, fashion, furniture and more.
              Everything you need in one place with unbeatable prices.
            </p>

            <div className="mt-10 flex gap-5">
              <button className="flex items-center gap-2 rounded-xl bg-lime-300 px-8 py-4 font-semibold text-black transition hover:scale-105">
                Shop Now
                <ArrowRight size={20} />
              </button>

              <button className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-lime-300 hover:text-lime-300">
                View Products
              </button>
            </div>
          </div>

          {/* ================= Right ================= */}

          <div className="relative flex justify-center items-center">
            <img
              src={heroImage}
              alt="SkyMart Hero"
              className="w-[600px] max-w-[650px] object-contain rounded-4xl"
            />
          </div>
        </div>
      </div>

      {/* ================= Statistics ================= */}

      <div className="mt-14 grid grid-cols-4 gap-5">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="group flex items-center gap-6 rounded-2xl border border-zinc-800 bg-[#121212] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300/40 hover:bg-[#171717]"
            >
              {/* Icon */}

              <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300 transition-all duration-300 group-hover:bg-lime-300 group-hover:text-black">
                <Icon size={24} />
              </div>

              {/* Text */}

              <div>
                <h3 className="text-2xl font-bold text-white">{item.value}</h3>

                <p className="text-sm text-zinc-500">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= Categories ================= */}

      <div className="mt-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[4px] text-lime-300">
              Categories
            </p>

            <h2 className="mt-2 text-4xl font-bold">Shop by Category</h2>
          </div>

          <button className="rounded-xl border border-zinc-700 px-5 py-2 transition hover:border-lime-300 hover:text-lime-300">
            View All
          </button>
        </div>

        <div className="grid grid-cols-6 gap-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group cursor-pointer flex gap-8 rounded-2xl border border-zinc-800 bg-[#121212] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-lime-300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-300/10 text-lime-300 transition-all duration-300 group-hover:bg-lime-300 group-hover:text-black">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 font-semibold">{category.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
