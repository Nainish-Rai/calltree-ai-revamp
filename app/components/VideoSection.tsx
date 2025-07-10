'use client';

import { AnimatedGroup } from '@/components/ui/animated-group';

interface VideoSectionProps {
    videoSrc: string;
    className?: string;
}

export function VideoSection({ videoSrc, className = '' }: VideoSectionProps) {
    return (
        <AnimatedGroup
            variants={{
                container: {
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.5,
                        },
                    },
                },
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
                            type: 'spring' as const,
                            bounce: 0.3,
                            duration: 1.5,
                        },
                    },
                },
            }}
            className={`w-full  bg-[#F9F9F7] rounded-b-[3rem] pb-16 mx-auto  px-4 ${className}`}
        >
            <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden">
                <video src={videoSrc} autoPlay loop muted className="w-full"></video>
            </div>
        </AnimatedGroup>
    );
}
