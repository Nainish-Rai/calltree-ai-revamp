'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    RotateCcw,
    Settings,
    UserCheck,
    BarChart2,
    Clock,
    List,
    Shield,
    Lock,
    Zap,
    Users,
    TrendingUp,
    Heart,
    AlertCircle,
    Cpu,
    Wrench,
    Book,
    ArrowUpRight,
    FileText,
    Target,
    DollarSign,
    ShoppingCart,
    PieChart,
    BarChart3,
    Activity,
    Eye,
    Lightbulb,
    Minimize2,
} from 'lucide-react';
// import { TextEffect } from '@/components/ui/text-effect';
import { textVariant } from '@/lib/anims';

// Icon mapping to convert string names to actual icon components
const iconMap = {
    RotateCcw: RotateCcw,
    Settings: Settings,
    UserCheck: UserCheck,
    BarChart2: BarChart2,
    Clock: Clock,
    List: List,
    Shield: Shield,
    Lock: Lock,
    Zap: Zap,
    Users: Users,
    TrendingUp: TrendingUp,
    Heart: Heart,
    AlertCircle: AlertCircle,
    Cpu: Cpu,
    Wrench: Wrench,
    Book: Book,
    ArrowUpRight: ArrowUpRight,
    FileText: FileText,
    Target: Target,
    DollarSign: DollarSign,
    ShoppingCart: ShoppingCart,
    PieChart: PieChart,
    BarChart3: BarChart3,
    Activity: Activity,
    Eye: Eye,
    Lightbulb: Lightbulb,
    Minimize2: Minimize2,
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
    const blurVariant = {
        hidden: { filter: 'blur(4px)' },
        visible: { filter: 'blur(0px)' },
    };

    const blurSlideVariant = {
        hidden: { filter: 'blur(4px)', y: 20 },
        visible: { filter: 'blur(0px)', y: 0 },
    };
    return (
        <section
            id={id}
            className={`relative py-16 md:py-24 overflow-hidden ${
                isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header with CTA button */}
                <div className="flex  justify-between items-start mb-16 md:mb-20">
                    <div className="space-y-6 max-w-3xl">
                        <h1
                            // viewport={{ once: true }}
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}
                            // transition={{ duration: 0.5, delay: 0.1 }}
                            className={`text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight ${
                                isDark ? 'text-white' : 'text-gray-900'
                            }`}
                        >
                            {headline}
                        </h1>

                        <p
                            // viewport={{ once: true }}
                            // initial={{ opacity: 0 }}
                            // whileInView={{ opacity: 1 }}
                            // transition={{ duration: 0.5, delay: 0.2 }}
                            className={`text-base lg:text-lg text-[#575757] leading-relaxed ${
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}
                        >
                            {description}
                        </p>
                    </div>

                    <button
                        className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                            isDark
                                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                                : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                        }`}
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
                    </button>
                </div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual Content */}
                    <div className="relative">
                        <div
                            className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${
                                isDark ? 'bg-gray-800' : 'bg-gray-50'
                            }`}
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
                        </div>
                    </div>

                    {/* Features Content */}
                    <div className="space-y-8">
                        <div className="space-y-8">
                            {featureGrid.map((feature, index) => {
                                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 cursor-pointer group"
                                        // viewport={{ once: true }}
                                        // initial={{ opacity: 0, x: 0 }}
                                        // whileInView={{ opacity: 1, x: 0 }}
                                        // transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div
                                            className={`flex-shrink-0 w-6 h-6 mt-1 transition-colors duration-300 ${
                                                isDark
                                                    ? 'text-gray-400 group-hover:text-white'
                                                    : 'text-gray-500 group-hover:text-gray-900'
                                            }`}
                                        >
                                            {IconComponent && <IconComponent className="w-6 h-6" />}
                                        </div>
                                        <div className="space-y-2">
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
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile CTA button */}
                <div className="flex justify-center mt-12 md:hidden">
                    <button
                        className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                            isDark
                                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                                : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                        }`}
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
                    </button>
                </div>
            </div>
        </section>
    );
}
