import { Card, BarChart } from '@tremor/react';
interface SupportTicketCardProps {
    size?: 'normal' | 'small';
}
interface SupportTicketAction {
    title: string;
    Duration: string;
    details: string;
    app: string;
}
interface ChartData {
    action: string;
    Duration: number;
    details: string;
}
const chartData: ChartData[] = [
    {
        action: 'Select Issue Category',
        Duration: 20,
        details: 'Choosing the appropriate category for quality complaints.',
    },
    {
        action: 'Input Issue Description',
        Duration: 40,
        details: 'Typing details about the incorrect delivery.',
    },
    {
        action: 'Click Create Ticket',
        Duration: 20,
        details: 'Submitting the ticket for future reference and customer tracking.',
    },
];

const actionsList: SupportTicketAction[] = chartData.map((item) => ({
    title: item.action,
    Duration: `${item.Duration.toLocaleString()}.0s`,
    details: item.details,
    app: 'Application: Chrome',
}));
export function SupportTicketCard({ size = 'normal' }: SupportTicketCardProps) {
    const isSmall = size === 'small';
    return (
        <Card className={`bg-transparent ${isSmall ? 'p-[12px]' : 'p-[38px]'} shadow-none`}>
            <h3 className={`${isSmall ? 'text-base' : 'text-xl'} font-medium mb-2 text-gray-800`}>
                Open Support Ticket
            </h3>
            <p className={`text-forest-600 ${isSmall ? 'text-sm mb-4 hidden' : 'mb-6'}`}>
                Raising a support ticket for further investigation and future reference.
            </p>

            <div className="flex items-center justify-between mb-4 p-1 bg-gray-50/50 rounded-md">
                <span className={`text-forest-700 font-medium ${isSmall ? 'text-sm' : ''}`}>
                    Total Duration
                </span>
                <span className={`text-forest-700 font-medium ${isSmall ? 'text-sm' : ''}`}>
                    80.0s
                </span>
            </div>

            <BarChart
                className={`${isSmall ? 'h-36' : 'h-72'} mt-4`}
                data={chartData}
                index="action"
                categories={['Duration']}
                colors={['forest-200']}
                valueFormatter={(value) => `${value.toLocaleString()}s`}
                yAxisWidth={isSmall ? 44 : 56}
                showXAxis={!isSmall}
                showGridLines={!isSmall}
                showTooltip={false}
            />

            <div className={`${isSmall ? 'mt-4 space-y-2' : 'mt-8 space-y-4'}`}>
                <h4 className={`font-medium ${isSmall ? 'text-base' : 'text-lg '}`}>Actions</h4>
                {actionsList.map((item, i) => (
                    <div
                        key={i}
                        className={`border-forest-100 ${isSmall ? 'p-2' : 'p-[12px]'} bg-gray-50/50 rounded-xl`}
                    >
                        <div className="flex justify-between items-start">
                            <span className={`font-medium ${isSmall ? 'text-sm' : ''}`}>
                                {item.title}
                            </span>
                            <span className={`text-forest-600 ${isSmall ? 'text-sm' : ''}`}>
                                {item.Duration}
                            </span>
                        </div>
                        {!isSmall && <p className="text-forest-600 text-sm mb-1">{item.details}</p>}
                    </div>
                ))}
            </div>
        </Card>
    );
}
