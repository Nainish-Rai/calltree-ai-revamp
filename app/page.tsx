'use client';
import Image from 'next/image';
import Script from 'next/script';
import { BarChartProps } from '@tremor/react';
import { SupportTicketCard } from './components/SupportTicketCard';
import { WorkflowDistributionCard } from './components/WorkflowDistributionCard';
import {
    ArrowRightIcon,
    MagnifyingGlassIcon,
    FileTextIcon,
    MinusIcon,
    CheckCircledIcon,
    ClipboardIcon,
    MixerHorizontalIcon,
    TargetIcon,
    BarChartIcon,
    PieChartIcon,
    ListBulletIcon,
    ActivityLogIcon,
    DashboardIcon,
    LayersIcon,
    PersonIcon,
    GearIcon,
    UpdateIcon,
} from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { Footer } from './components/Footer';
import { ApplicationUsageCard } from './components/ApplicationUsageCard';
import { InsightCard } from './components/InsightCard';
import HeroSection, { transitionVariants } from '../components/hero-section';
import { AnimatedGroup } from '@/components/ui/animated-group';

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-[#F9F9F7] text-[#252525] overscroll-behavior-y-contain">
            <Script
                id="reb2b-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: ` !function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=true;reb2b.methods=["identify","collect"];reb2b.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/VN080H4RPW6J.js.gz";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("VN080H4RPW6J");}(); `,
                }}
            />
            <Script
                id="collect-data-script"
                strategy="afterInteractive"
                src="https://k3604p7013.execute-api.us-east-1.amazonaws.com/dev/collect-data?userId=6792b8d015d2f39360d10a4a"
            />

            {/* Use the new HeroSection component */}
            <HeroSection />
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
                    ...transitionVariants,
                }}
                className=" w-full px-4"
            >
                <div className="w-full rounded-[2.5rem] overflow-hidden">
                    <video
                        src="https://sierra.ai/-/cdn/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2Ff189003833c6b320256e3dddc9182f5caf157771.mp4#t=0.001"
                        autoPlay
                        loop
                        muted
                        className="w-full"
                    ></video>
                </div>
            </AnimatedGroup>
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pb-[164px]">
                <div className="max-w-4xl mx-auto mb-24 hidden">
                    <div className="relative flex justify-between items-center">
                        {/* Connector Lines - Positioned behind circles */}
                        <div className="absolute top-8 left-[32px] right-[32px] h-[2px] bg-forest-300"></div>
                        {/* Steps Container */}
                        <div className="relative flex justify-between w-full">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-forest-300 rounded-full flex items-center justify-center mb-4 relative z-10">
                                    <MagnifyingGlassIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-forest-800">Track Costs</h3>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-forest-300 rounded-full flex items-center justify-center mb-4 relative z-10">
                                    <FileTextIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-forest-800">
                                    Build Business Case
                                </h3>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-forest-300 rounded-full flex items-center justify-center mb-4 relative z-10">
                                    <MinusIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-forest-800">Cut Costs</h3>
                            </div>
                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-forest-300 rounded-full flex items-center justify-center mb-4 relative z-10">
                                    <CheckCircledIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-forest-800">
                                    Prove Results
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature Section */} {/* Testimonial Card Section */}
                <div className="flex flex-col gap-[250px]">
                    <div className="flex flex-col gap-[200px]">
                        <div className="flex flex-col gap-[100px]">
                            <div className="md:grid-cols-2 gap-12 items-center grid m-0">
                                {/* Left Content */}
                                <div className="space-y-12">
                                    {/* Track Costs Section */}
                                    <div className="space-y-4">
                                        <h2 className="tracking-tight font-normal text-forest-800 text-[36px] text-balance rounded-none">
                                            AI Agents that Work Exactly Like Your Human Agents
                                        </h2>
                                    </div>
                                    {/* Workflow Analytics Section */}
                                    <div className="space-y-8"></div>
                                </div>
                                {/* Right Image */}
                                <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[400px] bg-[url(/images/rWMu.png)] bg-cover bg-center bg-no-repeat">
                                    <div className="relative inset-0 from-sage-50 to-sage-100 bg-none">
                                        <Image
                                            src="/images/Track-Inefficiencies_1.svg"
                                            alt="Track Inefficiencies"
                                            width={640}
                                            height={80}
                                            priority
                                            className="absolute top-4 left-1/2 transform -translate-x-1/2"
                                        />
                                        <Image
                                            src="/images/Track-Inefficiencies_2.svg"
                                            alt="Track Inefficiencies"
                                            width={300}
                                            height={60}
                                            priority
                                            className="absolute left-1/2 -translate-x-1/2 top-24 backdrop-blur-lg shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="justify-start items-start grid grid-cols-1 md:grid-cols-3 gap-[52px]">
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-6"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <ClipboardIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Use Your Existing Tools</h4>
                                    <p className="text-forest-600 text-balance">
                                        Our AI agents effortlessly navigate your internal enterprise
                                        systems, following your processes and completing tasks
                                        exactly like your human agents—from CRMs to custom
                                        dashboards.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-6"
                                >
                                    <div className="bg-forest-100 rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
                                        <MixerHorizontalIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">
                                        Natural and Empathetic Conversations
                                    </h4>
                                    <p className="text-forest-600 text-balance">
                                        Engage customers naturally by understanding context,
                                        emotions, and industry jargon, ensuring friendly and
                                        considerate support that makes customers feel heard and
                                        valued.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <TargetIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">
                                        Clone Your Best Human Reps
                                    </h4>
                                    <p className="text-forest-600 text-balance">
                                        Our AI agents learn directly from how your best agents
                                        handle customer issues—quickly picking up their approach,
                                        style, and processes to deliver the same exceptional
                                        service.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="bg-none flex flex-col gap-[100px]">
                            <div className="grid md:grid-cols-2 gap-12 items-center bg-none mb-0">
                                {/* Left Content */}
                                <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[400px] bg-none">
                                    <div className="absolute inset-0 from-sage-50 to-sage-100 bg-[url(/images/V82b.png)] bg-cover bg-center bg-no-repeat">
                                        <div className="absolute inset-0 from-sage-50 to-sage-100 bg-none">
                                            <Image
                                                src="/images/Business-Case_1.svg"
                                                alt="Build Business Case"
                                                width={340}
                                                height={80}
                                                priority
                                                className="absolute right-[60%] bottom-[70%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-2xl border border-white"
                                            />
                                            <Image
                                                src="/images/Business-Case_2.svg"
                                                alt="Build Business Case"
                                                width={340}
                                                height={60}
                                                priority
                                                className="absolute right-[40%] top-[30%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-2xl border border-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-12">
                                    {/* Build Business Case Section */}
                                    <div className="space-y-4">
                                        <h2 className="tracking-tight font-normal text-forest-800 text-[36px] text-balance">
                                            Onboarding as Simple as Hiring a Human Agent
                                        </h2>
                                    </div>
                                    {/* Data-Driven Decision Making Section */}
                                    <div className="space-y-8">
                                        <div className="space-y-4 hidden">
                                            <h3 className="text-2xl font-medium">
                                                Data-Driven Decision Making
                                            </h3>
                                            <p className="text-lg text-forest-600">
                                                Turn insights into action with data-backed
                                                recommendations
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Image */}
                            </div>
                            <div className="justify-start items-start grid grid-cols-1 md:grid-cols-3 gap-[52px]">
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col gap-6"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <BarChartIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Instant Ramp-Up</h4>
                                    <p className="text-forest-600 text-balance">
                                        AI agents learn by observing your human reps, quickly
                                        adapting to your processes and workflows. When ready, they
                                        seamlessly handle customer interactions and ramp up exactly
                                        like human employees.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
                                        <PieChartIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Seamless Human Handoff</h4>
                                    <p className="text-forest-600 text-balance">
                                        If a conversation requires human intervention, Calltree
                                        automatically transfers it—providing full context and
                                        conversation history to your agents for fast, seamless
                                        handling.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <ListBulletIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Continuous Improvement</h4>
                                    <p className="text-forest-600 text-balance">
                                        Our AI agents continually learn from every interaction,
                                        automatically improving performance, accuracy, and
                                        efficiency over time—without extra effort from your team.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[100px]">
                            <div className="grid md:grid-cols-2 gap-12 items-center m-0">
                                {/* Left Content */}
                                <div className="space-y-12">
                                    {/* Track Costs Section */}
                                    <div className="space-y-4">
                                        <h2 className="tracking-tight text-[36px] font-normal text-balance">
                                            Secure, Compliant, and Enterprise-Ready
                                        </h2>
                                    </div>
                                    {/* Workflow Analytics Section */}
                                    <div className="space-y-8">
                                        <div className="space-y-4 hidden">
                                            <h3 className="text-2xl font-medium">
                                                AI-Powered Recommendations
                                            </h3>
                                            <p className="text-lg text-forest-600">
                                                Understand agent workflow and actions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[400px]">
                                    <div className="absolute inset-0 from-sage-50 to-sage-100 bg-[url(/images/8swX.png)] bg-cover bg-center bg-no-repeat">
                                        <div className="absolute inset-0 from-sage-50 to-sage-100 bg-none">
                                            <Image
                                                src="/images/Cut-Costs.svg"
                                                alt="Build Business Case"
                                                width={440}
                                                height={100}
                                                priority
                                                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-lg shadow-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Right Image */}
                            </div>
                            <div className="justify-start items-start grid grid-cols-1 md:grid-cols-3 gap-[52px]">
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <UpdateIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Robust Guardrails</h4>
                                    <p className="text-forest-600 text-balance">
                                        Our AI agents strictly follow your business rules and
                                        compliance policies.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
                                        <GearIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Data Protection</h4>
                                    <p className="text-forest-600 text-balance">
                                        Sensitive customer information remains secure, encrypted,
                                        and private.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <PersonIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Consistent and On-Brand</h4>
                                    <p className="text-forest-600 text-balance">
                                        Our AI agents reliably represent your brand, providing only
                                        approved, accurate information—every interaction aligns with
                                        your organization's standards.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start gap-[100px]">
                            <div className="grid md:grid-cols-2 gap-12 items-center m-0">
                                {/* Left Content */}
                                <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 from-sage-50 to-sage-100 bg-[url(/images/2NVD.png)] bg-cover bg-center bg-no-repeat">
                                        <Image
                                            src="/images/Prove-Results_1.svg"
                                            alt="Prove Results"
                                            width={340}
                                            height={80}
                                            priority
                                            className="absolute right-[60%] bottom-[70%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-xl"
                                        />
                                        <Image
                                            src="/images/Prove-Results_2.svg"
                                            alt="Prove Results"
                                            width={340}
                                            height={60}
                                            priority
                                            className="absolute right-[40%] top-[40%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-12">
                                    {/* Track Costs Section */}
                                    <div className="space-y-4">
                                        <h2 className="tracking-tight text-[36px] font-normal">
                                            Always-On, Scalable Coverage
                                        </h2>
                                    </div>
                                    {/* Workflow Analytics Section */}
                                    <div className="space-y-8">
                                        <div className="space-y-4"></div>
                                    </div>
                                </div>
                                {/* Right Image */}
                            </div>
                            <div className="justify-start items-start grid grid-cols-1 md:grid-cols-3 gap-[52px]">
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <UpdateIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Instant Resolutions</h4>
                                    <p className="text-forest-600 text-balance">
                                        Solve issues on the first contact, eliminating tedious IVR
                                        menus and long wait times.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
                                        <GearIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Elastic Support</h4>
                                    <p className="text-forest-600 text-balance">
                                        Effortlessly handle fluctuations in call volume without
                                        hiring or scheduling additional resources.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="space-y-2 flex flex-col gap-[12px]"
                                >
                                    <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                        <PersonIcon className="w-6 h-6 text-forest-600" />
                                    </div>
                                    <h4 className="text-lg font-medium">Consistent Quality</h4>
                                    <p className="text-forest-600 text-balance">
                                        Maintain high service standards even during unexpected
                                        demand spikes.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Full-width CTA Banner */}
            <div className="w-full bg-forest-800 py-24 pt-[116px] pb-[116px]">
                <div className="max-w-7xl mx-auto px-6 text-center flex-row block">
                    <h2 className="text-4xl md:text-5xl text-white font-normal mb-6">
                        Ready to Scale Your Contact Center with AI Agents?
                    </h2>
                    <p className="text-xl text-white font-light max-w-4xl mx-auto mb-[52px]">
                        Join forward-thinking enterprises leveraging Calltree's AI Agents to scale
                        their customer support effortlessly. Contact our team today to experience
                        firsthand how Calltree's AI can revolutionize your customer service
                        operations.
                    </p>
                    <a
                        href="https://calendly.com/rob-calltree/30min"
                        className="inline-flex items-center bg-white text-forest-800 px-8 py-4 rounded-md text-lg font-medium hover:bg-forest-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a Meeting <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 hidden">
                <div className="mt-24 mb-16 max-w-3xl mx-auto">
                    <div className="relative bg-forest-800 rounded-2xl p-12">
                        {/* Quote mark decoration */} <div className="absolute -top-6 left-8"></div>
                        <div className="flex flex-col">
                            {/* Logo */}
                            <div className="mb-6">
                                <svg
                                    className="h-6 text-gray-500 w-[173px]"
                                    viewBox="0 0 100 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 6L6 12L12 18" />
                                    <text x="24" y="18" className="text-xl">
                                        Fancy Logo
                                    </text>
                                </svg>
                            </div>
                            {/* Quote text */}
                            <p className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed pr-32">
                                We found $2M in savings from optimizing just our authentication
                                process.
                            </p>
                            {/* Author info */}
                            <div className="flex items-center">
                                <div className="flex-1">
                                    <p className="font-medium text-white">Operations Head</p>
                                    <p className="text-gray-400 text-sm">Enterprise</p>
                                </div>
                                <div className="rounded-full overflow-hidden bg-[url(/images/AwjP.png)] rounded-tr-none rounded-br-none rounded-tl-none w-[150px] h-[150px] bg-cover bg-center bg-no-repeat absolute right-10 top-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
