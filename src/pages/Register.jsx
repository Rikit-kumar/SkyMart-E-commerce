import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router";

// Fixed: Added EyeOff import here
import {
  ShoppingBag,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = (data) => {

    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const alreadyExist = users.find((user) => user.email === data.email);

    if (alreadyExist) {
      alert("User already exists.");
      return;
    }

    users.push({
      id: Date.now(),
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Account Created Successfully");
    reset();
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-[#0B0B0B] text-white selection:bg-lime-300 selection:text-black">
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
            <p className="mb-7 text-sm font-medium uppercase tracking-[6px] text-lime-300">
              Join SkyMart
            </p>
            <h2 className="text-[78px] font-bold leading-none">
              Start shopping.
              <br />
              <span className="text-lime-300">Today.</span>
            </h2>
            <p className="mt-10 text-[22px] leading-10 text-zinc-500">
              Create your account and explore thousands of premium products with
              lightning-fast delivery.
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

        <div className="flex w-1/2 items-center justify-center bg-[#0B0B0B] py-12 h-screen overflow-y-auto no-scrollbar">
          <div className="w-[470px] my-auto rounded-[30px] border border-zinc-800 bg-[#121212] p-10 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
            <h2 className="text-4xl font-bold">Create Account</h2>
            <p className="mt-2 text-zinc-500">
              Create your SkyMart account to start shopping.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-3">
              <div>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-14 w-full rounded-2xl border border-zinc-700 bg-[#1A1A1A] pl-14 pr-5 text-white outline-none transition duration-300 focus:border-lime-300"
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: { value: 3, message: "Minimum 3 Characters" },
                    })}
                  />
                </div>
                <div className="min-h-[20px] mt-0.5">
                  {errors.fullName && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-2xl border border-zinc-700 bg-[#1A1A1A] pl-14 pr-5 text-white outline-none transition duration-300 focus:border-lime-300"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid Email",
                      },
                    })}
                  />
                </div>
                <div className="min-h-[20px] mt-0.5">
                  {errors.email && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="h-14 w-full rounded-2xl border border-zinc-700 bg-[#1A1A1A] pl-14 pr-14 text-white outline-none transition duration-300 focus:border-lime-300"
                    {...register("password", {
                      required: "Password Required",
                      minLength: { value: 6, message: "Minimum 6 characters" },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setshowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="min-h-[20px] mt-0.5">
                  {errors.password && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="h-14 w-full rounded-2xl border border-zinc-700 bg-[#1A1A1A] pl-14 pr-14 text-white outline-none transition duration-300 focus:border-lime-300"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setshowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                <div className="min-h-[20px] mt-0.5">
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-3 text-sm text-zinc-400 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("terms", {
                      required: "Accept Terms & Conditions",
                    })}
                    className="accent-lime-300"
                  />
                  <span>I agree to the Terms & Conditions</span>
                </label>
                <div className="min-h-[20px] mt-0.5">
                  {errors.terms && (
                    <p className="text-red-500 text-xs pl-2">
                      {errors.terms.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-lime-300 text-lg font-bold text-black transition duration-300 hover:scale-[1.02] active:scale-[0.99] mt-2"
              >
                Create Account
                <ArrowRight size={20} />
              </button>

              <p className="text-center text-zinc-500 pt-2">
                Already have an account?
                <Link
                  to="/"
                  className="ml-2 font-semibold !text-lime-300 hover:!underline"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
