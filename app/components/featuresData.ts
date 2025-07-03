export const featuresData = {
    aiAgents: {
        title: 'AI Agents that Work Exactly Like Your Human Agents',
        imageSrc: '/images/Track-Inefficiencies_1.svg',
        imageAlt: 'Track Inefficiencies',
        imageWidth: 640,
        imageHeight: 80,
        backgroundImage: 'url(/images/rWMu.png)',
        overlayImages: [
            {
                src: '/images/Track-Inefficiencies_1.svg',
                alt: 'Track Inefficiencies',
                width: 640,
                height: 80,
                className: 'absolute top-4 left-1/2 transform -translate-x-1/2',
            },
            {
                src: '/images/Track-Inefficiencies_2.svg',
                alt: 'Track Inefficiencies',
                width: 300,
                height: 60,
                className: 'absolute left-1/2 -translate-x-1/2 top-24 backdrop-blur-lg shadow-xl',
            },
        ],
        features: [
            {
                icon: 'ClipboardIcon',
                title: 'Use Your Existing Tools',
                description:
                    'Our AI agents effortlessly navigate your internal enterprise systems, following your processes and completing tasks exactly like your human agents—from CRMs to custom dashboards.',
            },
            {
                icon: 'MixerHorizontalIcon',
                title: 'Natural and Empathetic Conversations',
                description:
                    'Engage customers naturally by understanding context, emotions, and industry jargon, ensuring friendly and considerate support that makes customers feel heard and valued.',
            },
            {
                icon: 'TargetIcon',
                title: 'Clone Your Best Human Reps',
                description:
                    'Our AI agents learn directly from how your best agents handle customer issues—quickly picking up their approach, style, and processes to deliver the same exceptional service.',
            },
        ],
    },
    onboarding: {
        title: 'Onboarding as Simple as Hiring a Human Agent',
        imageSrc: '/images/Business-Case_1.svg',
        imageAlt: 'Build Business Case',
        imageWidth: 340,
        imageHeight: 80,
        backgroundImage: 'url(/images/V82b.png)',
        layout: 'image-left' as const,
        overlayImages: [
            {
                src: '/images/Business-Case_1.svg',
                alt: 'Build Business Case',
                width: 340,
                height: 80,
                className:
                    'absolute right-[60%] bottom-[70%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-2xl border border-white',
            },
            {
                src: '/images/Business-Case_2.svg',
                alt: 'Build Business Case',
                width: 340,
                height: 60,
                className:
                    'absolute right-[40%] top-[30%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-2xl border border-white',
            },
        ],
        features: [
            {
                icon: 'BarChartIcon',
                title: 'Instant Ramp-Up',
                description:
                    'AI agents learn by observing your human reps, quickly adapting to your processes and workflows. When ready, they seamlessly handle customer interactions and ramp up exactly like human employees.',
            },
            {
                icon: 'PieChartIcon',
                title: 'Seamless Human Handoff',
                description:
                    'If a conversation requires human intervention, Calltree automatically transfers it—providing full context and conversation history to your agents for fast, seamless handling.',
            },
            {
                icon: 'ListBulletIcon',
                title: 'Continuous Improvement',
                description:
                    'Our AI agents continually learn from every interaction, automatically improving performance, accuracy, and efficiency over time—without extra effort from your team.',
            },
        ],
    },
    security: {
        title: 'Secure, Compliant, and Enterprise-Ready',
        imageSrc: '/images/Cut-Costs.svg',
        imageAlt: 'Build Business Case',
        imageWidth: 440,
        imageHeight: 100,
        backgroundImage: 'url(/images/8swX.png)',
        features: [
            {
                icon: 'UpdateIcon',
                title: 'Robust Guardrails',
                description:
                    'Our AI agents strictly follow your business rules and compliance policies.',
            },
            {
                icon: 'GearIcon',
                title: 'Data Protection',
                description:
                    'Sensitive customer information remains secure, encrypted, and private.',
            },
            {
                icon: 'PersonIcon',
                title: 'Consistent and On-Brand',
                description:
                    "Our AI agents reliably represent your brand, providing only approved, accurate information—every interaction aligns with your organization's standards.",
            },
        ],
    },
    scalable: {
        title: 'Always-On, Scalable Coverage',
        imageSrc: '/images/Prove-Results_1.svg',
        imageAlt: 'Prove Results',
        imageWidth: 340,
        imageHeight: 80,
        backgroundImage: 'url(/images/2NVD.png)',
        layout: 'image-left' as const,
        overlayImages: [
            {
                src: '/images/Prove-Results_1.svg',
                alt: 'Prove Results',
                width: 340,
                height: 80,
                className:
                    'absolute right-[60%] bottom-[70%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-xl',
            },
            {
                src: '/images/Prove-Results_2.svg',
                alt: 'Prove Results',
                width: 340,
                height: 60,
                className:
                    'absolute right-[40%] top-[40%] translate-x-1/2 translate-y-1/2 backdrop-blur-lg shadow-xl rounded-xl',
            },
        ],
        features: [
            {
                icon: 'UpdateIcon',
                title: 'Instant Resolutions',
                description:
                    'Solve issues on the first contact, eliminating tedious IVR menus and long wait times.',
            },
            {
                icon: 'GearIcon',
                title: 'Elastic Support',
                description:
                    'Effortlessly handle fluctuations in call volume without hiring or scheduling additional resources.',
            },
            {
                icon: 'PersonIcon',
                title: 'Consistent Quality',
                description:
                    'Maintain high service standards even during unexpected demand spikes.',
            },
        ],
    },
};
