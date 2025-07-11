'use client';

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function CookiesPage() {
    return (
        <div className="w-full min-h-screen bg-[#F9F9F7] text-[#252525] overscroll-behavior-y-contain">
            <Navigation />

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-[128px]">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#252525] mb-8">
                        Cookie Policy
                    </h1>
                    <p className="text-lg text-[#575757] max-w-2xl mx-auto leading-relaxed">
                        This policy explains how we use cookies and similar technologies on our
                        website and services.
                    </p>
                    <div className="mt-6 text-sm text-[#575757]">Last updated: July 11, 2025</div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                What Are Cookies
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    Cookies are small text files that are stored on your device when
                                    you visit our website. They help us provide you with a better
                                    experience by remembering your preferences and understanding how
                                    you use our services.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Types of Cookies We Use
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-6">
                                <div>
                                    <h3 className="text-xl font-medium text-[#252525] mb-3">
                                        Essential Cookies
                                    </h3>
                                    <p>
                                        These cookies are necessary for our website to function
                                        properly. They enable core functionality such as security,
                                        network management, and accessibility.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-[#252525] mb-3">
                                        Performance Cookies
                                    </h3>
                                    <p>
                                        These cookies collect information about how you use our
                                        website, such as which pages you visit most often. This data
                                        helps us improve our website&apos;s performance and user
                                        experience.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-[#252525] mb-3">
                                        Functional Cookies
                                    </h3>
                                    <p>
                                        These cookies remember choices you make and provide
                                        enhanced, more personal features. They may be set by us or
                                        by third-party providers whose services we have added to our
                                        pages.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium text-[#252525] mb-3">
                                        Targeting Cookies
                                    </h3>
                                    <p>
                                        These cookies are used to deliver advertisements more
                                        relevant to you and your interests. They are also used to
                                        limit the number of times you see an advertisement and
                                        measure the effectiveness of advertising campaigns.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Third-Party Cookies
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    We may use third-party services that set cookies on our website,
                                    including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Google Analytics for website analytics and performance
                                        measurement
                                    </li>
                                    <li>Marketing platforms for advertising and remarketing</li>
                                    <li>Customer support tools for chat and help functionality</li>
                                    <li>
                                        Social media platforms for content sharing and social login
                                    </li>
                                </ul>
                                <p>
                                    These third parties have their own privacy policies and cookie
                                    practices. We recommend reviewing their policies to understand
                                    how they use your information.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Managing Cookies
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>You can control and manage cookies in several ways:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        Browser settings: Most browsers allow you to control cookies
                                        through their settings
                                    </li>
                                    <li>
                                        Cookie preference center: Use our cookie preference center
                                        when available
                                    </li>
                                    <li>
                                        Opt-out tools: Use industry opt-out tools for advertising
                                        cookies
                                    </li>
                                    <li>
                                        Third-party settings: Manage cookies directly with
                                        third-party services
                                    </li>
                                </ul>
                                <p>
                                    Please note that disabling certain cookies may impact the
                                    functionality of our website and your user experience.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Cookie Retention
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    Cookies have different retention periods depending on their
                                    purpose:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Session cookies:</strong> Deleted when you close
                                        your browser
                                    </li>
                                    <li>
                                        <strong>Persistent cookies:</strong> Remain on your device
                                        for a set period or until manually deleted
                                    </li>
                                    <li>
                                        <strong>Third-party cookies:</strong> Managed according to
                                        the third party&apos;s retention policy
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">
                                Updates to This Policy
                            </h2>
                            <div className="text-[#575757] leading-relaxed space-y-4">
                                <p>
                                    We may update this Cookie Policy from time to time to reflect
                                    changes in our practices or for other operational, legal, or
                                    regulatory reasons. We encourage you to review this policy
                                    periodically for any updates.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-medium text-[#252525] mb-6">Contact Us</h2>
                            <div className="text-[#575757] leading-relaxed">
                                <p>
                                    If you have any questions about our use of cookies, please
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
