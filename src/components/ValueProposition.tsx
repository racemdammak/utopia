import { CheckCircle, Heart, Lock, Zap } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Fairness by Design",
      description: "Every algorithm and feature built to eliminate bias and create equal opportunities for all candidates."
    },
    {
      icon: Heart,
      title: "Inclusive Opportunities",
      description: "Connecting diverse talent with forward-thinking employers who value inclusivity and authentic diversity."
    },
    {
      icon: Lock,
      title: "Privacy & Security Built-in",
      description: "Enterprise-grade data protection ensuring your personal information remains secure and confidential."
    },
    {
      icon: Zap,
      title: "Ethical AI",
      description: "Transparent, responsible AI that amplifies human potential while respecting dignity and individual worth."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Why UtopiaHire?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another hiring platform. We're building the future of fair, inclusive careers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-8 card-gradient rounded-3xl shadow-card transition-smooth hover:shadow-hover"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-brand-accent" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;