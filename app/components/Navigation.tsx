import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
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
                    backdropFilter: isScrolled ? 'blur(4px)' : 'none',
                    WebkitBackdropFilter: isScrolled ? 'blur(4px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(97, 94, 76, 0.1)' : 'none',
                }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className=" space-x-8">
                            <a
                                href="/"
                                className="text-xl font-medium flex gap-4 items-center  text-forest-800"
                            >
                                <Image
                                    src="/images/logo.svg"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-md bg-[#d42638] p-1"
                                />
                                Calltree
                            </a>
                        </div>

                        {/* Right Side */}
                        <div className="hidden md:flex items-center gap-4">
                            {' '}
                            <Link href="/company" className="text-base text-forest-800 mb-1">
                                Company
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-[#d42638] text-[#d42638] bg-background/90 hover:bg-[#F4F4F2] px-8 py-4 rounded-full text-base font-medium transition-colors"
                            >
                                Book a Demo <ArrowRightIcon className="ml-2 w-5 h-5" />
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
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-forest-100 shadow-lg z-40"
                    >
                        <div className="px-6 py-6">
                            {/* Close button */}
                            {/* <div className="flex justify-end mb-4">
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-forest-600 hover:text-forest-800 transition-colors p-2 rounded-full hover:bg-forest-50"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div> */}

                            {/* Menu content */}
                            <div className="space-y-6">
                                <a
                                    href="/company"
                                    className="block text-forest-600 hover:text-forest-800 transition-colors text-lg font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Company
                                </a>
                                <div className="pt-4">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="w-full border-forest-300 text-forest-700 hover:bg-forest-50 hover:border-forest-400 px-6 py-3 rounded-full text-base font-medium transition-colors"
                                    >
                                        Book a Demo
                                        <ArrowRightIcon className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
