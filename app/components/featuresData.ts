export const featuresData = {
    scalable: {
        id: 'features',
        headline: 'Always-On, Scalable Coverage',
        description:
            'Provide instant, high-quality support to every customer, anywhere in the world, without any limitations.',
        layout: 'two-column-visual-left' as const,
        visualContent: {
            type: 'animated-map' as const,
            imageSrc: '/images/2NVD.png',
            videoSrc: '/videos/v3.mp4',
            caption: 'Global coverage with instant support across all time zones',
        },
        featureGrid: [
            {
                icon: 'refresh-cw',
                title: 'Instant Resolutions',
                description:
                    'Solve issues on the first contact, eliminating tedious IVR menus and long wait times.',
            },
            {
                icon: 'settings',
                title: 'Elastic Support',
                description:
                    'Effortlessly handle fluctuations in call volume without hiring or scheduling additional resources.',
            },
            {
                icon: 'user-check',
                title: 'Consistent Quality',
                description:
                    'Maintain high service standards even during unexpected demand spikes.',
            },
        ],
    },
    onboarding: {
        id: 'onboarding',
        headline: 'Onboarding as Simple as Hiring a Human Agent',
        description: 'Our AI agents learn from your existing processes and best-performing humans.',
        layout: 'two-column-visual-right' as const,
        visualContent: {
            type: 'ui-mockup' as const,
            imageSrc: '/images/V82b.png',
            videoSrc: '/videos/v5.mp4',
            caption:
                "A clean UI showing a knowledge base being imported and an agent's performance metrics.",
        },
        featureGrid: [
            {
                icon: 'bar-chart-2',
                title: 'Instant Ramp-Up',
                description:
                    'AI agents learn by observing your human reps, quickly adapting to your processes and workflows.',
            },
            {
                icon: 'clock',
                title: 'Seamless Human Handoff',
                description:
                    'If a conversation requires human intervention, Calltree automatically transfers it—providing full context.',
            },
            {
                icon: 'list',
                title: 'Continuous Improvement',
                description:
                    'Our AI agents continually learn from every interaction, automatically improving performance and efficiency.',
            },
        ],
    },
    security: {
        id: 'security',
        headline: 'Secure, Compliant, and Enterprise-Ready',
        description:
            "Built with enterprise-grade security at its core, Calltree ensures every interaction is private, protected, and aligned with your brand's standards.",
        layout: 'two-column-visual-left' as const,
        theme: 'light' as const,
        visualContent: {
            type: 'abstract-graphic' as const,
            imageSrc: '/images/8swX.png',
            videoSrc: '/videos/v4.mp4',
            caption: 'Enterprise-grade security infrastructure',
        },
        featureGrid: [
            {
                icon: 'shield',
                title: 'Robust Guardrails',
                description:
                    'Our AI agents strictly follow your business rules and compliance policies.',
            },
            {
                icon: 'lock',
                title: 'Data Protection',
                description:
                    'Sensitive customer information remains secure, encrypted, and private.',
            },
            {
                icon: 'user-check',
                title: 'Consistent and On-Brand',
                description:
                    'Our AI agents reliably represent your brand, providing only approved, accurate information.',
            },
        ],
    },
};
