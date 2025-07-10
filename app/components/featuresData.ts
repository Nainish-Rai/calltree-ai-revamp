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
                icon: 'RotateCcw',
                title: 'Instant Resolutions',
                description:
                    'Solve issues on the first contact, eliminating tedious IVR menus and long wait times.',
            },
            {
                icon: 'Settings',
                title: 'Elastic Support',
                description:
                    'Effortlessly handle fluctuations in call volume without hiring or scheduling additional resources.',
            },
            {
                icon: 'UserCheck',
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
                icon: 'BarChart2',
                title: 'Instant Ramp-Up',
                description:
                    'AI agents learn by observing your human reps, quickly adapting to your processes and workflows.',
            },
            {
                icon: 'Clock',
                title: 'Seamless Human Handoff',
                description:
                    'If a conversation requires human intervention, Calltree automatically transfers it—providing full context.',
            },
            {
                icon: 'List',
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
                icon: 'Shield',
                title: 'Robust Guardrails',
                description:
                    'Our AI agents strictly follow your business rules and compliance policies.',
            },
            {
                icon: 'Lock',
                title: 'Data Protection',
                description:
                    'Sensitive customer information remains secure, encrypted, and private.',
            },
            {
                icon: 'UserCheck',
                title: 'Consistent and On-Brand',
                description:
                    'Our AI agents reliably represent your brand, providing only approved, accurate information.',
            },
        ],
    },
    createCustomerForLife: {
        id: 'create-customer-for-life',
        headline: 'Create a Customer for Life',
        description:
            'Unlock cost savings and optimize your business with Calltree AI, a cutting-edge technology for workflow analytics and cost impact analysis.',
        layout: 'two-column-visual-right' as const,
        visualContent: {
            type: 'abstract-graphic' as const,
            imageSrc: 'https://images.pexels.com/photos/7658430/pexels-photo-7658430.jpeg',
        },
        featureGrid: [
            {
                icon: 'Shield',
                title: 'Robust Guardrails',
                description:
                    'Our AI agents strictly follow your business rules and compliance policies.',
            },
            {
                icon: 'Lock',
                title: 'Data Protection',
                description:
                    'Sensitive customer information remains secure, encrypted, and private.',
            },
            {
                icon: 'UserCheck',
                title: 'Consistent and On-Brand',
                description:
                    'Our AI agents reliably represent your brand, providing only approved, accurate information.',
            },
        ],
    },
    createCustomerForLifeTwo: {
        id: 'create-customer-for-life',
        headline: 'Create a Customer for Life',
        description:
            'Unlock cost savings and optimize your business with Calltree AI, a cutting-edge technology for workflow analytics and cost impact analysis.',
        layout: 'two-column-visual-right' as const,
        visualContent: {
            type: 'abstract-graphic' as const,
            imageSrc: 'https://images.pexels.com/photos/6502999/pexels-photo-6502999.jpeg',
        },
        featureGrid: [
            {
                icon: 'Shield',
                title: 'Robust Guardrails',
                description:
                    'Our AI agents strictly follow your business rules and compliance policies.',
            },
            {
                icon: 'Lock',
                title: 'Data Protection',
                description:
                    'Sensitive customer information remains secure, encrypted, and private.',
            },
            {
                icon: 'UserCheck',
                title: 'Consistent and On-Brand',
                description:
                    'Our AI agents reliably represent your brand, providing only approved, accurate information.',
            },
        ],
    },
    // Customer Care specific features
    customerCareSupport: {
        id: 'customer-care-support',
        headline: 'Exceptional Customer Care Experience',
        description:
            'Deliver personalized, empathetic customer service that builds trust and loyalty through intelligent AI agents.',
        layout: 'two-column-visual-left' as const,
        visualContent: {
            type: 'ui-mockup' as const,
            imageSrc: 'https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg',
            // videoSrc: '/videos/v1.mp4',
            caption: 'AI-powered customer care dashboard showing real-time interactions',
        },
        featureGrid: [
            {
                icon: 'Heart',
                title: 'Empathetic Responses',
                description:
                    'AI agents understand customer emotions and respond with appropriate empathy and care.',
            },
            {
                icon: 'Clock',
                title: '24/7 Availability',
                description:
                    'Provide round-the-clock support without compromising on quality or response time.',
            },
            {
                icon: 'Users',
                title: 'Personalized Service',
                description:
                    'Tailor interactions based on customer history, preferences, and behavior patterns.',
            },
        ],
    },
    customerCareAnalytics: {
        id: 'customer-care-analytics',
        headline: 'Customer Satisfaction Analytics',
        description:
            'Monitor and improve customer satisfaction with detailed analytics and actionable insights.',
        layout: 'two-column-visual-right' as const,
        visualContent: {
            type: 'abstract-graphic' as const,
            imageSrc: 'https://images.pexels.com/photos/5453854/pexels-photo-5453854.jpeg',
        },
        featureGrid: [
            {
                icon: 'BarChart2',
                title: 'CSAT Tracking',
                description:
                    'Real-time customer satisfaction monitoring with detailed sentiment analysis.',
            },
            {
                icon: 'TrendingUp',
                title: 'Performance Metrics',
                description:
                    'Track key performance indicators like resolution time, first-call resolution, and customer retention.',
            },
            {
                icon: 'AlertCircle',
                title: 'Issue Prevention',
                description:
                    'Identify common issues before they escalate and implement proactive solutions.',
            },
        ],
    },
    // Technical Support specific features
    technicalDiagnostics: {
        id: 'technical-diagnostics',
        headline: 'Advanced Technical Diagnostics',
        description:
            'Leverage AI-powered diagnostics to quickly identify and resolve complex technical issues.',
        layout: 'two-column-visual-left' as const,
        visualContent: {
            type: 'ui-mockup' as const,
            imageSrc: 'https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg',
            // videoSrc: '/videos/v2.mp4',
            caption:
                'Technical diagnostic interface showing system analysis and troubleshooting steps',
        },
        featureGrid: [
            {
                icon: 'Cpu',
                title: 'System Analysis',
                description:
                    'Automatically analyze system logs, configurations, and performance metrics.',
            },
            {
                icon: 'Wrench',
                title: 'Automated Troubleshooting',
                description:
                    'Guide customers through step-by-step solutions based on diagnostic results.',
            },
            {
                icon: 'Book',
                title: 'Knowledge Base Integration',
                description:
                    'Access comprehensive technical documentation and solution databases instantly.',
            },
        ],
    },
    technicalEscalation: {
        id: 'technical-escalation',
        headline: 'Intelligent Issue Escalation',
        description:
            'Smart escalation management that routes complex issues to the right technical experts.',
        layout: 'two-column-visual-right' as const,
        visualContent: {
            type: 'abstract-graphic' as const,
            imageSrc: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
        },
        featureGrid: [
            {
                icon: 'ArrowUpRight',
                title: 'Smart Routing',
                description:
                    'Automatically route issues to specialists based on complexity and expertise required.',
            },
            {
                icon: 'FileText',
                title: 'Context Preservation',
                description:
                    'Maintain complete interaction history and diagnostic data during escalation.',
            },
            {
                icon: 'Clock',
                title: 'SLA Management',
                description:
                    'Monitor and ensure compliance with service level agreements and response times.',
            },
        ],
    },
    // Revenue Generation specific features
    revenueOpportunities: {
        id: 'revenue-opportunities',
        headline: 'Intelligent Revenue Opportunities',
        description:
            'Identify and capitalize on upselling and cross-selling opportunities during every customer interaction.',
        layout: 'two-column-visual-left' as const,
        visualContent: {
            type: 'ui-mockup' as const,
            imageSrc: 'https://images.pexels.com/photos/5453854/pexels-photo-5453854.jpeg',
            // videoSrc: '/videos/v3.mp4',
            caption: 'Revenue opportunity dashboard showing personalized product recommendations',
        },
        featureGrid: [
            {
                icon: 'Target',
                title: 'Smart Recommendations',
                description:
                    'AI-powered product recommendations based on customer behavior and purchase history.',
            },
            {
                icon: 'DollarSign',
                title: 'Upsell Automation',
                description:
                    'Automatically identify and present relevant upgrade opportunities at the right moment.',
            },
            {
                icon: 'ShoppingCart',
                title: 'Cross-sell Intelligence',
                description:
                    'Suggest complementary products and services that enhance customer value.',
            },
        ],
    },
    revenueAnalytics: {
        id: 'revenue-analytics',
        headline: 'Revenue Performance Analytics',
        description:
            'Track and optimize revenue generation with comprehensive analytics and performance metrics.',
        layout: 'two-column-visual-right' as const,
        visualContent: {
            type: 'abstract-graphic' as const,
            imageSrc: 'https://images.pexels.com/photos/6476256/pexels-photo-6476256.jpeg',
        },
        featureGrid: [
            {
                icon: 'TrendingUp',
                title: 'Revenue Tracking',
                description:
                    'Monitor revenue per interaction, conversion rates, and average deal size.',
            },
            {
                icon: 'PieChart',
                title: 'Customer Lifetime Value',
                description:
                    'Calculate and optimize customer lifetime value through strategic interactions.',
            },
            {
                icon: 'BarChart3',
                title: 'Performance Benchmarking',
                description:
                    'Compare revenue performance against industry standards and historical data.',
            },
        ],
    },
    // Consulting Analytics specific features
    analyticsInsights: {
        id: 'analytics-insights',
        headline: 'Deep Business Analytics',
        description:
            'Transform customer interaction data into actionable business insights and strategic recommendations.',
        layout: 'two-column-visual-left' as const,
        visualContent: {
            type: 'ui-mockup' as const,
            imageSrc: 'https://images.pexels.com/photos/5702413/pexels-photo-5702413.jpeg',
            // videoSrc: '/videos/v4.mp4',
            caption: 'Advanced analytics dashboard showing business insights and trend analysis',
        },
        featureGrid: [
            {
                icon: 'Activity',
                title: 'Workflow Analysis',
                description:
                    'Analyze customer journey patterns and identify bottlenecks in your processes.',
            },
            {
                icon: 'Eye',
                title: 'Predictive Analytics',
                description:
                    'Forecast customer behavior and business trends using advanced machine learning.',
            },
            {
                icon: 'Lightbulb',
                title: 'Strategic Recommendations',
                description:
                    'Receive AI-generated recommendations for process improvements and optimization.',
            },
        ],
    },
    consultingOptimization: {
        id: 'consulting-optimization',
        headline: 'Business Process Optimization',
        description:
            'Optimize operations with data-driven insights that reduce costs and improve efficiency.',
        layout: 'two-column-visual-right' as const,
        visualContent: {
            type: 'abstract-graphic' as const,
            imageSrc: 'https://images.pexels.com/photos/17485633/pexels-photo-17485633.png',
        },
        featureGrid: [
            {
                icon: 'Settings',
                title: 'Process Automation',
                description:
                    'Identify and implement automation opportunities to streamline operations.',
            },
            {
                icon: 'Minimize2',
                title: 'Cost Reduction',
                description:
                    'Pinpoint inefficiencies and implement cost-saving measures across your organization.',
            },
            {
                icon: 'Zap',
                title: 'Performance Optimization',
                description:
                    'Continuously monitor and optimize key performance indicators for maximum efficiency.',
            },
        ],
    },
};
