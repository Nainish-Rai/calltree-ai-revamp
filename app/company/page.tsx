'use client';

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@radix-ui/react-icons';
export default function AboutPage() {
    return (
        <div className="w-full min-h-screen bg-white text-forest-800 overscroll-behavior-y-contain">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-[128px]">
                {/* Hero Section */}
                <div className="text-center flex flex-col items-center justify-center max-w-5xl mx-auto mb-[100px]">
                    <h1 className="md:text-7xl mb-8 tracking-tight text-[52px] font-normal">
                        About Calltree AI
                    </h1>
                    <p className="text-xl md:text-2xl text-forest-600 max-w-3xl mb-12 font-light">
                        We&apos;re on a mission to transform contact center operations through
                        intelligent cost optimization and data-driven insights.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl text-forest-800 font-normal">Our Story</h2>
                        <p className="text-lg text-forest-600 leading-relaxed">
                            Founded in 2025, Calltree AI emerged from a simple observation: contact
                            centers needed a better way to understand and optimize their operational
                            costs. Our team of industry veterans and AI specialists came together to
                            build a solution that brings unprecedented visibility to contact center
                            operations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl text-forest-800 font-normal">Our Mission</h2>
                        <p className="text-lg text-forest-600 leading-relaxed">
                            We believe that every interaction in a contact center represents an
                            opportunity for optimization. By providing deep insights into
                            operational costs and workflow efficiency, we empower organizations to
                            make data-driven decisions that improve both their bottom line and
                            customer experience.
                        </p>
                    </motion.div>
                </div>

                {/* Team Section */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl text-forest-800 mb-12 font-normal">Our Leadership</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Kun's Profile */}
                        <div className="space-y-6">
                            <div className="w-48 h-48 bg-forest-100 rounded-full mx-auto mb-4 bg-[url(/images/Kpfo.png)] bg-contain bg-center bg-no-repeat" />

                            <div className="space-y-2">
                                <h3 className="font-medium text-forest-800 text-[28px]">
                                    Kun Qian
                                </h3>
                                <p className="text-lg text-forest-600 font-medium uppercase">
                                    CEO & Co-founder
                                </p>
                                <p className="text-forest-600 leading-relaxed text-start">
                                    Kun, co-founder and CEO of Calltree AI, previously a product
                                    leader at AWS where he focused on contact center solutions.
                                    During his tenure, he built and scaled multiple product lines
                                    that achieved tens of millions in annual recurring revenue.
                                    Drawing from deep insights into contact center operations and
                                    analytics, Kun co-founded Calltree AI to empower organizations
                                    with the data-driven insights they need to optimize operations
                                    and reduce costs.
                                </p>
                            </div>
                        </div>

                        {/* Robertson's Profile */}
                        <div className="space-y-6">
                            <div className="w-48 h-48 rounded-full mx-auto mb-4 bg-[url(/images/jZWV.png)] bg-[#00000000] bg-contain bg-center bg-no-repeat" />

                            <div className="space-y-2">
                                <h3 className="font-medium text-forest-800 text-[28px]">
                                    Robertson Taylor
                                </h3>
                                <p className="text-lg text-forest-600 font-medium uppercase">
                                    CTO & Co-founder
                                </p>
                                <p className="text-forest-600 leading-relaxed text-start">
                                    Robertson, co-founder and CTO of Calltree AI, brings a research
                                    background in High Performance Computing (HPC) and computer
                                    vision models. Previously at Marqo, he helped major e-commerce
                                    companies optimize their product search capabilities using
                                    fine-tuned multimodal embedding models. Robertson brings his
                                    expertise in AI and scalable systems to help Calltree AI
                                    transform contact center operations through data-driven
                                    insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="w-full bg-forest-800 py-24 pt-[116px] pb-[116px]">
                <div className="max-w-7xl mx-auto px-6 text-center flex-row block">
                    <h2 className="text-4xl md:text-5xl text-white font-normal mb-[52px]">
                        See your Cost Drivers
                    </h2>
                    <a
                        href="#"
                        className="inline-flex items-center bg-white text-forest-800 px-8 py-4 rounded-md text-lg font-medium hover:bg-forest-50 transition-colors"
                    >
                        Book a Demo <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
