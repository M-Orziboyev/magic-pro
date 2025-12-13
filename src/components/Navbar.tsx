import { Sparkles, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
            <div className="glass-card px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <a href="/" className="flex items-center gap-2 text-foreground font-semibold">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span>magic portfolio</span>
                    </a>

                    <div className="hidden md:flex items-center gap-6">
                        <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </a>
                        <a href="#showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Showcase
                        </a>
                        <a href="#quickstart" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Quickstart
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-2">
                        <Heart className="w-4 h-4" />
                        Donate
                    </Button>
                    <Button variant="glass" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        GitHub
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
