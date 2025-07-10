import { featuresData } from './featuresData';

export interface SolutionData {
    id: string;
    title: string;
    subtitle: string;
    videoSrc: string;
    heroDescription: string;
    inActionTitle: string;
    inActionDescription: string;
    inActionImage: string;
    ctaTitle: string;
    ctaDescription: string;
    features: {
        primary: keyof typeof featuresData;
        secondary: keyof typeof featuresData;
    };
}

export const solutionsData: Record<string, SolutionData> = {
    'customer-care': {
        id: 'customer-care',
        title: 'Customer Care',
        subtitle: 'Boost conversion and brand loyalty with your trusted AI agent.',
        videoSrc:
            'https://sierra.ai/-/cdn/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F6dc1cdcd1115c2fad7d226cccaf1d9acce0dbfac.mp4#t=0.001',
        heroDescription:
            'Transform your customer service with AI-powered agents that understand context, resolve issues faster, and create lasting customer relationships.',
        inActionTitle: 'Boost Conversion',
        inActionDescription:
            'Boost conversion and brand loyalty with your trusted AI agent. Calltree AI is a cutting-edge technology for workflow analytics and cost impact analysis.',
        inActionImage: 'https://images.pexels.com/photos/18069423/pexels-photo-18069423.png',
        ctaTitle: 'Ready to Scale Your Contact Center with AI Agents?',
        ctaDescription:
            'Find out how Calltree can help your business build better, more human customer experiences with AI.',
        features: {
            primary: 'customerCareSupport',
            secondary: 'customerCareAnalytics',
        },
    },
    'technical-support': {
        id: 'technical-support',
        title: 'Technical Support',
        subtitle: 'Resolve complex technical issues with intelligent AI-powered support.',
        videoSrc:
            'https://sierra.ai/-/cdn/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F6dc1cdcd1115c2fad7d226cccaf1d9acce0dbfac.mp4#t=0.001',
        heroDescription:
            'Empower your technical support team with AI agents that can diagnose issues, provide step-by-step solutions, and escalate complex problems intelligently.',
        inActionTitle: 'Faster Resolution',
        inActionDescription:
            'Reduce ticket resolution time by 60% with AI agents that understand technical documentation, product specifications, and common troubleshooting workflows.',
        inActionImage: 'https://images.pexels.com/photos/7204240/pexels-photo-7204240.jpeg',
        ctaTitle: 'Ready to Transform Your Technical Support?',
        ctaDescription:
            'Discover how Calltree AI can help your team resolve technical issues faster and more efficiently.',
        features: {
            primary: 'technicalDiagnostics',
            secondary: 'technicalEscalation',
        },
    },
    'revenue-generation': {
        id: 'revenue-generation',
        title: 'Revenue Generation',
        subtitle: 'Turn every interaction into a revenue opportunity with smart AI.',
        videoSrc:
            'https://sierra.ai/-/cdn/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F12ad68c49a353ec77f0ea6112c9e888f23de5df7.mp4#t=0.001',
        heroDescription:
            'Maximize revenue potential with AI agents that identify upsell opportunities, personalize recommendations, and guide customers through the sales funnel.',
        inActionTitle: 'Increase Revenue',
        inActionDescription:
            'Drive up to 35% more revenue per customer interaction with AI agents that understand purchasing behavior, identify cross-sell opportunities, and personalize offers.',
        inActionImage: 'https://images.pexels.com/photos/5593336/pexels-photo-5593336.jpeg',
        ctaTitle: 'Ready to Boost Your Revenue with AI?',
        ctaDescription:
            'Learn how Calltree AI can help you turn every customer interaction into a revenue opportunity.',
        features: {
            primary: 'revenueOpportunities',
            secondary: 'revenueAnalytics',
        },
    },
    'consulting-analytics': {
        id: 'consulting-analytics',
        title: 'Consulting Analytics',
        subtitle: 'Make data-driven decisions with comprehensive workflow analytics.',
        videoSrc:
            'https://sierra.ai/-/cdn/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2F12ad68c49a353ec77f0ea6112c9e888f23de5df7.mp4#t=0.001',
        heroDescription:
            'Unlock actionable insights from your customer interactions with advanced analytics that reveal patterns, inefficiencies, and opportunities for improvement.',
        inActionTitle: 'Strategic Insights',
        inActionDescription:
            'Transform raw interaction data into strategic business insights with AI-powered analytics that identify trends, predict outcomes, and optimize performance.',
        inActionImage: 'https://images.pexels.com/photos/17485678/pexels-photo-17485678.png',
        ctaTitle: "Ready to Unlock Your Data's Potential?",
        ctaDescription:
            'Discover how Calltree AI analytics can provide the insights you need to make informed business decisions.',
        features: {
            primary: 'analyticsInsights',
            secondary: 'consultingOptimization',
        },
    },
};

export const solutionsMenuItems = [
    { id: 'customer-care', label: 'Customer Care' },
    { id: 'technical-support', label: 'Technical Support' },
    { id: 'revenue-generation', label: 'Revenue Generation' },
    { id: 'consulting-analytics', label: 'Consulting Analytics' },
];
