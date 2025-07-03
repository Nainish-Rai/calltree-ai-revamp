'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CustomerResult {
    logo: string;
    logoAlt: string;
    metric: string;
    metricValue: string;
    description: string;
    statLabel?: string;
    statValue?: string;
    statChange?: string;
}

interface ResultsSectionProps {
    headline: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    customerResults: CustomerResult[];
}

export function ResultsSection({
    headline,
    description,
    buttonText = 'Our customers',
    buttonHref = '#customers',
    customerResults,
}: ResultsSectionProps) {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-16 md:mb-20">
                    <div className="space-y-6 max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-gray-900"
                        >
                            {headline}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-base lg:text-lg text-[#575757] leading-relaxed"
                        >
                            {description}
                        </motion.p>
                    </div>

                    <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-all duration-300">
                        {buttonText}
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Customer Results Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {customerResults.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {/* Customer Card */}
                            <div className="relative  h-72 rounded-3xl overflow-hidden bg-gray-900 mb-6">
                                {/* Brand Logo */}
                                <div className="absolute  inset-0 flex items-center justify-center">
                                    <Image
                                        src={result.logo}
                                        alt={result.logoAlt}
                                        width={400}
                                        height={400}
                                        className="w-full  h-full object-cover"
                                    />
                                </div>

                                {/* Metric Overlay */}
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="text-xs text-white mb-1">{result.metric}</div>
                                    <div className="text-2xl md:text-3xl font-medium">
                                        {result.metricValue}
                                    </div>
                                </div>

                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                    {result.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA button */}
                <div className="flex justify-center mt-12 md:hidden">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-all duration-300">
                        {buttonText}
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
