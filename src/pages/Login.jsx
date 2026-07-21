import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router";

import { ShoppingBag, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === data.email.trim().toLowerCase() &&
        item.password === data.password,
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.dispatchEvent(new Event("userChanged"));
    alert("Login Successful");
    reset();
    navigate("/home");
  };

  return (
    <section className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <div className="relative flex w-1/2 flex-col justify-between border-r border-zinc-800 px-12 py-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300">
              <ShoppingBag size={22} className="text-black" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Sky<span className="text-lime-300">Mart</span>
            </h1>
          </div>

          <div className="max-w-[560px]">
            <p className="mb-7 uppercase tracking-[6px] text-lime-300 text-sm font-medium">
              Welcome Back
            </p>
            <h2 className="leading-none font-bold text-[78px]">
              Shop the future.
              <br />
              <span className="text-lime-300">Today.</span>
            </h2>
            <p className="mt-10 text-[22px] leading-10 text-zinc-500">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="rounded-3xl border border-zinc-700 py-8 text-center">
              <h3 className="text-5xl font-bold text-lime-300">20K+</h3>
              <p className="mt-3 text-zinc-500">Products</p>
            </div>
            <div className="rounded-3xl border border-zinc-700 py-8 text-center">
              <h3 className="text-5xl font-bold text-lime-300">50K+</h3>
              <p className="mt-3 text-zinc-500">Users</p>
            </div>
            <div className="rounded-3xl border border-zinc-700 py-8 text-center">
              <h3 className="text-5xl font-bold text-lime-300">4.9★</h3>
              <p className="mt-3 text-zinc-500">Rating</p>
            </div>
          </div>

          <div className="absolute bottom-10 left-40 h-72 w-72 rounded-full bg-lime-400/10 blur-[140px]" />
        </div>

        <div className="flex w-1/2 items-center justify-center bg-[#0B0B0B]">
          <div className="w-[470px] rounded-[30px] border border-zinc-800 bg-[#121212] p-10 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
            <h2 className="text-4xl font-bold">Sign in</h2>
            <p className="mt-2 text-zinc-500">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
              <div>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid Email",
                      },
                    })}
                    className="h-16 w-full rounded-2xl border border-zinc-700 bg-[#1A1A1A] pl-14 pr-5 text-white outline-none transition-all duration-300 focus:border-lime-300"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    placeholder="Password"
                    className="h-16 w-full rounded-2xl border border-zinc-700 bg-[#1A1A1A] pl-14 pr-14 text-white outline-none transition-all duration-300 focus:border-lime-300"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 z-10"
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-zinc-500" />
                    ) : (
                      <Eye size={18} className="text-zinc-500" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
                  <input type="checkbox" className="accent-lime-300" />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm text-lime-300 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-lime-300 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Sign in
                <ArrowRight size={20} />
              </button>

              <p className="text-center text-zinc-500">
                Don't have an account?
                <Link
                  to="/register"
                  className="ml-2 font-semibold !text-lime-300 hover:!underline"
                >
                  Create one
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
