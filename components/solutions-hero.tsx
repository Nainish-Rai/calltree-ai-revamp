import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { HeroHeader } from './header';
import { Navigation } from '@/app/components/Navigation';
import { VideoSection } from '@/app/components/VideoSection';

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

type Props = {
    title: string;
    subtitle: string;
    videoSrc: string;
};
export default function SolutionsHero({ title, subtitle, videoSrc }: Props) {
    return (
        <>
            {/* <HeroHeader /> */}
            <Navigation />

            <main className="overflow-hidden bg-[#F9F9F7] ">
                <section className="pt-32  lg:pt-48 ">
                    <div className="relative  max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="relative z-10  max-w-4xl ">
                            {/* Main Heading */}
                            {/* <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"

                            > */}
                            <p className="text-left text-sm lg:text-base tracking-tight leading-[1.1] text-[#252525] mb-3">
                                Solution
                            </p>
                            <h1 className="text-left text-3xl md:text-4xl lg:text-4xl   tracking-tight leading-[1.1] text-[#252525] mb-2">
                                {title}
                            </h1>
                            {/* </TextEffect> */}
                            {/* Subtitle */}
                            {/* <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-base lg:text-xl text-[#575757] leading-[1.6] mb-16"
                            > */}
                            <p className="text-left text-3xl md:text-4xl lg:text-4xl   tracking-tight leading-[1.1] text-[#716f6c] mb-16">
                                {subtitle}
                            </p>
                            {/* </TextEffect> */}
                            {/* CTA Buttons */}
                            {/* <AnimatedGroup
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
                                }} */}

                            {/* Closing AnimatedGroup */}
                            {/* Interactive Demo Section */}
                        </div>
                    </div>
                </section>
                <div className="bg-white">
                    <VideoSection videoSrc={videoSrc} />
                </div>
            </main>
        </>
    );
}
