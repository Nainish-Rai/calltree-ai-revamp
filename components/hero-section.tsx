import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { HeroHeader } from './header';
import { Navigation } from '@/app/components/Navigation';

export const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

export default function HeroSection() {
    return (
        <>
            {/* <HeroHeader /> */}
            <Navigation />

            <main className="overflow-hidden bg-[#F9F9F7] ">
                <section className="pt-32  lg:pt-48 ">
                    <div className="relative mx-auto max-w-6xl px-6">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            {/* Main Heading */}
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-4xl md:text-5xl lg:text-6xl   tracking-tight leading-[1.1] text-[#252525] mb-8"
                            >
                                Better customer experiences.
                            </TextEffect>

                            {/* Subtitle */}
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-xl text-[#575757] leading-[1.6] mb-16"
                            >
                                Scale your support team with AI agents that work exactly like your
                                best human representatives.
                            </TextEffect>

                            {/* CTA Buttons */}
                            <AnimatedGroup
                                variants={{
                                    container: {
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.75,
                                            },
                                        },
                                    },
                                    ...transitionVariants,
                                }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
                            >
                                <Button
                                    size="lg"
                                    className="bg-[#006A3A] hover:bg-[#005530] text-white px-8 py-4 rounded-full text-base font-medium transition-colors"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-[#E5E5E3] text-[#252525] hover:bg-[#F4F4F2] px-8 py-4 rounded-full text-base font-medium transition-colors"
                                >
                                    Watch Demo
                                </Button>
                            </AnimatedGroup>

                            {/* Interactive Demo Section */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
