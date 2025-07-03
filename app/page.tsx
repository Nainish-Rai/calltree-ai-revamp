'use client';
import { Footer } from './components/Footer';
import HeroSection from '../components/hero-section';
import { VideoSection } from './components/VideoSection';
import { FeatureSection } from './components/FeatureSection';
import { CTABanner } from './components/CTABanner';
import { featuresData } from './components/featuresData';

export default function Page() {
    return (
        <div className="w-full min-h-screen bg-[#F9F9F7] text-[#252525] overscroll-behavior-y-contain">
            {/* Commented out tracking scripts */}
            {/* <Script
                id="reb2b-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: ` !function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=true;reb2b.methods=["identify","collect"];reb2b.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/VN080H4RPW6J.js.gz";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("VN080H4RPW6J");}(); `,
                }}
            />
            <Script
                id="collect-data-script"
                strategy="afterInteractive"
                src="https://k3604p7013.execute-api.us-east-1.amazonaws.com/dev/collect-data?userId=6792b8d015d2f39360d10a4a"
            /> */}

            {/* Hero Section */}
            <HeroSection />

            {/* Video Section */}
            <VideoSection videoSrc="https://sierra.ai/-/cdn/video?src=https%3A%2F%2Fcdn.sanity.io%2Ffiles%2Fca4jck6w%2Fproduction%2Ff189003833c6b320256e3dddc9182f5caf157771.mp4#t=0.001" />

            {/* Main Content */}
            <div className="space-y-0">
                {/* Feature Sections */}
                <FeatureSection {...featuresData.scalable} />
                <FeatureSection {...featuresData.onboarding} />
                <FeatureSection {...featuresData.security} />
            </div>

            {/* CTA Banner */}
            <CTABanner
                title="Ready to Scale Your Contact Center with AI Agents?"
                description="Join forward-thinking enterprises leveraging Calltree's AI Agents to scale their customer support effortlessly. Contact our team today to experience firsthand how Calltree's AI can revolutionize your customer service operations."
                buttonText="Book a Meeting"
                buttonHref="https://calendly.com/rob-calltree/30min"
            />

            {/* Footer */}
            <Footer />
        </div>
    );
}
