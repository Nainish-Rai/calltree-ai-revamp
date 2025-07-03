'use client';

import { Card } from '@tremor/react';
import { motion, useScroll, useTransform } from 'framer-motion';
interface InsightCardProps {
    size?: 'normal' | 'small' | 'mini';
}
interface InsightData {
    quickWin: {
        title: string;
        description: string;
    };
    keyFinding: {
        title: string;
        description: string;
    };
}
const insightData: InsightData = {
    quickWin: {
        title: 'Quick Win',
        description:
            'Standardize data entry fields and implement single sign-on to reduce input time and authentication steps.',
    },
    keyFinding: {
        title: 'Key Finding',
        description:
            'Switching between OMS and DMS systems causes delays due to manual data transfer between applications.',
    },
};
export function InsightCard({ size = 'normal' }: InsightCardProps) {
    const { scrollY } = useScroll();
    const quickWinY = useTransform(scrollY, [0, 500], [0, 20]); // Subtle movement: 20px over 500px scroll
    const keyFindingY = useTransform(scrollY, [0, 500], [0, -20]); // Opposite direction

    const isSmall = size === 'small';
    const isMini = size === 'mini';
    return (
        <div className="relative flex justify-center items-center">
            {/* Quick Win Card */}
            <motion.div
                style={{
                    y: quickWinY,
                }}
            >
                <Card
                    className={`bg-white/50 backdrop-blur-xl border border-white/50 shadow-lg rounded-xl 
                    ${isMini ? 'p-3' : isSmall ? 'p-6' : 'p-8'}
                    w-[260px] relative z-10 -mr-4 transform -translate-y-3`}
                >
                    <div className="space-y-4">
                        <h3
                            className={`${isMini ? 'text-lg' : 'text-2xl'} font-medium text-forest-800`}
                        >
                            {insightData.quickWin.title}
                        </h3>
                        <p className={`${isMini ? 'text-sm' : 'text-base'} text-forest-600`}>
                            {insightData.quickWin.description}
                        </p>
                    </div>
                </Card>
            </motion.div>

            {/* Key Finding Card */}
            <motion.div
                style={{
                    y: keyFindingY,
                }}
            >
                <Card
                    className={`bg-white/50 backdrop-blur-xl border border-white/50 shadow-lg rounded-xl 
                    ${isMini ? 'p-3' : isSmall ? 'p-6' : 'p-8'}
                    w-[260px] relative z-0 -ml-4 transform translate-y-3`}
                >
                    <div className="space-y-4">
                        <h3
                            className={`${isMini ? 'text-lg' : 'text-2xl'} font-medium text-forest-800`}
                        >
                            {insightData.keyFinding.title}
                        </h3>
                        <p className={`${isMini ? 'text-sm' : 'text-base'} text-forest-600`}>
                            {insightData.keyFinding.description}
                        </p>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}
