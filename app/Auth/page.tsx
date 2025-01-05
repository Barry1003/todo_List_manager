"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const Auth = () => {
  const { register, handleSubmit, formState: { errors },} = useForm<FormData>({ resolver: zodResolver(schema) });,

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-blue-500 flex items-center justify-center text-white p-8">
        <div className="text-center">
          <div className="relative h-40 w-40 mx-auto mb-4">
            <Image
              src="/placeholder.png"
              alt="Placeholder"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-lg font-semibold">New Scheduling And Routing Options</p>
          <p>We also updated the format of podcasts and rewards.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">Hello Again!</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-blue-500">
                Recovery Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded"
            >
              Login
            </button>
            <button
              type="button"
              className="w-full py-2 border rounded flex items-center justify-center"
            >
              <Image
                src="/google-icon.png"
                alt="Google Icon"
                width={20}
                height={20}
              />
              <span className="ml-2">Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
