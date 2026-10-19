import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Preview HTML lives in public/.
const emailCampaigns = [
  {
    label: "eBook delivery",
    title: "Graduate Certificate in Planetary Health",
    client: "Victoria University",
    file: "/email-templates/vu-planetary-health.html",
  },
  {
    label: "Webinar access",
    title: "International Open Week",
    client: "University of Auckland",
    file: "/email-templates/uoa-international-open-week.html",
  },
];

const landingPages = [
  {
    label: "Registration",
    title: "International Open Week",
    client: "University of Auckland",
    file: "/landing-pages/uoa-international-open-week-registration.html",
    url: "https://www.internationalopenweek.ac.nz/en/registration",
  },
  {
    label: "Request a callback",
    title: "Graduate Certificate in Planetary Health",
    client: "Victoria University",
    file: "/landing-pages/vu-request-callback.html",
    url: "https://study.vu.edu.au/requestcallback?course=VTPH",
  },
];

const PreviewCard = ({ label, title, client, file, url }) => {
  return (
    <div className="glass rounded-3xl p-6 border border-primary/30 hover:border-primary/50 transition-all duration-500 space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-sm text-primary font-medium">{label}</span>
          <h3 className="text-xl font-semibold mt-2">{title}</h3>
          <p className="text-muted-foreground">{client}</p>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live ${title} page`}
            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        )}
      </div>

      <iframe
        src={file}
        title={`${client}: ${title} preview`}
        sandbox=""
        className="w-full h-[32rem] rounded-2xl bg-white"
      />
    </div>
  );
};

export const MarketingPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-6 pt-40 pb-32 space-y-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Marketing Automation
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Campaigns that{" "}
            <span className="font-serif italic font-normal text-white">
              reach the inbox.
            </span>
          </h1>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Email templates and landing pages I've built for automated
            campaigns. Preview each one below.
          </p>
          <p className="mt-6 glass rounded-2xl px-6 py-4 text-sm text-muted-foreground animate-fade-in animation-delay-200">
            <span className="font-medium text-foreground">Note:</span> Logos,
            photos and artwork have been replaced with similar placeholders to
            avoid copyright issues. Layout and content structure reflect the
            close-copy builds.
          </p>
        </div>

        {/* Email Campaigns */}
        <section className="animate-fade-in animation-delay-300">
          <h2 className="text-2xl font-semibold mb-8">Email Campaigns</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {emailCampaigns.map((campaign) => (
              <PreviewCard key={campaign.file} {...campaign} />
            ))}
          </div>
        </section>

        {/* Landing Pages */}
        <section className="animate-fade-in animation-delay-400">
          <h2 className="text-2xl font-semibold mb-8">Landing Pages</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {landingPages.map((page) => (
              <PreviewCard key={page.file} {...page} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
