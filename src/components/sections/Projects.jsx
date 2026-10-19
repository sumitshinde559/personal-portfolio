import { ArrowUpRight, GitCompare } from "lucide-react";
import { AnimatedBorderButton } from "@/components/Buttons/AnimatedBorderButton";
import { TechList } from "@/components/TechList";
const projects = [
  {
    title: "ACT Cabs: Taxi Operator Portal",
    description:
      "Built from scratch after gathering requirements from the admins: an operator account portal with custom PHP modules in WordPress that streamline earnings reports, documentation uploads and real-time dispatch data sync.",
    image: "/screenshots/portalactcabs.com.au.jpg",
    tags: ["WordPress", "PHP", "MySQL", "Bootstrap", "jQuery"],
    link: "https://portalactcabs.com.au",
  },
  {
    title: "Bucket Biryani Kolhapur",
    description:
      "Designed and developed a modern, responsive website for Bucket Biryani Kolhapur to strengthen its digital presence and showcase its menu, brand story, location, and imagery. Built using HTML and Tailwind CSS.",
    image: "/screenshots/bucketbiryanikolhapur.com.jpg",
    tags: ["HTML5", "Tailwind CSS", "Responsive Design"],
    link: "https://bucketbiryanikolhapur.com",
    github: "https://github.com/sumitshinde559/bucket-biryani-kolhapur-website",
  },
  {
    title: "Indian Diecast Expo",
    description:
      "Shopify store for India's diecast and scale-model expo in Mumbai, presenting event details, venue information and ticket sales for the Gala Dinner, Early Bird, General Entry and Private Dinner passes.",
    image: "/screenshots/indiandiecastexpo.com.jpg",
    tags: ["Shopify"],
    link: "https://indiandiecastexpo.com",
  },
  {
    title: "Cadra Solutions: Survey CAD Drafting",
    description:
      "Service website for a survey CAD drafting firm serving US survey companies, presenting its drafting services, turnaround and confidential file handling, with free trial and quote requests.",
    image: "/screenshots/cadrasolutions.com.jpg",
    tags: ["HTML5", "Tailwind CSS", "Hostinger"],
    link: "https://cadrasolutions.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label="Source code on GitHub"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <GitCompare className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    <a href={project.link}>{project.title}</a>
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <TechList tech={project.tags} />
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="/projects.html">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
