'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    RefreshCwIcon,
    SettingsIcon,
    UserCheckIcon,
    BarChart2Icon,
    ClockIcon,
    ListIcon,
    ShieldIcon,
    LockIcon,
    Zap,
    Users,
    TrendingUp,
} from 'lucide-react';

// Icon mapping to convert string names to actual icon components
const iconMap = {
    'refresh-cw': RefreshCwIcon,
    settings: SettingsIcon,
    'user-check': UserCheckIcon,
    'bar-chart-2': BarChart2Icon,
    clock: ClockIcon,
    list: ListIcon,
    shield: ShieldIcon,
    lock: LockIcon,
    zap: Zap,
    users: Users,
    'trending-up': TrendingUp,
};

interface FeatureSectionProps {
    id: string;
    headline: string;
    description: string;
    layout: 'two-column-visual-left' | 'two-column-visual-right';
    theme?: 'light' | 'dark';
    visualContent: {
        type: 'animated-map' | 'ui-mockup' | 'abstract-graphic';
        imageSrc: string;
        videoSrc?: string;
        caption?: string;
        animation?: any;
    };
    featureGrid: {
        icon: string;
        title: string;
        description: string;
    }[];
}

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const headerVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const visualVariants = {
    hidden: { x: -60, opacity: 0, scale: 0.95 },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const textVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const featureItemVariants = {
    hidden: { x: 100, y: 60, opacity: 0, scale: 0.9 },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const hoverVariants = {
    rest: { x: 0, y: 0, scale: 1 },
    hover: {
        x: 12,
        y: -4,
        scale: 1.02,
        transition: {
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
        },
    },
};

const iconHoverVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
        scale: 1.15,
        rotate: 5,
        transition: {
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
        },
    },
};

export function FeatureSection({
    id,
    headline,
    description,
    layout,
    theme = 'light',
    visualContent,
    featureGrid,
}: FeatureSectionProps) {
    const isDark = theme === 'dark';

    return (
        <motion.section
            id={id}
            className={`relative py-16 md:py-24 overflow-hidden ${
                isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header with CTA button */}
                <motion.div
                    className="flex justify-between items-start mb-16 md:mb-20"
                    variants={containerVariants}
                >
                    <div className="space-y-6 max-w-3xl">
                        <motion.h1
                            className={`text-3xl  md:text-4xl lg:text-5xl  font-normal leading-tight tracking-tight ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}
                            variants={headerVariants}
                        >
                            {headline}
                        </motion.h1>
                        <motion.p
                            className={`text-base lg:text-lg text-[#575757] leading-relaxed ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                            variants={headerVariants}
                        >
                            {description}
                        </motion.p>
                    </div>

                    <motion.button
                        className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                            isDark
                                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                                : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                        }`}
                        variants={headerVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Our product
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
                    </motion.button>
                </motion.div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual Content */}
                    <motion.div className="relative" variants={visualVariants}>
                        <motion.div
                            className={`relative aspect-[4/3] rounded-3xl overflow-hidden  ${
                                isDark ? 'bg-gray-800' : 'bg-gray-50'
                            }`}
                            // whileHover={{ scale: 1.02 }}
                            // transition={{ duration: 0.3 }}
                        >
                            <video
                                src={
                                    visualContent.videoSrc
                                        ? visualContent.videoSrc
                                        : visualContent.imageSrc
                                }
                                className="object-cover w-full h-full"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster={visualContent.imageSrc}
                            />
                            {/* Subtle gradient overlay */}
                            <div
                                className={`absolute inset-0 ${
                                    isDark
                                        ? 'bg-gradient-to-br from-transparent via-transparent to-black/20'
                                        : 'bg-gradient-to-br from-transparent via-transparent to-gray-900/10'
                                }`}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Features Content */}
                    <motion.div className="space-y-8" variants={textVariants}>
                        <motion.div className="space-y-8" variants={featureContainerVariants}>
                            {featureGrid.map((feature, index) => {
                                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 cursor-pointer group"
                                        variants={featureItemVariants}
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                    >
                                        <motion.div
                                            className={`flex-shrink-0 w-6 h-6 mt-1 transition-colors duration-300 ${
                                                isDark
                                                    ? 'text-gray-400 group-hover:text-white'
                                                    : 'text-gray-500 group-hover:text-gray-900'
                                            }`}
                                            variants={iconHoverVariants}
                                        >
                                            {IconComponent && <IconComponent className="w-6 h-6" />}
                                        </motion.div>
                                        <motion.div className="space-y-2" variants={hoverVariants}>
                                            <h3
                                                className={`text-base md:text-lg font- transition-colors duration-300 ${
                                                    isDark
                                                        ? 'text-white group-hover:text-gray-100'
                                                        : 'text-black group-hover:text-gray-800'
                                                }`}
                                            >
                                                {feature.title}
                                            </h3>
                                            <p
                                                className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                                                    isDark
                                                        ? 'text-gray-300 group-hover:text-gray-200'
                                                        : 'text-gray-600 group-hover:text-gray-700'
                                                }`}
                                            >
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mobile CTA button */}
                <motion.div
                    className="flex justify-center mt-12 md:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.button
                        className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                            isDark
                                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                                : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Our product
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
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
}
