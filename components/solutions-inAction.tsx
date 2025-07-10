import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRightIcon } from 'lucide-react';

type Props = {
    title: string;
    description: string;
    cta: string;
    image: string;
};

function SolutionsInAction({ title, description, cta, image }: Props) {
    return (
        <div className="w-full p-16 bg-[#9f1d2a]">
            <div className="flex gap-16 max-w-7xl mx-auto flex-col lg:flex-row">
                <Image
                    src={image}
                    width={500}
                    height={500}
                    className="rounded-[2rem] aspect-[3/2]"
                    alt={title}
                />
                <div className="flex justify-center text-white items-start flex-col gap-2">
                    {' '}
                    <h1 className="text-left text-3xl md:text-4xl lg:text-5xl   tracking-tight leading-[1.1]  mb-2">
                        {title}
                    </h1>
                    <p className="text-sm mb-5 text-gray-100 md:text-base leading-snug transition-colors duration-300">
                        {description}
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-white text-white bg-[#9f1d2a] hover:bg-[#F4F4F2] px-8 py-4 rounded-full text-base font-medium transition-colors"
                    >
                        Book a Demo <ArrowRightIcon className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SolutionsInAction;
