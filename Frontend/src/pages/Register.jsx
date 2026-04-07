import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        role: "attende"
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/register", formData)
            .then((res) => {
                navigate("/login");
            })
            .catch((error) => {
                console.error("Registration error:", error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-950 font-sans text-neutral-200 relative overflow-hidden py-12">
            
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="w-full max-w-md p-6 relative z-10">
                {/* Brand Logo */}
                <div className="flex justify-center mb-8">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                        E
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-200">
                        EventNex
                        </span>
                    </Link>
                </div>

                {/* Card Container */}
                <div className="bg-white/[0.02] border border-white/5 shadow-2xl shadow-black/50 backdrop-blur-xl rounded-3xl p-8">
                    
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Create an Account</h2>
                        <p className="text-sm text-neutral-400">Join us to start managing your events</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Full Name</label>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-neutral-900/50 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
                                required
                                onChange={handleChange}
                                value={formData.fullname}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@company.com"
                                className="w-full px-4 py-3 bg-neutral-900/50 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
                                required
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-neutral-900/50 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
                                required
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </div>

                        {/* Role selection */}
                        <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-1.5">Role</label>
                            <div className="relative">
                                <select
                                    name="role"
                                    className="w-full px-4 py-3 bg-neutral-900/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 appearance-none cursor-pointer"
                                    onChange={handleChange}
                                    value={formData.role}
                                >
                                    <option value="attende" className="bg-neutral-900">Attendee</option>
                                    <option value="exhibitor" className="bg-neutral-900">Exhibitor</option>
                                </select>
                                {/* Custom select dropdown arrow */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 mt-6"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center text-sm text-neutral-400">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                            Sign in here
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;