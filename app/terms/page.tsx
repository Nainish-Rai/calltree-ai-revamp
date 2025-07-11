'use client';

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function TermsPage() {
    return (
        <div className="w-full min-h-screen bg-[#F9F9F7] text-[#252525] overscroll-behavior-y-contain">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-[128px]">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#252525] mb-8">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-[#575757] max-w-2xl mx-auto leading-relaxed">
                        These terms govern your use of CallTree AI&apos;s services and platform.
                        Please read them carefully.
                    </p>
                    <div className="mt-6 text-sm text-[#575757]">Last updated: July 11, 2025</div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Acceptance of Terms
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    By accessing or using CallTree AI&apos;s services, you agree to
                                    be bound by these Terms of Service. If you do not agree to these
                                    terms, you may not use our services.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Description of Service
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    CallTree AI provides AI-powered contact center analytics and
                                    optimization solutions. Our platform helps businesses analyze
                                    call data, optimize workflows, and reduce operational costs
                                    through advanced artificial intelligence and machine learning
                                    technologies.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                User Accounts
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    To use our services, you may need to create an account. You
                                    agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Provide accurate and complete information</li>
                                    <li>Keep your account information updated</li>
                                    <li>Maintain the security of your account credentials</li>
                                    <li>
                                        Accept responsibility for all activities under your account
                                    </li>
                                    <li>Notify us immediately of any unauthorized use</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Acceptable Use
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>You agree not to use our services to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Infringe on intellectual property rights</li>
                                    <li>Transmit harmful or malicious code</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with or disrupt our services</li>
                                    <li>Use our services for any unlawful or fraudulent purpose</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Data and Privacy
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    You retain ownership of your data. By using our services, you
                                    grant us permission to process your data as necessary to provide
                                    our services. We handle your data in accordance with our Privacy
                                    Policy and applicable data protection laws.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Intellectual Property
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    CallTree AI and its licensors own all rights to our services,
                                    including software, algorithms, and related intellectual
                                    property. You may not copy, modify, distribute, or reverse
                                    engineer our services without written permission.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Service Availability
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    We strive to maintain high service availability but cannot
                                    guarantee uninterrupted access. We may suspend or terminate
                                    services for maintenance, security, or other operational
                                    reasons.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Limitation of Liability
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    To the maximum extent permitted by law, CallTree AI shall not be
                                    liable for any indirect, incidental, special, or consequential
                                    damages arising from your use of our services.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Termination
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    Either party may terminate this agreement at any time. Upon
                                    termination, your access to our services will cease, and we may
                                    delete your account data in accordance with our data retention
                                    policies.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Contact Information
                            </h2>
                            <div className="text-[#575757] leading-relaxed">
                                <p>
                                    If you have questions about these Terms of Service, please
                                    contact us at{' '}
                                    <a
                                        href="mailto:legal@calltree.ai"
                                        className="text-[#d42638] hover:underline"
                                    >
                                        legal@calltree.ai
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
