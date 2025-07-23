import { TextEffect } from '@/components/ui/text-effect';

export function HeroTitle() {
    return (
        <div className="text-center space-y-6">
            <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="text-balance text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-[#252525]"
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
                className="mx-auto max-w-2xl text-xl text-[#575757] leading-[1.6] font-normal"
            >
                Scale your support team with AI agents that work exactly like your best human
                representatives.
            </TextEffect>
        </div>
    );
}
