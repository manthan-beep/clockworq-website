"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { user, login, signup, isLoading } = useAuth();
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    uppercase: false,
  });

  // Redirect if user is already logged in
  useEffect(() => {
    if (user && !isLoading) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);


  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordRequirements({
      minLength: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (isSignUp) {
        // Validate password confirmation
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setIsSubmitting(false);
          return;
        }

        const result = await signup(email, password, firstName, lastName);
        if (result.success) {
          router.push('/dashboard');
        } else {
          setError(result.error || 'Signup failed');
        }
      } else {
        const result = await login(email, password);
        if (result.success) {
          router.push('/dashboard');
        } else {
          setError(result.error || 'Login failed');
        }
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };


  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/"
            className="group flex items-center text-slate-400 hover:text-white transition-colors"
          >
            <motion.svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
            Back
          </Link>
          <div className="text-sm text-slate-400">
            Already have account?{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-teal-400 hover:text-teal-300 underline transition-colors"
            >
              {isSignUp ? "Log in" : "Sign up"}
            </button>
          </div>
        </div>

        {/* Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md"
        >
          <form onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-white mb-2">
            {isSignUp ? "Sign Up" : "Login"}
          </h1>
          <p className="text-slate-400 mb-8">
            {isSignUp ? "Automate your future" : "Welcome back"}
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Name Fields (Sign Up only) */}
          {isSignUp && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-4 bg-white/10 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-4 bg-white/10 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white/20 transition-all duration-300"
              />
              {passwordRequirements.minLength && passwordRequirements.uppercase && (
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Confirm Password Field (Sign Up only) */}
          {isSignUp && (
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>
          )}

          {/* Password Requirements (Sign Up only) */}
          {isSignUp && (
            <div className="mb-6 space-y-2">
              <div className="flex items-center text-sm">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  passwordRequirements.minLength 
                    ? 'border-green-400 bg-green-400' 
                    : 'border-slate-600'
                }`}>
                  {passwordRequirements.minLength && (
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={passwordRequirements.minLength ? 'text-green-400' : 'text-slate-400'}>
                  Least 8 characters
                </span>
              </div>
              <div className="flex items-center text-sm">
                <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                  passwordRequirements.uppercase 
                    ? 'border-green-400 bg-green-400' 
                    : 'border-slate-600'
                }`}>
                  {passwordRequirements.uppercase && (
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={passwordRequirements.uppercase ? 'text-green-400' : 'text-slate-400'}>
                  Uppercase & combined uppercase (A-Z)
                </span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group ${
              isSubmitting 
                ? 'bg-slate-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600'
            }`}
          >
            <span className="mr-2">
              {isSubmitting ? 'Processing...' : (isSignUp ? "Sign Up" : "Login")}
            </span>
            {!isSubmitting && (
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            )}
          </motion.button>

          {/* Social Login */}
          <div className="mt-8 flex items-center justify-center">
            <span className="text-slate-400 text-sm mr-4">Or</span>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold text-lg">f</span>
              </button>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-800 font-bold text-lg">G</span>
              </button>
            </div>
          </div>

          {/* Language Selector */}
          <div className="mt-12 flex items-center text-slate-400">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.017 18h-.007M12 12h.01" />
            </svg>
            <span className="text-sm mr-1">ENG</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          </form>
        </motion.div>
      </div>

      {/* Right Section - Illustrative Content */}
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Abstract shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 left-16 w-24 h-24 bg-cyan-500/20 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-slate-600/30 rounded-full blur-md"></div>
          
          {/* Curved lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
            <path
              d="M50 100 Q200 50 350 150 T300 300"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M100 200 Q250 150 400 250 T350 400"
              stroke="url(#gradient2)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-20 left-8 w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-4">Dashboard</h3>
          <div className="text-3xl font-bold text-slate-900 mb-4">156,18</div>
          
          {/* Mini Chart */}
          <div className="h-20 mb-4 relative">
            <svg className="w-full h-full" viewBox="0 0 200 80">
              <polyline
                points="0,60 20,45 40,50 60,35 80,40 100,25 120,30 140,20 160,25 180,15 200,20"
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
              />
              <polyline
                points="0,70 20,55 40,60 60,45 80,50 100,35 120,40 140,30 160,35 180,25 200,30"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
              />
            </svg>
          </div>
          
          {/* Data blocks */}
          <div className="grid grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-3 bg-slate-300 rounded"></div>
            ))}
          </div>
        </motion.div>

        {/* Data Control Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-20 right-8 w-80 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div className="w-full h-1 bg-blue-500 rounded"></div>
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2">Your data, your control</h3>
          <p className="text-sm text-slate-600">
            Your data belongs to you and our encryption ensures that
          </p>
          
          {/* Horizontal lines */}
          <div className="mt-4 space-y-2">
            <div className="h-1 bg-slate-300 rounded"></div>
            <div className="h-1 bg-slate-300 rounded w-3/4"></div>
            <div className="h-1 bg-slate-300 rounded w-1/2"></div>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute top-32 right-32 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-32 left-16 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center"
        >
          <span className="text-white font-bold text-lg">T</span>
        </motion.div>

        {/* Star sparkle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="absolute bottom-8 right-8 w-6 h-6 text-white"
        >
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}