'use client';
import { CTABanner } from '@/app/components/CTABanner';
import { featuresData } from '@/app/components/featuresData';
import { Footer } from '@/app/components/Footer';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import { SolutionsFeatureSection } from '@/components/solutions-feature';
import SolutionsHero from '@/components/solutions-hero';
import SolutionsInAction from '@/components/solutions-inAction';
import { industriesData, solutionsData } from '@/app/components/solutionsData';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: {
        id: string;
    };
};

function IndustriesPage({ params }: Props) {
    const solutionData = industriesData[params.id];

    // If the solution doesn't exist, show 404
    if (!solutionData) {
        notFound();
    }

    return (
        <div>
            <SolutionsHero
                title={solutionData.title}
                subtitle={solutionData.subtitle}
                videoSrc={solutionData.videoSrc}
            />
            <SolutionsFeatureSection {...featuresData[solutionData.features.primary]} />
            <SolutionsInAction
                title={solutionData.inActionTitle}
                description={solutionData.inActionDescription}
                cta="Get Started"
                image={solutionData.inActionImage}
            />
            <SolutionsFeatureSection {...featuresData[solutionData.features.secondary]} />
            <TestimonialsSection />
            <CTABanner
                title={solutionData.ctaTitle}
                description={solutionData.ctaDescription}
                buttonText="Book a Meeting"
                buttonHref="/learn-more"
            />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default IndustriesPage;
