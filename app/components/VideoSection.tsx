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
                            delayChildren: 1.0,
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
            className={`w-full  px-4 ${className}`}
        >
            <div className="w-full rounded-[2.5rem] overflow-hidden">
                <video src={videoSrc} autoPlay loop muted className="w-full"></video>
            </div>
        </AnimatedGroup>
    );
}
