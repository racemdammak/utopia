import { Button } from "@/components/ui/button";

const Team = () => {
  const teamMembers = [
    {
      name: "Racem Dammak",
      description: "3rd year Computer Science student",
      avatar: "/racem.png"
    },
    {
      name: "Yassmine Feki",
      description: "1st year Data Engineering student",
      avatar: "/yassmine.jpg"
    },
    {
      name: "Aymen Kamel",
      description: "3rd year Computer Science student",
      avatar: "/aymen.png"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            The Team Behind UtopiaHire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of technologists, ethicists, and career experts united by a shared vision of inclusive hiring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-card transition-smooth hover:shadow-hover text-center group"
            >
              <div className="mb-6">
                <img 
                  src={member.avatar}
                  alt={`${member.name} `}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-card group-hover:shadow-hover transition-smooth"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {member.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg mb-6">
            More talented team members joining soon!
          </p>
          <a
            href="https://forms.gle/AATQBPzNten4RVcU9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              Join Our Team
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;