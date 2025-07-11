'use client';

import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function LearnMorePage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyEmail: '',
        companyName: '',
        industry: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-full min-h-screen bg-[#F9F9F7] text-[#252525] overscroll-behavior-y-contain">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-[128px]">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] text-[#252525] mb-8">
                                Calltree helps businesses build better, more intelligent customer
                                experiences.
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 mt-1">
                                    <svg
                                        className="w-6 h-6 text-[#252525]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base text-[#575757] leading-relaxed">
                                        <span className="font-medium text-[#252525]">
                                            Empowering contact center teams
                                        </span>{' '}
                                        to scale support operations with AI agents that work exactly
                                        like your best human representatives.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 mt-1">
                                    <svg
                                        className="w-6 h-6 text-[#252525]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base text-[#575757] leading-relaxed">
                                        <span className="font-medium text-[#252525]">
                                            Partnering with your team
                                        </span>{' '}
                                        to deliver enterprise-grade AI solutions with pricing tied
                                        to real value delivered.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 mt-1">
                                    <svg
                                        className="w-6 h-6 text-[#252525]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-base text-[#575757] leading-relaxed">
                                        <span className="font-medium text-[#252525]">
                                            Reducing operational costs
                                        </span>{' '}
                                        by up to 70% while maintaining exceptional customer
                                        satisfaction and resolution rates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trusted by section */}
                        <div className="pt-8">
                            <p className="text-sm text-[#575757] mb-6">Trusted by leading brands</p>
                            <div className="flex items-center gap-8 opacity-60">
                                <div className="text-lg font-semibold text-[#252525]">SONOS</div>
                                <div className="text-lg font-semibold text-[#252525]">CASPER</div>
                                <div className="text-lg font-semibold text-[#252525]">siriusXM</div>
                                <div className="flex items-center gap-1">
                                    <div className="w-6 h-6 rounded-full bg-[#252525] flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                    </div>
                                    <span className="text-lg font-semibold text-[#252525]">
                                        CLEAR
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3]">
                        <div className="mb-8">
                            <h2 className="text-2xl  text-[#252525] mb-2">
                                Let us know a bit about yourself, and we will reach out soon.
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* First and Last Name Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-[#252525] mb-2"
                                    >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First name"
                                        className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] bg-[#F9F9F7] placeholder-[#9CA3AF] text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#d42638] focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-[#252525] mb-2"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last name"
                                        className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] bg-[#F9F9F7] placeholder-[#9CA3AF] text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#d42638] focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Job Title */}
                            <div>
                                <label
                                    htmlFor="jobTitle"
                                    className="block text-sm font-medium text-[#252525] mb-2"
                                >
                                    Job title
                                </label>
                                <input
                                    type="text"
                                    id="jobTitle"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleInputChange}
                                    placeholder="Job title"
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] bg-[#F9F9F7] placeholder-[#9CA3AF] text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#d42638] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Company Email */}
                            <div>
                                <label
                                    htmlFor="companyEmail"
                                    className="block text-sm font-medium text-[#252525] mb-2"
                                >
                                    Company email
                                </label>
                                <input
                                    type="email"
                                    id="companyEmail"
                                    name="companyEmail"
                                    value={formData.companyEmail}
                                    onChange={handleInputChange}
                                    placeholder="Company email"
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] bg-[#F9F9F7] placeholder-[#9CA3AF] text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#d42638] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Company Name */}
                            <div>
                                <label
                                    htmlFor="companyName"
                                    className="block text-sm font-medium text-[#252525] mb-2"
                                >
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder="Company name"
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] bg-[#F9F9F7] placeholder-[#9CA3AF] text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#d42638] focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Industry Dropdown */}
                            <div>
                                <label
                                    htmlFor="industry"
                                    className="block text-sm font-medium text-[#252525] mb-2"
                                >
                                    Select your industry
                                </label>
                                <div className="relative">
                                    <select
                                        id="industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-[#E5E5E3] bg-[#F9F9F7] text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#d42638] focus:border-transparent appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="">Select your industry</option>
                                        <option value="technology">Technology</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="finance">Finance</option>
                                        <option value="retail">Retail & E-commerce</option>
                                        <option value="manufacturing">Manufacturing</option>
                                        <option value="education">Education</option>
                                        <option value="government">Government</option>
                                        <option value="nonprofit">Non-profit</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-[#9CA3AF]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Privacy Policy Notice */}
                            <div className="pt-4">
                                <p className="text-sm text-[#9CA3AF] text-center leading-relaxed">
                                    By clicking submit, you acknowledge your data will be processed
                                    according to our{' '}
                                    <a href="/privacy" className="text-[#d42638] hover:underline">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#9CA3AF] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#6B7280] transition-colors duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
