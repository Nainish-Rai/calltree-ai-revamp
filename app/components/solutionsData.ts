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
        videoSrc: 'https://videos.pexels.com/video-files/5527272/5527272-uhd_2560_1440_25fps.mp4',
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
        videoSrc: 'https://videos.pexels.com/video-files/7592012/7592012-hd_1920_1080_25fps.mp4',
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
        videoSrc: 'https://videos.pexels.com/video-files/5527272/5527272-uhd_2560_1440_25fps.mp4',
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
        videoSrc: 'https://videos.pexels.com/video-files/7592012/7592012-hd_1920_1080_25fps.mp4',
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

export const industriesData: Record<string, SolutionData> = {
    healthcare: {
        id: 'healthcare',
        title: 'Healthcare',
        subtitle: 'Streamline patient interactions with HIPAA-compliant AI agents.',
        videoSrc: 'https://videos.pexels.com/video-files/5527272/5527272-uhd_2560_1440_25fps.mp4',
        heroDescription:
            'Transform healthcare communication with AI agents that handle appointment scheduling, patient inquiries, and medical information requests while maintaining strict privacy compliance.',
        inActionTitle: 'Improve Patient Care',
        inActionDescription:
            'Reduce patient wait times by 40% and improve satisfaction scores with 24/7 AI agents that handle routine inquiries, appointment management, and basic health guidance.',
        inActionImage: 'https://images.pexels.com/photos/18069423/pexels-photo-18069423.png',
        ctaTitle: 'Ready to Transform Healthcare Communication?',
        ctaDescription:
            'Discover how Calltree AI can help healthcare providers deliver better patient experiences while reducing operational costs.',
        features: {
            primary: 'customerCareSupport',
            secondary: 'customerCareAnalytics',
        },
    },
    'financial-services': {
        id: 'financial-services',
        title: 'Financial Services',
        subtitle: 'Secure, compliant AI agents for banking and financial institutions.',
        videoSrc: 'https://videos.pexels.com/video-files/7592012/7592012-hd_1920_1080_25fps.mp4',
        heroDescription:
            'Enhance financial services with AI agents that handle account inquiries, loan applications, and investment guidance while maintaining regulatory compliance and security.',
        inActionTitle: 'Secure Banking',
        inActionDescription:
            'Process customer inquiries 3x faster with AI agents trained on financial regulations, product knowledge, and security protocols for safe, efficient service.',
        inActionImage: 'https://images.pexels.com/photos/7204240/pexels-photo-7204240.jpeg',
        ctaTitle: 'Ready to Modernize Financial Services?',
        ctaDescription:
            'Learn how Calltree AI can help financial institutions deliver exceptional customer service while maintaining security and compliance.',
        features: {
            primary: 'technicalDiagnostics',
            secondary: 'technicalEscalation',
        },
    },
    'e-commerce': {
        id: 'e-commerce',
        title: 'E-commerce',
        subtitle: 'Boost sales and customer satisfaction with shopping AI agents.',
        videoSrc: 'https://videos.pexels.com/video-files/5527272/5527272-uhd_2560_1440_25fps.mp4',
        heroDescription:
            'Increase conversion rates with AI agents that provide personalized product recommendations, handle order inquiries, and guide customers through the purchasing process.',
        inActionTitle: 'Drive Sales',
        inActionDescription:
            'Increase average order value by 25% and reduce cart abandonment with AI agents that offer personalized recommendations and real-time shopping assistance.',
        inActionImage: 'https://images.pexels.com/photos/5593336/pexels-photo-5593336.jpeg',
        ctaTitle: 'Ready to Supercharge Your E-commerce?',
        ctaDescription:
            'Explore how Calltree AI can transform your online store into a high-converting, customer-centric shopping experience.',
        features: {
            primary: 'revenueOpportunities',
            secondary: 'revenueAnalytics',
        },
    },
    telecommunications: {
        id: 'telecommunications',
        title: 'Telecommunications',
        subtitle: 'Scale customer support for telecom with intelligent AI solutions.',
        videoSrc: 'https://videos.pexels.com/video-files/7592012/7592012-hd_1920_1080_25fps.mp4',
        heroDescription:
            'Handle high-volume customer interactions with AI agents specialized in telecom services, billing inquiries, technical troubleshooting, and service upgrades.',
        inActionTitle: 'Scale Operations',
        inActionDescription:
            'Manage 10x more customer interactions with AI agents that understand complex telecom products, billing structures, and technical issues for faster resolution.',
        inActionImage: 'https://images.pexels.com/photos/17485678/pexels-photo-17485678.png',
        ctaTitle: 'Ready to Scale Your Telecom Operations?',
        ctaDescription:
            'See how Calltree AI can help telecommunications companies deliver superior customer service at scale.',
        features: {
            primary: 'analyticsInsights',
            secondary: 'consultingOptimization',
        },
    },
};

export const industriesMenuItems = [
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'financial-services', label: 'Financial Services' },
    { id: 'e-commerce', label: 'E-commerce' },
    { id: 'telecommunications', label: 'Telecommunications' },
];
