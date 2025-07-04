'use client';

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { textVariant } from '@/lib/anims';
import { TextEffect } from '@/components/ui/text-effect';
import { VideoSection } from '../components/VideoSection';
import FeaturesSectionThree from '@/components/features-6';
import ContentSection from '@/components/content-1';

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen bg-[#F9F9F7] text-[#252525] overscroll-behavior-y-contain">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-[128px]">
                {/* Hero Section */}
                <div className="text-center flex flex-col items-center justify-center max-w-5xl mx-auto ">
                    {/* Main Heading */}
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h1"
                        className="text-balance text-4xl md:text-5xl lg:text-6xl   tracking-tight leading-[1.1] text-[#252525] mb-8"
                    >
                        Who we are and why we&apos;re here.
                    </TextEffect>

                    {/* Subtitle */}
                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.5}
                        as="p"
                        className="mx-auto mt-6 max-w-2xl text-base lg:text-xl text-[#575757] leading-[1.6] mb-16"
                    >
                        The team behind Calltree.ai.
                    </TextEffect>
                </div>

                {/* Team Image Section */}
                {/* Video Section */}
                <div className="">
                    <VideoSection videoSrc="https://videos.pexels.com/video-files/7989675/7989675-hd_1920_1080_25fps.mp4" />
                </div>

                {/* subcontent seciton */}
                <div className="relative z-10 max-w-6xl mx-auto      grid items-center gap-4 md:grid-cols-2 md:gap-2">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-normal  leading-tight tracking-tight">
                        AI agents that deliver exceptional customer experiences
                    </h2>
                    <p className="max-w-sm text-sm lg:text-base text-[#575757] leading-relaxed sm:ml-auto">
                        Our AI-driven platform blends cutting-edge technology with human
                        understanding.
                    </p>
                </div>

                <div className="">
                    <ContentSection />
                </div>
                {/* Content Sections */}
                {/* <div className="grid md:grid-cols-2 gap-16 my-20">
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
                        <h2 className="text-3xl text-[#252525] font-normal">Our Story</h2>
                        <p className="text-lg text-[#575757] leading-relaxed">
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
                        <h2 className="text-3xl text-[#252525] font-normal">Our Mission</h2>
                        <p className="text-lg text-[#575757] leading-relaxed">
                            We believe that every interaction in a contact center represents an
                            opportunity for optimization. By providing deep insights into
                            operational costs and workflow efficiency, we empower organizations to
                            make data-driven decisions that improve both their bottom line and
                            customer experience.
                        </p>
                    </motion.div>
                </div> */}

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
                    className=" mb-20"
                >
                    <motion.h1
                        viewport={{ once: true }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-gray-900`}
                    >
                        Meet the Founders
                    </motion.h1>

                    <div className="grid md:grid-cols-2 mt-8 gap-12">
                        {/* Kun's Profile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6 bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3]"
                        >
                            <div className="w-48 h-48 bg-[#F4F4F2] rounded-full mx-auto mb-4 bg-[url(/images/Kpfo.png)] bg-contain bg-center bg-no-repeat" />

                            <div className="space-y-4">
                                <h3 className="font-medium text-[#252525] text-[28px]">Kun Qian</h3>
                                <p className="text-lg text-[#575757] font-medium uppercase tracking-wide">
                                    CEO & Co-founder
                                </p>
                                <p className="text-[#575757] leading-relaxed text-start">
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
                        </motion.div>

                        {/* Robertson's Profile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3]"
                        >
                            <div className="w-48 h-48 rounded-full mx-auto mb-4 bg-[url(/images/jZWV.png)] bg-[#F4F4F2] bg-contain bg-center bg-no-repeat" />

                            <div className="space-y-4">
                                <h3 className="font-medium text-[#252525] text-[28px]">
                                    Robertson Taylor
                                </h3>
                                <p className="text-lg text-[#575757] font-medium uppercase tracking-wide">
                                    CTO & Co-founder
                                </p>
                                <p className="text-[#575757] leading-relaxed text-start">
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
                        </motion.div>
                    </div>
                </motion.div>

                {/* Customer Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-[120px]"
                >
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl text-[#252525] font-normal">Our customers</h2>
                        <button className="inline-flex items-center text-[#575757] hover:text-[#252525] transition-colors">
                            Read more
                            <ArrowRightIcon className="ml-2 w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] h-[400px] flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[#252525] mb-2">
                                        CLEAR
                                    </h3>
                                </div>
                                <p className="text-[#575757] leading-relaxed mb-6">
                                    &quot;Calltree AI gives us back time. Our support team is now
                                    focused on more complex, meaningful conversations. If a member
                                    wants to speak to a human, that&apos;s always an option. This is
                                    about augmentation, not elimination. &quot;
                                </p>
                            </div>
                            <div>
                                <p className="font-medium text-[#252525]">Adam Luebbers</p>
                                <p className="text-sm text-[#575757]">
                                    VP, Member Experience, Clear
                                </p>
                            </div>
                        </motion.div>

                        {/* Testimonial 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] h-[400px] flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[#252525] mb-2">
                                        Casper
                                    </h3>
                                </div>
                                <p className="text-[#575757] leading-relaxed mb-6">
                                    &ldquo;Our service has fundamentally changed. With the AI agent,
                                    we effectively have 24/7 availability and engage in any
                                    language&mdash;something we couldn&apos;t do before.&rdquo;
                                </p>
                            </div>
                            <div>
                                <p className="font-medium text-[#252525]">Marc Butakis</p>
                                <p className="text-sm text-[#575757]">VP of Operations, Casper</p>
                            </div>
                        </motion.div>

                        {/* Testimonial 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] h-[400px] flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[#252525] mb-2">
                                        minted.
                                    </h3>
                                </div>
                                <p className="text-[#575757] leading-relaxed mb-6">
                                    &quot;Our customers rely on Calltree AI for some of the most
                                    personal moments of their lives. It&apos;s critical that our AI
                                    agent not only provides accurate information but also does so in
                                    a way that reflects our care for each customer&apos;s unique
                                    needs.&quot;
                                </p>
                            </div>
                            <div>
                                <p className="font-medium text-[#252525]">Anissa Gomez</p>
                                <p className="text-sm text-[#575757]">Quality Specialist, Minted</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Office Locations Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-[120px]"
                >
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl text-[#252525] font-normal mb-8">
                                Our offices
                            </h2>
                            <div className="space-y-4">
                                <p className="text-xl text-[#575757] leading-relaxed">
                                    Based in{' '}
                                    <span className="text-[#4A9B8A] font-medium">New York</span>,{' '}
                                    <span className="text-[#4A9B8A] font-medium">Sydney</span>,{' '}
                                    <span className="text-[#4A9B8A] font-medium">London</span>, and{' '}
                                    <span className="text-[#4A9B8A] font-medium">
                                        San Francisco
                                    </span>
                                    , where it all began, we continue to grow and collaborate as a
                                    unified team.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="w-full h-48 bg-gradient-to-r from-[#F4F4F2] to-[#E8E8E6] rounded-2xl flex items-center justify-center">
                                <p className="text-[#575757]">Office 1</p>
                            </div>
                            <div className="w-full h-64 bg-gradient-to-r from-[#E8E8E6] to-[#F4F4F2] rounded-2xl flex items-center justify-center">
                                <p className="text-[#575757]">Office 2</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* News Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-[120px]"
                >
                    <h2 className="text-4xl text-[#252525] font-normal mb-12">In the news</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* News Article 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6">
                                <div className="text-sm font-semibold text-[#252525] mb-4 tracking-wider">
                                    TECHCRUNCH
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-[#252525] mb-4 leading-tight">
                                How AI is revolutionizing contact center cost optimization
                            </h3>
                        </motion.div>

                        {/* News Article 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6">
                                <div className="text-sm font-semibold text-[#252525] mb-4 tracking-wider">
                                    FORBES
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-[#252525] mb-4 leading-tight">
                                AI agents&apos; role in an evolving contact center landscape
                            </h3>
                        </motion.div>

                        {/* News Article 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <div className="mb-6">
                                <div className="text-sm font-semibold text-[#252525] mb-4 tracking-wider">
                                    BUSINESS INSIDER
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-[#252525] mb-4 leading-tight">
                                2025 Contact Center AI Innovation Leaders
                            </h3>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-[#252525] py-24 pt-[116px] pb-[116px]">
                <div className="max-w-7xl mx-auto px-6 text-center flex-row block">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl text-white font-normal mb-[52px]"
                    >
                        See your Cost Drivers
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="https://calendly.com/rob-calltree/30min"
                            className="inline-flex items-center bg-white text-[#252525] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F4F4F2] transition-colors"
                        >
                            Book a Demo <ArrowRightIcon className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
