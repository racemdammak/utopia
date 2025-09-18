import { FileText, MessageSquare, Search, Scan, Scale } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Resume Reviewer & Rewriter",
      description: "AI-powered resume enhancement that eliminates bias and highlights your strengths while maintaining authenticity."
    },
    {
      icon: MessageSquare,
      title: "AI Interviewer & Profiler",
      description: "Practice interviews with our AI system designed to provide fair, constructive feedback and build confidence."
    },
    {
      icon: Search,
      title: "Job Matcher",
      description: "Smart matching system focused on MENA and Sub-Saharan Africa opportunities, connecting you with inclusive employers."
    },
    {
      icon: Scan,
      title: "Footprint Scanner",
      description: "Analyze your LinkedIn, GitHub, and StackOverflow presence to showcase your professional strengths."
    },
    {
      icon: Scale,
      title: "Legal Assistant",
      description: "Understand your labor rights and navigate employment laws with our AI-powered legal guidance system."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Core Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed to level the playing field and create equal opportunities for all
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-card transition-smooth hover:shadow-hover hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-brand-dark/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-dark/20 transition-smooth">
                <feature.icon className="w-8 h-8 text-brand-dark" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;