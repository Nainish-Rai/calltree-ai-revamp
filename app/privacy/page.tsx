'use client';

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function PrivacyPage() {
    return (
        <div className="w-full min-h-screen bg-[#F9F9F7] text-[#252525] overscroll-behavior-y-contain">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-[128px]">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#252525] mb-8">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-[#575757] max-w-2xl mx-auto leading-relaxed">
                        Your privacy is important to us. This policy explains how we collect, use,
                        and protect your information.
                    </p>
                    <div className="mt-6 text-sm text-[#575757]">Last updated: July 11, 2025</div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Information We Collect
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    We collect information you provide directly to us, such as when
                                    you create an account, use our services, or contact us for
                                    support. This may include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name, email address, and contact information</li>
                                    <li>Account credentials and preferences</li>
                                    <li>Payment and billing information</li>
                                    <li>Communications with our support team</li>
                                    <li>
                                        Usage data and analytics from your use of our AI services
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                How We Use Your Information
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Provide, maintain, and improve our AI-powered contact center
                                        solutions
                                    </li>
                                    <li>Process transactions and send related information</li>
                                    <li>Send technical notices, updates, and support messages</li>
                                    <li>Respond to your comments, questions, and requests</li>
                                    <li>Analyze usage patterns to enhance our services</li>
                                    <li>Comply with legal obligations and protect our rights</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Information Sharing
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    We do not sell, trade, or rent your personal information to
                                    third parties. We may share your information only in the
                                    following circumstances:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>With your consent or at your direction</li>
                                    <li>
                                        With service providers who assist us in operating our
                                        business
                                    </li>
                                    <li>To comply with legal obligations or protect our rights</li>
                                    <li>In connection with a business transfer or acquisition</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Data Security
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    We implement appropriate technical and organizational measures
                                    to protect your personal information against unauthorized
                                    access, alteration, disclosure, or destruction. This includes
                                    encryption, access controls, and regular security assessments.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Your Rights
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    Depending on your location, you may have certain rights
                                    regarding your personal information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access and portability of your data</li>
                                    <li>Correction of inaccurate information</li>
                                    <li>Deletion of your information</li>
                                    <li>Restriction of processing</li>
                                    <li>Objection to processing</li>
                                </ul>
                                <p>
                                    To exercise these rights, please contact us at{' '}
                                    <a
                                        href="mailto:privacy@calltree.ai"
                                        className="text-[#d42638] hover:underline"
                                    >
                                        privacy@calltree.ai
                                    </a>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">Contact Us</h2>
                            <div className="text-[#575757] leading-relaxed">
                                <p>
                                    If you have any questions about this Privacy Policy, please
                                    contact us at{' '}
                                    <a
                                        href="mailto:privacy@calltree.ai"
                                        className="text-[#d42638] hover:underline"
                                    >
                                        privacy@calltree.ai
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
