import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <ValueProposition />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
