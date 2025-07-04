import { motion } from 'framer-motion';
import Image from 'next/image';
import BlurVignette from './ui/blur-vignette';

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
                <motion.h1
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-normal  leading-tight tracking-tight text-grey-900"
                >
                    Our Story and Mission
                </motion.h1>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <BlurVignette className="rounded-3xl">
                                <Image
                                    src="/images/team.png"
                                    className=" rounded-2xl a rk:block"
                                    alt="payments illustration dark"
                                    width={1207}
                                    height={929}
                                />
                            </BlurVignette>
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-foreground"
                        >
                            Founded in 2025, Calltree AI emerged from a simple observation: contact
                            centers needed a better way to understand and optimize their operational
                            costs. Our team of industry veterans and AI specialists came together to
                            build a solution that brings unprecedented visibility to contact center
                            operations.
                            <br />
                            <br />
                            We believe that every interaction in a contact center represents an
                            opportunity for optimization. By providing deep insights into
                            operational costs and workflow efficiency.
                        </motion.p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>
                                    CallTree AI gave us insights that cut inefficiencies by 40% and
                                    boosted our team’s productivity.
                                </p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">
                                        Sarah Chen, Operations Director
                                    </cite>
                                    <img
                                        className="h-5 w-fit dark:invert"
                                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                        alt="Nvidia Logo"
                                        height="20"
                                        width="auto"
                                    />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
