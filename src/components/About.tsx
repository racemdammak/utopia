import { Users, Brain, Shield } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            About EquiHire
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            We believe that talent should define opportunity, not bias. EquiHire harnesses the power of ethical AI 
            to create a more inclusive hiring landscape across MENA and Sub-Saharan Africa, ensuring every 
            individual has access to fair career opportunities.
          </p>
          
          {/* Illustration area */}
          <div className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-8 card-gradient rounded-3xl shadow-card transition-smooth hover:shadow-hover">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Inclusive by Design</h3>
                <p className="text-muted-foreground text-center">
                  Every feature built with diversity and inclusion at its core
                </p>
              </div>
              
              <div className="flex flex-col items-center p-8 card-gradient rounded-3xl shadow-card transition-smooth hover:shadow-hover">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ethical AI</h3>
                <p className="text-muted-foreground text-center">
                  AI algorithms trained to eliminate bias and promote fairness
                </p>
              </div>
              
              <div className="flex flex-col items-center p-8 card-gradient rounded-3xl shadow-card transition-smooth hover:shadow-hover">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-muted-foreground text-center">
                  Your data protected with enterprise-grade security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;