import { Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const Footer = () => {
    return (
        <footer className="py-24 border-t border-border">
            <div className="container">
                {/* CTA Section */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Craft your portfolio with magic
                    </h2>
                    <Button variant="hero" size="lg" className="gap-3">
                        <Github className="w-5 h-5" />
                        View on GitHub
                    </Button>
                </div>

                {/* Community Section */}
                <div className="glass-card p-8 md:p-12 mb-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-foreground">Design Engineers Club</h3>
                            <p className="text-muted-foreground">
                                Join our community of design engineers and build without limits.
                            </p>
                            <Button variant="primary" size="default">
                                Join community
                            </Button>
                        </div>

                        <div className="flex -space-x-4 justify-center md:justify-end">
                            {[
                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
                            ].map((avatar, index) => (
                                <img
                                    key={index}
                                    src={avatar}
                                    alt="Community member"
                                    className="w-16 h-16 rounded-full border-4 border-card object-cover"
                                />
                            ))}
                            <div className="w-16 h-16 rounded-full border-4 border-card bg-secondary flex items-center justify-center text-sm font-medium text-muted-foreground">
                                +99
                            </div>
                        </div>
                    </div>
                </div>

                {/* Creators Section */}
                <div className="text-center mb-16">
                    <p className="text-sm text-muted-foreground mb-6">
                        Magic Portfolio is brought to you by <span className="text-foreground">Dopler</span>
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {[
                            {
                                name: "Lorant",
                                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                                quote: "In an AI-driven world, being a creative is tough. As an artist, designer, and developer, I'm dedicated to building spaces where creativity thrives.",
                            },
                            {
                                name: "Zsofia",
                                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                                quote: "From product management to design, my passion for open-source drives everything I do. I'm committed to creating tools that empower creatives.",
                            },
                        ].map((creator) => (
                            <div key={creator.name} className="glass-card p-6 text-left space-y-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={creator.avatar}
                                        alt={creator.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <span className="font-semibold text-foreground">{creator.name}</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">"{creator.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>
              Magic Portfolio is released under the{" "}
                            <a href="#" className="text-foreground hover:text-primary transition-colors">
                CC BY 4.0
              </a>{" "}
                            license
            </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm">
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            Once UI
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            Customize
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            Docs
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
