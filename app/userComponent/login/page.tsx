"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ChevronRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (email === "eagleassembly@mail.com" && password === "1234567") {
      // Redirect to home page
      window.location.href = "/home";
    } else {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-4 py-8">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-md w-full">
        {/* Main login card */}
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 space-y-6 border border-white/20">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              RCCG Eagles Assembly
            </h1>
            <p className="text-gray-600 font-medium">
              Redeemed Christian Church of God
            </p>
            <p className="text-gray-500 text-sm">
              Welcome back! Please sign in to continue
            </p>
          </div>

          {/* Login form */}
          <div className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* Email field */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold text-sm">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors"
                  size={18}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="eagleassembly@mail.com"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-semibold text-sm">
                Password
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:shadow-2xl hover:scale-[1.02] disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>Sign In</span>
                  <ChevronRight size={18} />
                </div>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-center text-gray-400">
              "For by grace you have been saved through faith" - Ephesians 2:8
            </p>
            <p className="text-xs text-center text-gray-400 mt-2">
              © {new Date().getFullYear()} RCCG Eagles Assembly. All rights
              reserved.
            </p>
          </div>
        </div>

        {/* Additional decorative element */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl transform rotate-1"></div>
      </div>
    </div>
  );
}
