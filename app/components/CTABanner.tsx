'use client';

import { ArrowRightIcon } from '@radix-ui/react-icons';

interface CTABannerProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    backgroundColor?: string;
    textColor?: string;
}

export function CTABanner({
    title,
    description,
    buttonText,
    buttonHref,
    backgroundColor = 'bg-forest-800',
    textColor = 'text-white',
}: CTABannerProps) {
    return (
        <div className={`w-full ${backgroundColor} py-24 pt-[116px] pb-[116px]`}>
            <div className="max-w-7xl mx-auto px-6 text-center flex-row block">
                <h2 className={`text-4xl md:text-5xl ${textColor} font-normal mb-6`}>{title}</h2>
                <p className={`text-xl ${textColor} font-light max-w-4xl mx-auto mb-[52px]`}>
                    {description}
                </p>
                <a
                    href={buttonHref}
                    className="inline-flex items-center bg-white text-forest-800 px-8 py-4 rounded-md text-lg font-medium hover:bg-forest-50 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonText} <ArrowRightIcon className="ml-2 w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
