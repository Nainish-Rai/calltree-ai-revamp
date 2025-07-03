import { RotatingText } from './RotatingText';
export function HeroTitle() {
    return (
        <div className="flex flex-col items-center justify-center text-5xl md:text-7xl font-semibold mb-8 tracking-tight">
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <span className="font-light md:mb-0 md:mr-[8px]">Scale your team with</span>
            </div>
            <span className="bg-gradient-to-r from-forest-200 via-sage-400 to-sand-400 text-transparent bg-clip-text font-normal whitespace-nowrap md:mt-2 pb-1 text-center w-full">
                AI support agents
            </span>
        </div>
    );
}
