import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

import { Truck, ShieldCheck, Gem, Headphones } from "lucide-react";
import { Linkedin, Globe, Twitter } from "lucide-react";

const About = () => {
  const whyChooseUs = [
    {
      id: 1,
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get your favorite products delivered quickly with our reliable shipping partners.",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Secure Payments",
      description:
        "Shop with confidence using safe and encrypted payment methods.",
    },
    {
      id: 3,
      icon: Gem,
      title: "Premium Quality",
      description:
        "Every product is carefully selected to ensure the best quality for our customers.",
    },
    {
      id: 4,
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our dedicated support team is always available to help you whenever you need.",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex Carter",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 2,
      name: "Sophia Wilson",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    {
      id: 3,
      name: "David Miller",
      role: "Marketing Head",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    },
    {
      id: 4,
      name: "Emma Johnson",
      role: "Customer Success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0B0B0B] text-white">
        {/* ================= HERO ================= */}

        <div className="border-b border-zinc-800 bg-[#101010]">
          <div className="mx-auto max-w-7xl px-6 py-24">
            {/* Small Heading */}

            <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-300">
              About SkyMart
            </p>

            {/* Main Heading */}

            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl">
              Building the Future of
              <span className="text-lime-300"> Online Shopping</span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              At SkyMart, we believe shopping should be simple, secure, and
              enjoyable. Our mission is to deliver premium products, trusted
              quality, and an exceptional customer experience—all in one place.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                to="/shop"
                className="rounded-2xl bg-lime-300 px-8 py-4 font-semibold !text-black transition-all duration-300 hover:scale-105"
              >
                Explore Products
              </Link>

              <Link
                to="/home"
                className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-lime-300 hover:text-lime-300"
              >
                Back to Home
              </Link>
            </div>

            {/* Breadcrumb */}

            <div className="mt-12 flex items-center gap-2 text-sm text-zinc-500">
              <Link to="/home" className="hover:text-lime-300 transition">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-lime-300">About</span>
            </div>
          </div>
        </div>

        {/* ================= OUR STORY ================= */}

        <section className="py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            {/* Left Side - Image */}

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
                alt="Our Story"
                className="h-[550px] w-full rounded-3xl object-cover"
              />

              {/* Experience Card */}

              <div className="absolute -bottom-8 left-8 rounded-3xl border border-zinc-700 bg-[#121212] p-6 shadow-xl">
                <h2 className="text-4xl font-bold text-lime-300">2024</h2>

                <p className="mt-2 text-zinc-400">Founded with Passion</p>
              </div>
            </div>

            {/* Right Side */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-300">
                Our Story
              </p>

              <h2 className="mt-4 text-5xl font-bold leading-tight">
                More Than Just
                <span className="text-lime-300"> An Online Store</span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-zinc-400">
                SkyMart was created with one simple goal — to make premium
                shopping easy, secure, and enjoyable for everyone. We carefully
                select every product to ensure quality, affordability, and
                customer satisfaction.
              </p>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Whether you're looking for electronics, fashion, furniture, or
                daily essentials, SkyMart is committed to providing a seamless
                shopping experience backed by trusted service and fast delivery.
              </p>

              {/* Features */}

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black font-bold">
                    ✓
                  </div>

                  <span className="text-lg">Premium Quality Products</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black font-bold">
                    ✓
                  </div>

                  <span className="text-lg">
                    Trusted by Thousands of Customers
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-black font-bold">
                    ✓
                  </div>

                  <span className="text-lg">
                    Fast & Secure Shopping Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}

        <section className="py-24 bg-[#101010]">
          <div className="mx-auto max-w-7xl px-6">
            {/* Heading */}

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-300">
                Why Choose SkyMart
              </p>

              <h2 className="mt-4 text-5xl font-bold">
                Shopping Made
                <span className="text-lime-300"> Better</span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                We don't just sell products—we create a shopping experience
                built on trust, quality, and customer satisfaction.
              </p>
            </div>

            {/* Cards */}

            <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="group rounded-3xl border border-zinc-800 bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-lime-300/40"
                  >
                    {/* Icon */}

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-300/10 text-lime-300 transition-all duration-300 group-hover:bg-lime-300 group-hover:text-black">
                      <Icon size={30} />
                    </div>

                    {/* Title */}

                    <h3 className="mt-8 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= TEAM ================= */}

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* Heading */}

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-300">
                Meet Our Team
              </p>

              <h2 className="mt-4 text-5xl font-bold">
                The People Behind
                <span className="text-lime-300"> SkyMart</span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                Behind every great shopping experience is a passionate team
                committed to delivering quality, innovation, and exceptional
                customer service.
              </p>
            </div>

            {/* Cards */}

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group rounded-3xl border border-zinc-800 bg-[#121212] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-lime-300/40"
                >
                  {/* Image */}

                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-zinc-800 transition-all duration-300 group-hover:ring-lime-300"
                  />

                  {/* Name */}

                  <h3 className="mt-6 text-2xl font-bold">{member.name}</h3>

                  {/* Role */}

                  <p className="mt-2 text-lime-300">{member.role}</p>

                  {/* Social Icons */}

                  <div className="mt-6 flex justify-center gap-4">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                      <Linkedin size={18} />
                    </button>

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                      <Globe size={18} />
                    </button>

                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 transition hover:border-lime-300 hover:bg-lime-300 hover:text-black">
                      <Twitter size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
