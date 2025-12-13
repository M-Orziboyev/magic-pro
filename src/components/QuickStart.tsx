const steps = [
    {
        number: 1,
        title: "Customize styles",
        description: "Make your portfolio uniquely yours. Choose from light or dark themes, pick brand colors, and fine-tune visual details like borders and transitions.",
        code: `theme:       'dark',
neutral:     'gray',
brand:       'aqua',
accent:      'yellow',
solid:       'contrast',
solidStyle:  'flat',
border:      'playful',
surface:     'translucent',
transition:  'all'`,
    },
    {
        number: 2,
        title: "Select pages",
        description: "Choose from predefined pages including CV, projects, blog, or gallery.",
        code: `'/':        true,
'/about':   true,
'/work':    true,
'/blog':    true,
'/gallery': true,`,
    },
    {
        number: 3,
        title: "Add content",
        description: "Easily update a single content file to add your personal bio, work experience, and skills.",
        code: `display: true,
title: 'Work Experience',
experiences: [
    {
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [
            'Platform redesign',
            'AI integration'
        ],
    },
]`,
    },
    {
        number: 4,
        title: "Set up password protection",
        description: "Create password protected pages for confidential content.",
        code: `const protectedRoutes = {
    '/work/ai-integration': true
}`,
    },
    {
        number: 5,
        title: "Showcase your work",
        description: "Create a markdown file for each project you want to showcase. Add project details, links, and images.",
        code: `---
title: "Building Once UI"
publishedAt: "2024-04-08"
summary: "This is how we built 
Once UI, a Next.js component 
library and UI framework."
images:
  - "/images/project-01.jpg"
---`,
    },
    {
        number: 6,
        title: "Start blogging",
        description: "Share your story. Write blog posts with markdown.",
        code: `---
title: "Once UI 0.5 is here"
publishedAt: "2025-01-18"
summary: "New features, 
components, styling options."
---

## Build responsive layouts`,
    },
];

const QuickStart = () => {
    return (
        <section id="quickstart" className="py-24">
            <div className="container">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        Start now.{" "}
                        <span className="text-muted-foreground">Deploy in minutes.</span>
                    </h2>
                </div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`grid md:grid-cols-2 gap-8 items-center ${
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed pl-14">
                                    {step.description}
                                </p>
                            </div>

                            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                                <div className="glass-card p-4 font-mono text-sm">
                                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                    </div>
                                    <pre className="text-muted-foreground overflow-x-auto scrollbar-hide">
                    <code>{step.code}</code>
                  </pre>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickStart;
