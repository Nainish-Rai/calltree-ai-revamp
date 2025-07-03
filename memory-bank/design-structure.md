{
"websiteProfile": {
"name": "Calltree AI (Sierra Style Revamp)",
"description": "A JSON profile for revamping the Calltree.ai landing page using the design system and aesthetic of the Sierra website.",
"theme": {
"palette": {
"primary": "#4CAF50", // A slightly brighter green for Calltree
"secondary": "#2E2E2E",
"backgroundLight": "#F9F9F7",
"backgroundDark": "#222222",
"textLight": "#FFFFFF",
"textDark": "#1A1A1A",
"textMuted": "#555555",
"highlight": "#65C168"
},
"typography": {
"fontFamily": "'Inter', 'Helvetica Neue', Arial, sans-serif",
"baseFontSize": "17px",
"headlineFontWeight": "500",
"bodyFontWeight": "400"
},
"layout": {
"containerMaxWidth": "1200px",
"borderRadius": "20px",
"buttonBorderRadius": "999px"
}
},
"animationDefaults": {
"onScroll": {
"trigger": "enter-viewport",
"type": "fadeInUp",
"duration": "0.8s",
"delay": "0.1s",
"easing": "ease-out"
},
"onHover": {
"type": "scale",
"value": "1.03",
"duration": "0.3s"
}
},
"header": {
"logo": {
"text": "Calltree.ai",
"alt": "Calltree.ai Logo"
},
"navigation": [
{ "text": "Features", "href": "#features" },
{ "text": "Security", "href": "#security" },
{ "text": "Use Cases", "href": "#use-cases" }
],
"ctaButton": {
"text": "Book a Meeting",
"href": "/book-meeting",
"style": "outline"
},
"animation": {
"onSticky": "add-background-blur-and-shadow"
}
},
"sections": [
{
"type": "hero",
"id": "home",
"headline": "Scale your team with <span style='color: #4CAF50;'>AI support agents.</span>",
"subheadline": "Calltree provides enterprise-grade AI support agents that handle customer interactions exactly like your human agents—reducing contact center operating costs by up to 70%.",
"interactiveElement": {
"type": "animated-prompt",
"placeholderText": "How do I update my billing address?",
"icon": "up-arrow",
"animation": {
"onLoad": { "type": "typing", "speed": 70, "pauseAtEnd": 2500 }
}
},
"animation": {
"elements": [
{ "target": "headline", "type": "fadeInUp", "delay": "0.1s" },
{ "target": "subheadline", "type": "fadeInUp", "delay": "0.2s" },
{ "target": "interactiveElement", "type": "fadeInUp", "delay": "0.3s" }
]
}
},
{
"type": "feature-highlight",
"id": "features",
"layout": "two-column-visual-left",
"headline": "Always-On, Scalable Coverage",
"description": "Provide instant, high-quality support to every customer, anywhere in the world, without the limitations of time zones or team capacity.",
"visualContent": {
"type": "animated-map",
"imageSrc": "/assets/images/world-map-green.svg",
"pins": [
{"lat": 40.7128, "lon": -74.0060}, {"lat": 51.5074, "lon": -0.1278},
{"lat": -33.8688, "lon": 151.2093}, {"lat": 35.6895, "lon": 139.6917},
{"lat": -26.2041, "lon": 28.0473}
],
"animation": { "onScroll": { "type": "pins-pulse-in-sequence", "delay": "100ms" }}
},
"featureGrid": [
{ "icon": "refresh-cw", "title": "Instant Resolutions", "description": "Solve issues on the first contact, eliminating tedious IVR menus and long wait times." },
{ "icon": "settings", "title": "Elastic Support", "description": "Effortlessly handle fluctuations in call volume without hiring or scheduling additional resources." },
{ "icon": "user-check", "title": "Consistent Quality", "description": "Maintain high service standards even during unexpected demand spikes." }
],
"animation": {
"onScroll": [
{ "target": "visualContent", "type": "fadeInScale", "duration": "1s" },
{ "target": ".featureGrid-item", "type": "staggeredFadeInUp", "delayBetweenChildren": "100ms" }
]
}
},
{
"type": "feature-highlight",
"id": "onboarding",
"layout": "two-column-visual-right",
"headline": "Onboarding as Simple as Hiring a Human Agent",
"description": "Our AI agents learn from your existing processes and best-performing humans, ensuring a fast, seamless ramp-up with minimal effort from your team.",
"visualContent": {
"type": "ui-mockup",
"imageSrc": "/assets/images/calltree-dashboard-mockup.png",
"caption": "A clean UI showing a knowledge base being imported and an agent's performance metrics."
},
"featureGrid": [
{ "icon": "bar-chart-2", "title": "Instant Ramp-Up", "description": "AI agents learn by observing your human reps, quickly adapting to your processes and workflows." },
{ "icon": "clock", "title": "Seamless Human Handoff", "description": "If a conversation requires human intervention, Calltree automatically transfers it—providing full context." },
{ "icon": "list", "title": "Continuous Improvement", "description": "Our AI agents continually learn from every interaction, automatically improving performance and efficiency." }
]
},
{
"type": "feature-highlight",
"id": "security",
"theme": "dark",
"layout": "two-column-visual-left",
"headline": "Secure, Compliant, and Enterprise-Ready",
"description": "Built with enterprise-grade security at its core, Calltree ensures every interaction is private, protected, and aligned with your brand's standards.",
"visualContent": {
"type": "abstract-graphic",
"imageSrc": "/assets/images/secure-shield-graphic.svg",
"animation": { "onScroll": { "type": "pulsating-glow", "color": "#4CAF50" }}
},
"featureGrid": [
{ "icon": "shield", "title": "Robust Guardrails", "description": "Our AI agents strictly follow your business rules and compliance policies." },
{ "icon": "lock", "title": "Data Protection", "description": "Sensitive customer information remains secure, encrypted, and private." },
{ "icon": "user-check", "title": "Consistent and On-Brand", "description": "Our AI agents reliably represent your brand, providing only approved, accurate information." }
]
},
{
"type": "testimonial",
"id": "testimonial",
"quote": "Calltree's AI agents integrated seamlessly with our existing CRM and felt like we onboarded a full team of our best reps overnight. Our resolution times dropped by 60% in the first month.",
"author": {
"name": "Jasmine Lee",
"title": "Director of Customer Operations, InnovateSphere Tech",
"imageSrc": "/assets/images/jasmine-lee-testimonial.jpg"
},
"companyName": "InnovateSphere",
"ctaButton": { "text": "See more success stories", "href": "/customers" },
"animation": {
"onScroll": { "type": "fadeInScale", "duration": "1s" }
}
},
{
"type": "final-cta",
"id": "contact",
"headline": "Ready to Scale Your Contact Center with AI Agents?",
"subheadline": "Join forward-thinking enterprises leveraging Calltree's AI Agents to scale their customer support effortlessly. Contact our team today to experience firsthand how Calltree's AI can revolutionize your customer service operations.",
"ctaButton": {
"text": "Book a Meeting",
"href": "/book-meeting",
"style": "primary-filled"
}
}
],
"footer": {
"logo": {
"text": "Calltree.ai"
},
"decorativeElement": {
"type": "dotted-pattern",
"colors": ["#4CAF50", "#E0E0E0"]
},
"columns": [
{
"title": "Platform",
"links": [
{ "text": "AI Agents", "href": "#features" },
{ "text": "Security", "href": "#security" },
{ "text": "Onboarding", "href": "#onboarding" }
]
},
{
"title": "Company",
"links": [
{ "text": "About Us", "href": "/about" },
{ "text": "Careers", "href": "/careers" },
{ "text": "Contact", "href": "/contact" }
]
}
],
"copyright": "© 2025 CallTree AI"
}
}
}
