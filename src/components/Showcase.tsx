const portfolios = [
    {
        name: "MuhammadKarim To'xtaboyev",
        role: "Design Engineer",
        cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "Muslima Azamjonova",
        role: "Product Designer",
        cover: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "Diyorbek Rustamjonov",
        role: "Artist & Creative Developer",
        cover: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "Farrukh Kamalov",
        role: "Software Engineer",
        cover: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "Hikaru Nakamura",
        role: "Software Engineer",
        cover: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=600&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    },
    {
        name: "Magnus Carlson",
        role: "Software Engineer",
        cover: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&h=400&fit=crop",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
];

const Showcase = () => {
    return (
        <section id="showcase" className="py-24 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Community showcase
                    </h2>
                    <p className="text-muted-foreground">
                        Get your portfolio featured! Share it on{" "}
                        <a href="https://t.me/CodingT2" className="text-primary hover:underline">
                            Telegram
                        </a>
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolios.map((portfolio, index) => (
                        <a
                            key={portfolio.name}
                            href="#"
                            className="group glass-card-hover overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={portfolio.cover}
                                    alt={`Portfolio of ${portfolio.name}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                            </div>

                            <div className="p-5 flex items-center gap-4">
                                <img
                                    src={portfolio.avatar}
                                    alt={portfolio.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                                />
                                <div>
                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {portfolio.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{portfolio.role}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
