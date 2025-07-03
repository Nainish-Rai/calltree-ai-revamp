'use client';

import { Card, DonutChart } from '@tremor/react';
interface ApplicationUsageCardProps {
    size?: 'normal' | 'small' | 'mini';
}
interface UsageData {
    application: string;
    usage: number;
}
const chartData: UsageData[] = [
    {
        application: 'Doordash OMS',
        usage: 61.5,
    },
    {
        application: 'Chrome',
        usage: 26.1,
    },
    {
        application: 'Doordash DMS',
        usage: 8.3,
    },
    {
        application: 'Doordash Support Knowledge Base',
        usage: 1.4,
    },
    {
        application: 'Doordash Promo Tool',
        usage: 1.0,
    },
    {
        application: 'Outlook',
        usage: 0.7,
    },
];

export function ApplicationUsageCard({ size = 'normal' }: ApplicationUsageCardProps) {
    const isSmall = size === 'small';
    const isMini = size === 'mini';

    // For mini size, only show top 3 applications
    const displayData = isMini ? chartData.slice(0, 3) : chartData;
    return (
        <Card
            className={`bg-transparent ${isMini ? 'p-2 w-full' : isSmall ? 'p-[24px]' : 'p-[38px]'} shadow-none`}
        >
            <h3
                className={`${isMini ? 'text-[14px]' : isSmall ? 'text-base' : 'text-xl'} font-medium mb-1 text-gray-800`}
            >
                Application Usage
            </h3>

            <div className={isMini ? 'mt-1' : 'mt-4'}>
                <DonutChart
                    data={displayData}
                    category="usage"
                    index="application"
                    variant="donut"
                    valueFormatter={(value) => `${value}%`}
                    colors={[
                        'forest-500',
                        'forest-400',
                        'forest-300',
                        'forest-200',
                        'forest-100',
                        'forest-50',
                    ]}
                    showAnimation={false}
                    showTooltip={false}
                    showLabel={false}
                    className={`${isMini ? 'h-32' : isSmall ? 'h-48' : 'h-64'} mt-1`}
                />
            </div>

            <div className={`${isMini ? 'mt-1' : isSmall ? 'mt-4' : 'mt-6'} space-y-1`}>
                {displayData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-gray-800">
                        <div className="flex items-center gap-1">
                            <div
                                style={{
                                    backgroundColor:
                                        index === 0
                                            ? '#436552'
                                            : index === 1
                                              ? '#4f7861'
                                              : '#5c8b71',
                                }}
                                className={`${isMini ? 'w-1.5 h-1.5' : 'w-2.5 h-2.5'} rounded-full flex-shrink-0`}
                            />

                            <span
                                className={`${isMini ? 'text-[12px]' : isSmall ? 'text-sm' : 'text-base'}`}
                            >
                                {item.application}
                            </span>
                        </div>
                        <span
                            className={`${isMini ? 'text-[12px]' : isSmall ? 'text-sm' : 'text-base'} font-medium`}
                        >
                            {item.usage}%
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
