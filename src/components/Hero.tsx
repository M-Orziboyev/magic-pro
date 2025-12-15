import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
                            Create your creative
                            <br />
                            portfolio in minutes
                        </h1>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                            A modern, responsive, SEO-friendly portfolio template built with Once UI and Next.js
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="hero" size="lg" className="gap-3">
                                <Github className="w-5 h-5" />
                                View on GitHub
                            </Button>
                            <Button variant="ghost" size="lg" className="gap-2 text-muted-foreground hover:text-foreground">
                                View demo
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Right mockup */}
                    <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl" />

                            <img
                                // src={"https://unsplash.com/s/photos/coding-background"}
                                src={heroMockup}
                                alt="Portfolio mockup showing a design engineer's portfolio"
                                className="relative w-full h-auto rounded-2xl shadow-2xl animate-float"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
