import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/lenis-provider';

export const metadata: Metadata = {
    title: 'Calltree AI',
    description:
        'Unlock cost savings and optimize your business with Calltree AI, a cutting-edge technology for workflow analytics and cost impact analysis.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="font-sans tracking-[1px]">
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
