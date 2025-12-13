const logos = [
    {name: "Mailchimp", svg: "M"},
    {name: "Microsoft", svg: "M"},
    {name: "NASA", svg: "N"},
    {name: "Google", svg: "G"},
    {name: "Apple", svg: "A"},
    {name: "Netflix", svg: "N"},
];

const LogoMarquee = () => {
    return (
        <section className="py-16 border-t border-b border-border/50">
            <div className="container text-center mb-8">
                <p className="text-lg font-medium text-foreground mb-2">Powering creative minds.</p>
                <p className="text-sm text-muted-foreground">Used by professionals working at:</p>
            </div>

            <div className="relative overflow-hidden">
                {/* Gradient overlays */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"/>
                <div
                    className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"/>

                <div className="flex animate-marquee">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-12 flex items-center justify-center w-32 h-12 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                        >
                            <span className="text-2xl font-bold tracking-wider opacity-60">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
