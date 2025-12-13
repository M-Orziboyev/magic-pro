import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import QuickStart from "@/components/QuickStart";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <LogoMarquee />
            <Features />
            <Showcase />
            <QuickStart />
            <Footer />
        </div>
    );
};

export default Index;
