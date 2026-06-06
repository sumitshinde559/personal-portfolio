const experiences = [
  {
    period: "2024 — 2025",
    role: "Marketing Automation Specialist & CRM Marketer",
    company: "Ameya Informatics",
    description:
      "Managing end-to-end marketing automation and CRM initiatives for higher education and business clients. Designed and deployed landing pages, lead capture forms, automated customer journeys, email campaigns, and CRM integrations using Oracle Eloqua, Salesforce, and custom web technologies. Collaborated with stakeholders to improve lead management processes, campaign performance, and customer engagement through data-driven marketing strategies.",
    technologies: [
      "Oracle Eloqua",
      "Salesforce",
      "Zoho CRM",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "API Integration",
    ],
    current: true,
  },
  {
    period: "2022 — 2023",
    role: "Marketing Cloud Web Developer Programmer",
    company: "Marketing Cube",
    description:
      "Developed and customised marketing assets including emails, landing pages, and forms using HTML, CSS, JavaScript, and Oracle Eloqua. Implemented dynamic content, personalisation, and audience segmentation strategies to improve campaign effectiveness. Integrated marketing platforms with CRM systems and SMS gateways through REST APIs, while troubleshooting complex data flow and tracking issues. Created campaign performance reports and analytics dashboards to support optimisation and data-driven marketing decisions.",
    technologies: [
      "Oracle Eloqua",
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
      "CRM Integration",
      "SMS Gateways",
      "Marketing Automation",
    ],
    current: false,
  },
  {
    period: "2020 — 2021",
    role: "Web Developer",
    company: "ACT CABS",
    description:
      "Enhanced website performance, responsiveness, and overall user experience across desktop and mobile devices. Successfully migrated the production website to AWS cloud infrastructure, improving reliability and scalability. Developed new features, implemented UI enhancements, and contributed to ongoing website maintenance and optimisation initiatives.",
    technologies: [
      "HTML",
      "CSS",
      "WordPress",
      "PHP",
      "JavaScript",
      "AWS",
      "Web Performance",
      "Responsive Design",
      "UI Development",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              delivers results.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A track record of building marketing automation solutions, CRM
            strategies, and web applications that improve customer engagement,
            streamline processes, and drive business growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
