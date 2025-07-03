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
    backgroundColor = 'bg-[#006A3A]',
    textColor = 'text-white',
}: CTABannerProps) {
    return (
        <div className={`w-full  py-32`}>
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2
                    className={` text-3xl md:text-4xl lg:text-5xl  text-[#252525]  mb-6 tracking-tight leading-tight`}
                >
                    {title}
                </h2>
                <p
                    className={`max-w-2xl text-base lg:text-lg  text-[#575757]  font-normal  mx-auto mb-12 leading-relaxed opacity-90`}
                >
                    {description}
                </p>
                <a
                    href={buttonHref}
                    className="inline-flex items-center bg-green-800 text-stone-100 px-8 py-4 rounded-full hover:text-green-800 border-green-800 border text-base hover:bg-[#F4F4F2] transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonText} <ArrowRightIcon className="ml-2 w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
