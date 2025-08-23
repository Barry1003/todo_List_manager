import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const AuthForm: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignIn ? "Sign In Data:" : "Sign Up Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-200">
      <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row p-6 max-w-4xl w-full">
        {/* Left Image Section */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src="https://via.placeholder.com/300x400"
            alt="illustration"
            className="max-w-sm"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Sign In Form */}
            {isSignIn ? (
              <>
                {/* Email */}
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-500 transition"
                >
                  Sign In
                </button>

                <p className="text-center text-sm mt-4">
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(false)}
                    className="text-blue-500 hover:underline"
                  >
                    Sign Up
                  </button>
                </p>
              </>
            ) : (
              <>
                {/* First Name */}
                <div className="relative">
                  <MdPerson className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="relative">
                  <MdPerson className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Username */}
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 p-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Terms */}
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <span>I agree to all terms</span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-500 transition"
                >
                  Sign Up
                </button>

                <p className="text-center text-sm mt-4">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
