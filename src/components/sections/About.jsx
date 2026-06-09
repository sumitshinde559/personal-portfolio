import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-18 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Marketing Automation Specialist, CRM Marketer, and Web
                Developer with over 4 years of experience creating data-driven
                customer journeys that drive engagement, lead nurturing, and
                business growth. My passion lies in combining marketing
                strategy, automation, technology, and modern web development to
                deliver personalised customer experiences and digital solutions
                that create real business impact.
              </p>
              <p>
                I have hands-on experience with platforms such as Oracle Eloqua,
                Zoho CRM, Salesforce, and a wide range of marketing
                technologies, helping organisations streamline marketing
                operations, improve campaign performance, and maximise customer
                lifetime value. From email marketing and customer segmentation
                to lead scoring and automated workflows, I focus on turning data
                into meaningful customer interactions.
              </p>
              <p>
                Alongside marketing automation, I have experience in web
                development using HTML, CSS, JavaScript, React.js, Node.js,
                WordPress, MySQL, MongoDB, Git, and modern frontend
                technologies. I enjoy building responsive websites, web
                applications, and digital experiences that combine strong
                functionality with a seamless user experience.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I enjoy combining marketing, technology, and web development to
                build solutions that improve customer engagement and business
                performance. Whether it's automating customer journeys,
                optimising CRM processes, or creating modern web experiences,
                I'm driven by a passion for innovation, problem-solving, and
                delivering measurable results."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
