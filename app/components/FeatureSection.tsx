'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    ClipboardIcon,
    MixerHorizontalIcon,
    TargetIcon,
    BarChartIcon,
    PieChartIcon,
    ListBulletIcon,
    UpdateIcon,
    GearIcon,
    PersonIcon,
} from '@radix-ui/react-icons';

// Icon mapping to convert string names to actual icon components
const iconMap = {
    ClipboardIcon: ClipboardIcon,
    MixerHorizontalIcon: MixerHorizontalIcon,
    TargetIcon: TargetIcon,
    BarChartIcon: BarChartIcon,
    PieChartIcon: PieChartIcon,
    ListBulletIcon: ListBulletIcon,
    UpdateIcon: UpdateIcon,
    GearIcon: GearIcon,
    PersonIcon: PersonIcon,
};

interface FeatureSectionProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    features: {
        icon: string;
        title: string;
        description: string;
    }[];
    layout?: 'image-right' | 'image-left';
    backgroundImage?: string;
    overlayImages?: {
        src: string;
        alt: string;
        width: number;
        height: number;
        className: string;
    }[];
}

export function FeatureSection({
    title,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    features,
    layout = 'image-right',
    backgroundImage,
    overlayImages,
}: FeatureSectionProps) {
    const imageContent = (
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-[400px]">
            <div
                className={`absolute inset-0 ${backgroundImage || 'from-sage-50 to-sage-100'} bg-cover bg-center bg-no-repeat`}
                style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
            >
                <div className="absolute inset-0 from-sage-50 to-sage-100 bg-none">
                    {overlayImages?.map((img, index) => (
                        <Image
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            priority
                            className={img.className}
                        />
                    )) || (
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={imageWidth}
                            height={imageHeight}
                            priority
                            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 backdrop-blur-lg shadow-xl"
                        />
                    )}
                </div>
            </div>
        </div>
    );

    const textContent = (
        <div className="space-y-12">
            <div className="space-y-4">
                <h2 className="tracking-tight font-normal text-forest-800 text-[36px] text-balance">
                    {title}
                </h2>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-[100px]">
            <div className="grid md:grid-cols-2 gap-12 items-center m-0">
                {layout === 'image-left' ? (
                    <>
                        {imageContent}
                        {textContent}
                    </>
                ) : (
                    <>
                        {textContent}
                        {imageContent}
                    </>
                )}
            </div>
            <div className="justify-start items-start grid grid-cols-1 md:grid-cols-3 gap-[52px]">
                {features.map((feature, index) => {
                    const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-2 flex flex-col gap-[12px]"
                        >
                            <div className="bg-forest-100 rounded-[40px] w-[50px] h-[50px] flex items-center justify-center">
                                {IconComponent && (
                                    <IconComponent className="w-6 h-6 text-forest-600" />
                                )}
                            </div>
                            <h4 className="text-lg font-medium">{feature.title}</h4>
                            <p className="text-forest-600 text-balance">{feature.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
