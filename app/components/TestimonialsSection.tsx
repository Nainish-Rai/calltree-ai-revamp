import { ArrowRightIcon } from 'lucide-react';
import React from 'react';

const TestimonialsSection = () => {
    return (
        <div className="mb-[120px] max-w-7xl mx-auto">
            <div className="flex max-sm:px-6 justify-between items-center mb-12">
                <h2 className="text-3xl lg:text-4xl text-[#252525] font-normal">Our customers</h2>
                <button className="inline-flex items-center text-[#575757] hover:text-[#252525] transition-colors">
                    Read more
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] h-[400px] flex flex-col justify-between">
                    <div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#252525] mb-2">CLEAR</h3>
                        </div>
                        <p className="text-[#575757] leading-relaxed mb-6">
                            &quot;Calltree AI gives us back time. Our support team is now focused on
                            more complex, meaningful conversations. If a member wants to speak to a
                            human, that&apos;s always an option. This is about augmentation, not
                            elimination. &quot;
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-[#252525]">Adam Luebbers</p>
                        <p className="text-sm text-[#575757]">VP, Member Experience, Clear</p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] h-[400px] flex flex-col justify-between">
                    <div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#252525] mb-2">Casper</h3>
                        </div>
                        <p className="text-[#575757] leading-relaxed mb-6">
                            &ldquo;Our service has fundamentally changed. With the AI agent, we
                            effectively have 24/7 availability and engage in any
                            language&mdash;something we couldn&apos;t do before.&rdquo;
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-[#252525]">Marc Butakis</p>
                        <p className="text-sm text-[#575757]">VP of Operations, Casper</p>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E5E5E3] h-[400px] flex flex-col justify-between">
                    <div>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#252525] mb-2">minted.</h3>
                        </div>
                        <p className="text-[#575757] leading-relaxed mb-6">
                            &quot;Our customers rely on Calltree AI for some of the most personal
                            moments of their lives. It&apos;s critical that our AI agent not only
                            provides accurate information but also does so in a way that reflects
                            our care for each customer&apos;s unique needs.&quot;
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-[#252525]">Anissa Gomez</p>
                        <p className="text-sm text-[#575757]">Quality Specialist, Minted</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
