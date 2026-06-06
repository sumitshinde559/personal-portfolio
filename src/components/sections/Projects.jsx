import { ArrowUpRight, GitCompare } from "lucide-react";
import { AnimatedBorderButton } from "@/components/Buttons/AnimatedBorderButton";
const projects = [
  {
    title: "ACT Cabs: Driver Portal",
    description:
      "Improved the Driver Account Management Portal by architecting custom PHP modules within WordPress to streamline earnings reports, documentation uploads, and real-time dispatch data sync.",
    image: "/actcabs.png",
    tags: ["WordPress", "PHP", "MySQL"],
    link: "https://www.actcabs.com.au/",
    github: "#",
  },
  {
    title: "Bucket Biryani Kolhapur",
    description:
      "Designed and developed a modern, responsive website for Bucket Biryani Kolhapur to strengthen its digital presence and showcase its menu, brand story, location, and promotions. Built using React and Tailwind CSS, with AI-assisted development workflows using Claude Code to accelerate development and improve productivity.",
    image: "/bucket-biryani-kolhapur.png",
    tags: ["React", "Tailwind CSS", "Claude Code", "Responsive Design"],
    link: "https://bucketbiryanikolhapur.com",
    github: "#",
  },
  {
    title: "VU: Planetary Health Callback",
    description:
      "Developed a callback request portal for Victoria University's Graduate Certificate in Planetary Health program. Implemented dynamic UTM tracking, campaign source attribution, and webhook integrations to automatically route callback requests to the appropriate teams, ensuring accurate lead tracking and streamlined student enquiry management.",
    image: "/VU-CallBack-Landing_Page.png",
    tags: ["Webhook Integration", "UTM Tracking", "Lead Management"],
    link: "https://study.vu.edu.au/requestcallback?course=VTPH",
    github: "#",
  },
  {
    title: "MeetUp Event Platform",
    description:
      "Developed a full-stack event platform Meetup clone - primary features clone using React, Node.js, and Express. The application enables users to discover events, view detailed event information, and interact through a modern, responsive interface. Built with a focus on clean architecture, seamless user experience, and scalable frontend-backend integration.",
    image: "/meetup-platform.png",
    tags: ["React", "Node.js", "Express.js", "Tailwind CSS", "Vercel"],
    link: "https://meetup-frontend-react.vercel.app/",
    github: "#",
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
                  <a
                    href={project.gi}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GitCompare className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
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
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/sumitshinde559"
            target="_blank"
            rel="noopener noreferrer"
          >
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
