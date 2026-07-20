import React from "react";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

const WhyChooseUs = () => {

  const features = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Free shipping on orders over $99.",
      icon: Truck,
    },
    {
      id: 2,
      title: "Secure Payment",
      description: "100% protected and encrypted checkout.",
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: "Easy Returns",
      description: "30-day hassle-free return policy.",
      icon: RotateCcw,
    },
  ];

  return (
    <div className="mt-12 px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[5px] text-lime-300">
          Why Choose Us
        </p>

        <h2 className="mt-2 text-4xl font-bold">Shopping Made Simple</h2>

        <p className="mt-4 text-zinc-500">
          Everything you need for a premium shopping experience.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="group flex flex-col gap-[-50px] rounded-2xl border border-zinc-800 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-lime-300"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300 transition-all duration-300 group-hover:bg-lime-300 group-hover:text-black">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
