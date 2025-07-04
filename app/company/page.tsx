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
import Link from 'next/link';
import Image from 'next/image';

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
                    className="mb-20"
                >
                    <div className="text-center mb-20">
                        <motion.h2
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-[#252525] mb-6"
                        >
                            Meet the Founders
                        </motion.h2>
                        <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-[#575757] max-w-2xl mx-auto leading-relaxed"
                        >
                            The visionaries behind Calltree AI, bringing together deep industry
                            expertise and cutting-edge technology innovation.
                        </motion.p>
                    </div>

                    {/* Founders Grid */}
                    <div className="space-y-24">
                        {/* Kun's Profile */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        >
                            {/* Image Section */}
                            <div className="relative order-2 lg:order-1">
                                <div className="relative overflow-hidden">
                                    {/* Main Image Container */}
                                    <div className="aspect-[4/5] relative max-w-md bg-gradient-to-br from-[#F4F4F2] to-[#E8E8E6] rounded-2xl overflow-hidden group">
                                        <img
                                            src="/images/Kpfo.png"
                                            alt="Kun Qian"
                                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>

                                        {/* Floating accent element */}
                                        <div className="absolute top-6 right-6 w-3 h-3 bg-[#006A3A] rounded-full shadow-lg"></div>
                                    </div>

                                    {/* Background geometric element */}
                                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#006A3A]/5 rounded-2xl -z-10"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="order-1 lg:order-2 space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-block">
                                        <span className="text-sm font-semibold text-[#006A3A] uppercase tracking-wider bg-[#006A3A]/5 px-3 py-1 rounded-full">
                                            CEO & Co-founder
                                        </span>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-medium text-[#252525] tracking-tight">
                                        Kun Qian
                                    </h3>
                                </div>

                                <div className="w-16 h-[2px] bg-[#006A3A] rounded-full"></div>

                                <div className="space-y-6">
                                    <p className="text-lg text-[#575757] leading-relaxed">
                                        Kun, co-founder and CEO of Calltree AI, previously a product
                                        leader at AWS where he focused on contact center solutions.
                                        During his tenure, he built and scaled multiple product
                                        lines that achieved tens of millions in annual recurring
                                        revenue.
                                    </p>
                                    <p className="text-lg text-[#575757] leading-relaxed">
                                        Drawing from deep insights into contact center operations
                                        and analytics, Kun co-founded Calltree AI to empower
                                        organizations with the data-driven insights they need to
                                        optimize operations and reduce costs.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex space-x-4 pt-4">
                                    <a
                                        href="#"
                                        className="group flex items-center space-x-2 text-[#575757] hover:text-[#006A3A] transition-colors"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center border border-[#E5E5E3] rounded-lg group-hover:border-[#006A3A] transition-colors">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <Link
                                            target="_blank"
                                            href="https://www.linkedin.com/in/qian-kun/"
                                        >
                                            {' '}
                                            <span className="text-sm font-medium">
                                                LinkedIn
                                            </span>{' '}
                                        </Link>
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center space-x-2 text-[#575757] hover:text-[#006A3A] transition-colors"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center border border-[#E5E5E3] rounded-lg group-hover:border-[#006A3A] transition-colors">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Robertson's Profile */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                        >
                            {/* Content Section */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-block">
                                        <span className="text-sm font-semibold text-[#006A3A] uppercase tracking-wider bg-[#006A3A]/5 px-3 py-1 rounded-full">
                                            CTO & Co-founder
                                        </span>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-medium text-[#252525] tracking-tight">
                                        Robertson Taylor
                                    </h3>
                                </div>

                                <div className="w-16 h-[2px] bg-[#006A3A] rounded-full"></div>

                                <div className="space-y-6">
                                    <p className="text-lg text-[#575757] leading-relaxed">
                                        Robertson, co-founder and CTO of Calltree AI, brings a
                                        research background in High Performance Computing (HPC) and
                                        computer vision models. Previously at Marqo, he helped major
                                        e-commerce companies optimize their product search
                                        capabilities using fine-tuned multimodal embedding models.
                                    </p>
                                    <p className="text-lg text-[#575757] leading-relaxed">
                                        Robertson brings his expertise in AI and scalable systems to
                                        help Calltree AI transform contact center operations through
                                        data-driven insights and cutting-edge technology solutions.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex space-x-4 pt-4">
                                    <a
                                        href="#"
                                        className="group flex items-center space-x-2 text-[#575757] hover:text-[#006A3A] transition-colors"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center border border-[#E5E5E3] rounded-lg group-hover:border-[#006A3A] transition-colors">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <Link
                                            target="_blank"
                                            href="https://www.linkedin.com/in/robertsonotaylor/"
                                        >
                                            {' '}
                                            <span className="text-sm font-medium">
                                                LinkedIn
                                            </span>{' '}
                                        </Link>
                                    </a>
                                    <a
                                        href="#"
                                        className="group flex items-center space-x-2 text-[#575757] hover:text-[#006A3A] transition-colors"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center border border-[#E5E5E3] rounded-lg group-hover:border-[#006A3A] transition-colors">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">Twitter</span>
                                    </a>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="relative flex justify-end">
                                <div className="relative flex justify-between overflow-hidden">
                                    {/* Main Image Container */}
                                    <div className="aspect-[4/5] relative bg-gradient-to-br max-w-md from-[#F4F4F2] to-[#E8E8E6] rounded-2xl overflow-hidden group">
                                        <img
                                            src="/images/jZWV.png"
                                            alt="Robertson Taylor"
                                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>

                                        {/* Floating accent element */}
                                        <div className="absolute top-6 left-6 w-3 h-3 bg-[#006A3A] rounded-full shadow-lg"></div>
                                    </div>

                                    {/* Background geometric element */}
                                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#006A3A]/5 rounded-2xl -z-10"></div>
                                </div>
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
                    <div className="grid md:grid-cols-3 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl text-[#252525] font-normal mb-8">
                                Our offices
                            </h2>
                            <div className="space-y-4">
                                <p className="text-xl text-[#575757] leading-relaxed">
                                    Based in{' '}
                                    <span className="text-[#4A9B8A] font-medium">New York</span>,{' '}
                                    <span className="text-[#4A9B8A] font-medium">
                                        San Francisco
                                    </span>
                                    , where it all began, we continue to grow and collaborate as a
                                    unified team.
                                </p>
                            </div>
                        </div>

                        <div className="grid col-span-2 grid-cols-2 gap-4">
                            <div className="w-full h-48 bg-gradient-to-r from-[#F4F4F2] to-[#E8E8E6] rounded-2xl flex items-center justify-center">
                                <img
                                    src="https://images.pexels.com/photos/6804603/pexels-photo-6804603.jpeg"
                                    alt="Office 1"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>
                            <div className="w-96 h-full bg-gradient-to-r from-[#E8E8E6] to-[#F4F4F2] rounded-2xl flex items-center justify-center">
                                <img
                                    src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F47b5505c4cf527023790646676eafe00810e6772-8256x6192.jpg%3Frect%3D169%2C0%2C8087%2C5999%26auto%3Dformat&width=1920&quality=90"
                                    alt="Office 1"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-full rounded-3xl object-cover"
                                />
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
            <div className="w-full rounded-[2.5rem] mx-auto max-w-7xl mb-16 bg-[#006A3A] py-24 pt-[116px] pb-[116px]">
                <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl text-white font-normal mb-[52px] tracking-tight"
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
                            className="inline-flex items-center bg-white text-[#006A3A] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F4F4F2] hover:text-[#252525] transition-colors shadow-lg"
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
