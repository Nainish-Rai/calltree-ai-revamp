import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100; // Reduced threshold to match page style
            setIsScrolled(window.scrollY > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="fixed inset-x-0 top-0 flex justify-center z-50">
            <motion.nav
                className="w-full"
                initial={{
                    y: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                }}
                animate={{
                    y: 0,
                    backgroundColor: isScrolled
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0)',
                }}
                transition={{
                    backgroundColor: {
                        type: 'tween',
                        duration: 0.2,
                    },
                }}
                style={{
                    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
                    WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(97, 94, 76, 0.1)' : 'none',
                }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a href="/" className="text-2xl font-semibold text-forest-800">
                            Calltree.ai
                        </a>

                        {/* Right Side */}
                        <div className="hidden md:flex items-center gap-4">
                            {' '}
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-green-800 text-green-800  hover:bg-[#F4F4F2] px-8 py-4 rounded-full text-base font-medium transition-colors"
                            >
                                Watch Demo
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-forest-600 hover:text-forest-800 transition-colors p-2 -mr-2"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                            <a
                                href="#"
                                className="text-forest-600 hover:text-forest-800 transition-colors text-xl"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                className="text-forest-600 hover:text-forest-800 transition-colors text-xl"
                            >
                                Enterprise
                            </a>
                            <a
                                href="#"
                                className="text-forest-600 hover:text-forest-800 transition-colors text-xl"
                            >
                                Government
                            </a>
                            <a
                                href="#"
                                className="text-forest-600 hover:text-forest-800 transition-colors text-xl"
                            >
                                Resources
                            </a>
                            <div className="pt-8 flex flex-col gap-4 w-full max-w-[280px]">
                                <button className="w-full text-forest-600 hover:text-forest-800 transition-colors text-xl px-6 py-4 rounded-md border border-forest-200 hover:border-forest-300">
                                    Log In
                                </button>
                                <button className="w-full bg-forest-300 text-white px-6 py-4 rounded-md text-xl font-medium hover:bg-forest-400 transition-colors">
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
