import Navbar from "../components/Navbar";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";

const Cart = () => {
  const {
    cart,
    totalItems,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <section className="flex min-h-screen flex-col items-center justify-center bg-[#0B0B0B] text-white">
          <ShoppingBag size={90} className="text-lime-300" />

          <h2 className="mt-6 text-4xl font-bold">Your Cart is Empty</h2>

          <p className="mt-3 text-zinc-500">
            Looks like you haven't added anything yet.
          </p>

          <Link
            to="/shop"
            className="mt-8 rounded-xl bg-lime-300 px-8 py-4 font-semibold !text-black transition hover:scale-105"
          >
            Continue Shopping
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

          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[5px] text-lime-300">
                Shopping Cart
              </p>

              <h1 className="mt-2 text-4xl font-bold">Your Cart</h1>
            </div>

            <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-400">
              {totalItems} {totalItems === 1 ? "Item" : "Items"}
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

            <div className="space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 rounded-3xl border border-zinc-800 bg-[#121212] p-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-36 w-36 rounded-2xl bg-[#1B1B1B] object-contain p-4"
                  />

                  <div className="flex flex-1 justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{item.name}</h2>

                      <p className="mt-2 text-zinc-500">{item.title}</p>

                      <span className="mt-4 inline-block rounded-full bg-lime-300/10 px-4 py-2 text-sm text-lime-300">
                        {item.category}
                      </span>

                      <div className="mt-6 flex w-fit items-center rounded-xl border border-zinc-700">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-11 w-11 items-center justify-center hover:bg-zinc-800"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="w-12 text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-11 w-11 items-center justify-center hover:bg-zinc-800"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-xl border border-zinc-700 p-3 transition hover:border-red-500 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>

                      <h2 className="text-3xl font-bold text-lime-300">
                        ${(item.price * item.quantity).toFixed(2)}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-3xl border border-zinc-800 bg-[#121212] p-8">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <div className="mt-8 space-y-5">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>

                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span>Shipping</span>

                  <span className="text-lime-300">Free</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span>Tax</span>

                  <span>$0.00</span>
                </div>

                <div className="my-4 border-t border-zinc-800"></div>

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>

                  <span className="text-lime-300">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-300 py-4 font-semibold text-black transition hover:scale-[1.02]">
                <ShoppingBag size={20} />
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
