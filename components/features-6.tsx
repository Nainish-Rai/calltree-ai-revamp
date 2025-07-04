import { Cpu, Dot, Lock, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';

export default function FeaturesSectionThree() {
    return (
        <section className="py-16 md:py-32 bg-[#F9F9F7] rounded-[3rem]">
            <div className="mx-auto max-w-6xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight">
                        AI agents that deliver exceptional customer experiences
                    </h2>
                    <p className="max-w-sm text-base lg:text-lg text-[#575757] leading-relaxed  sm:ml-auto">
                        Our AI-powered platform combines advanced technology with human-like
                        understanding to provide seamless, scalable customer support solutions.
                    </p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-88/36 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7]/30 to-transparent rounded-3xl pointer-events-none"></div>
                        <video
                            src="/videos/v6.mp4"
                            autoPlay
                            loop
                            muted
                            className="block z-0 rounded-3xl w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Dot className="size-8" />
                            <h3 className="text-sm font-normal">Lightning Fast</h3>
                        </div>
                        {/* <p className="text-muted-foreground text-sm">
                            Instant response times that exceed customer expectations and reduce wait
                            times.
                        </p> */}
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Dot className="size-8" />
                            <h3 className="text-sm font-normal">Enterprise-Grade</h3>
                        </div>
                        {/* <p className="text-muted-foreground text-sm">
                            Robust AI infrastructure built to handle high-volume operations at
                            scale.
                        </p> */}
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Dot className="size-8" />
                            <h3 className="text-sm font-normal">Secure & Compliant</h3>
                        </div>
                        {/* <p className="text-muted-foreground text-sm">
                            Enterprise-grade security ensuring customer data protection and
                            regulatory compliance.
                        </p> */}
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            {/* <Sparkles className="size-4" /> */}
                            <Dot className="size-8" />
                            <h3 className="text-sm font-normal">AI-Powered Intelligence</h3>
                        </div>
                        {/* <p className="text-muted-foreground text-sm">
                            Advanced machine learning that continuously improves performance and
                            accuracy.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
