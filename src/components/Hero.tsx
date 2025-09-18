import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-brand-primary to-brand-secondary">
      {/* Floating elements for elegance */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-brand-accent/20 to-brand-warm/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-l from-brand-warm/10 to-brand-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-brand-accent/15 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-brand-warm/10 rounded-full blur-xl animate-pulse delay-700"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-brand-accent/30 shadow-lg">
                <span className="bg-gradient-to-r from-brand-accent to-brand-warm bg-clip-text text-transparent font-semibold text-sm">✨ Launching Soon</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold text-brand-dark mb-6 leading-tight tracking-tight">
                UtopiaHire
              </h1>
              <p className="text-2xl lg:text-3xl text-brand-text font-light tracking-wide">
                Inclusive Careers. Fair Opportunities.
              </p>
            </div>
            
            <p className="text-lg text-brand-text/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              AI-powered career platform promoting fairness and inclusivity in hiring across MENA and Sub-Saharan Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a
                href="https://forms.gle/AATQBPzNten4RVcU9"
                target="_blank"
                rel="noopener noreferrer"
                >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-brand-accent to-brand-warm hover:from-brand-accent/90 hover:to-brand-warm/90 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 px-8 py-4 text-lg font-medium rounded-2xl"
              >
                Join the Development Team
              </Button>
              </a>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/30 backdrop-blur-sm border border-brand-accent/20">
              <img 
                src={heroImage} 
                alt="Diverse professionals collaborating with AI technology for inclusive career opportunities"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/20 via-transparent to-brand-warm/10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-gradient-to-b from-brand-accent to-brand-warm rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;