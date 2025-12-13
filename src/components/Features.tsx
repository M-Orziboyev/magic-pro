import {Code2, Palette, Search, Smartphone, Users, Zap} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Launch in minutes",
        description: "Everything you need for a powerful portfolio, ready to go.",
    },
    {
        icon: Palette,
        title: "Intuitive customization",
        description: "Easily toggle between various themes and customize to your liking.",
    },
    {
        icon: Smartphone,
        title: "100% responsive",
        description: "Ensure a perfect user experience across all devices.",
    },
    {
        icon: Users,
        title: "Community support",
        description: "Join our community of designers and devs and get help whenever you need.",
    },
    {
        icon: Search,
        title: "SEO-optimized",
        description: "Boost your app's search rankings with SEO-optimized pages.",
    },
    {
        icon: Code2,
        title: "State-of-the-art frameworks",
        description: "Built on Next.js and TypeScript for performance and scalability.",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32">
            <div className="container max-w-5xl">
                <div className="text-center mb-16 md:mb-20 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                        Invest in content, not design
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Showcase your projects,
                        <br/>
                        <span className="text-foreground font-medium">Magic Portfolio</span> does the rest
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-border transition-all duration-300"
                        >
                            <div className="space-y-4">
                                <div
                                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-5 h-5 text-primary"/>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
