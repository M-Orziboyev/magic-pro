import { useState, useEffect } from "react";
import { Moon, Sun, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }
        return window.localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        document.documentElement.className = theme;
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                data-testid="theme-switcher"
                onClick={() => {
                    const themes = ["light", "dark", "pink"];
                    const currentThemeIndex = themes.indexOf(theme);
                    const nextTheme = themes[(currentThemeIndex + 1) % themes.length];
                    setTheme(nextTheme);
                }}
            >
                {theme === "light" && <Sun className="w-4 h-4" />}
                {theme === "dark" && <Moon className="w-4 h-4" />}
                {theme === "pink" && <Heart className="w-4 h-4" />}
            </Button>
        </div>
    );
};

export default ThemeSwitcher;
