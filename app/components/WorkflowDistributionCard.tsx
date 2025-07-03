import { Card, BarChart } from '@tremor/react';
interface WorkflowDistributionCardProps {
    size?: 'normal' | 'small' | 'mini';
}
const chartData = [
    {
        workflow: 'Check Delivery Management',
        duration: 74826,
    },
    {
        workflow: 'Gather Order Info',
        duration: 61007,
    },
    {
        workflow: 'Identify Customer',
        duration: 55257,
    },
    {
        workflow: 'Process Refund',
        duration: 49313,
    },
    {
        workflow: 'Authenticate Customer',
        duration: 46943,
    },
    {
        workflow: 'Open Support Ticket',
        duration: 46755,
    },
];

export function WorkflowDistributionCard({ size = 'normal' }: WorkflowDistributionCardProps) {
    const isSmall = size === 'small';
    return (
        <Card
            className={`bg-white ${size === 'mini' ? 'p-[16px]' : size === 'small' ? 'p-[24px]' : 'p-[38px]'} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-shadow duration-300`}
        >
            <h3
                className={`${size === 'mini' ? 'text-sm' : size === 'small' ? 'text-base' : 'text-xl'} font-medium mb-2`}
            >
                Workflow Distribution
            </h3>
            {size !== 'mini' && (
                <p className={`text-forest-600 ${size === 'small' ? 'text-sm mb-4' : 'mb-6'}`}>
                    Total time spent on each workflow type (in seconds)
                </p>
            )}

            <div className="relative">
                <BarChart
                    className={`${size === 'mini' ? 'h-32' : size === 'small' ? 'h-32' : 'h-64'} mt-4`}
                    data={size === 'mini' ? chartData.slice(0, 5) : chartData}
                    index="workflow"
                    categories={['duration']}
                    colors={['forest-200']}
                    valueFormatter={(value) => `${value}s`}
                    layout="vertical"
                    showGridLines={false}
                    showLegend={false}
                    showXAxis={false}
                    showYAxis={false}
                    startEndOnly={true}
                    showAnimation={false}
                    enableLegendSlider={false}
                />

                <div
                    className="absolute inset-0 flex flex-col justify-between"
                    style={{
                        marginTop: '12px',
                        marginBottom: '12px',
                        paddingLeft: '4px',
                        height: 'calc(100% - 24px)',
                    }}
                >
                    {(size === 'mini' ? chartData.slice(0, 5) : chartData).map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center ${size === 'mini' ? 'h-[28px] text-xs' : 'h-[36px] text-sm'}`}
                            style={{
                                color: '#374151',
                            }}
                        >
                            <span className="z-10 pl-2">{item.workflow}</span>
                            <span className="pr-2">{item.duration}s</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
