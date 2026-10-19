import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SiteCard } from "@/components/SiteCard";

// Screenshots are 1440x900 captures in public/screenshots/.
// Tech was detected from each live site (CMS, frameworks, libraries, hosting); backend stacks for personal projects come from their repos.
const groups = [
  {
    title: "Client Websites",
    description: "Websites designed and built for clients.",
    sites: [
      {
        title: "Bucket Biryani Kolhapur",
        url: "https://bucketbiryanikolhapur.com",
        image: "/screenshots/bucketbiryanikolhapur.com.jpg",
        description: "Restaurant website for a Kolhapur biryani brand, showcasing its menu, brand story, location and delivery ordering.",
        tech: ["HTML5", "Tailwind CSS", "PHP", "Hostinger"],
      },
      {
        title: "Bento Biryani",
        url: "https://bentobiryani.com",
        image: "/screenshots/bentobiryani.com.jpg",
        description: "Launch site for a Pune cloud kitchen with an interactive build-your-bento menu and launch-update sign-ups.",
        tech: ["HTML5", "CSS", "PHP", "Hostinger"],
      },
      {
        title: "Indian Diecast Expo",
        url: "https://indiandiecastexpo.com",
        image: "/screenshots/indiandiecastexpo.com.jpg",
        description: "Shopify store for India's diecast and scale-model expo in Mumbai, covering event details and ticket sales.",
        tech: ["Shopify"],
      },
      {
        title: "Cadra Solutions",
        url: "https://cadrasolutions.com",
        image: "/screenshots/cadrasolutions.com.jpg",
        description: "Service website for a survey CAD drafting firm serving US survey companies, with free trial and quote requests.",
        tech: ["HTML5", "Tailwind CSS", "Hostinger"],
      },
      {
        title: "Brick Boys",
        url: "https://brickboys.com.au",
        image: "/screenshots/brickboys.com.au.jpg",
        description: "Business website for a Canberra bricklaying company covering general, residential and commercial work.",
        tech: ["HTML5", "Tailwind CSS", "Hostinger"],
      },
      {
        title: "Foodie Lucky",
        url: "https://foodielucky.com",
        image: "/screenshots/foodielucky.com.jpg",
        description: "Personal brand site for a food creator, highlighting social reach and restaurant collaboration enquiries.",
        tech: ["HTML5", "Tailwind CSS", "Hostinger"],
      },
      {
        title: "Dhanseva",
        url: "https://dhanseva.com",
        image: "/screenshots/dhanseva.com.jpg",
        description: "Insurance and loans advisory website from an experienced banker, with WhatsApp contact and free assessment booking.",
        tech: ["HTML5", "CSS", "PHP", "Hostinger"],
      },
      {
        title: "Renasyn",
        url: "https://renasyn.com.au",
        image: "/screenshots/renasyn.com.au.jpg",
        description: "Website for a Melbourne technology consultancy offering custom websites, CRM solutions, system integrations and marketing automation.",
        tech: ["HTML5", "Tailwind CSS", "PHP", "Hostinger"],
      },
      {
        title: "VN Dental Clinic",
        url: "https://vndentalclinic.com",
        image: "/screenshots/vndentalclinic.com.jpg",
        description: "Dental clinic website presenting treatments and services, with online appointment booking.",
        tech: ["HTML5", "Tailwind CSS", "Hostinger"],
      },
    ],
  },
  {
    title: "Previous Professional Work",
    description: "Websites and portals delivered in previous roles.",
    sites: [
      {
        title: "Tomato: Food Delivery App",
        url: "https://food-del-ameya.vercel.app",
        image: "/screenshots/food-del-ameya.vercel.app.jpg",
        description: "Food ordering web app with menu browsing, cart and sign-in. Made code corrections in the React app build at Ameya Informatics.",
        tech: ["React", "Vite", "Vercel"],
      },
      {
        title: "ACT Cabs",
        url: "https://actcabs.com.au",
        image: "/screenshots/actcabs.com.au.jpg",
        description: "Canberra taxi booking website with online booking, mobile app downloads and corporate account applications.",
        tech: ["Weebly", "jQuery"],
      },
      {
        title: "ACT Cabs: Taxi Operator Portal",
        url: "https://portalactcabs.com.au",
        image: "/screenshots/portalactcabs.com.au.jpg",
        description: "Built from scratch after gathering requirements from the admins: an operator portal with custom PHP modules in WordPress for earnings reports, document uploads and dispatch data sync.",
        tech: ["WordPress", "PHP", "Bootstrap", "jQuery"],
      },
      {
        title: "NIMS Institute",
        url: "https://nimsinstitute.edu.au",
        image: "/screenshots/nimsinstitute.edu.au.jpg",
        description: "Education provider website for personal and professional development courses, with course search, events and enrolment.",
        tech: ["WordPress", "WPBakery", "WooCommerce", "PHP", "Bootstrap", "jQuery"],
      },
      {
        title: "AIM Institute",
        url: "https://aiminstitute.edu.au",
        image: "/screenshots/aiminstitute.edu.au.jpg",
        description: "College website with course information and resources for future and current students.",
        tech: ["WordPress", "WooCommerce", "PHP", "Bootstrap", "jQuery"],
      },
      {
        title: "Australian National Character Check",
        url: "https://australiannationalcharactercheck.com.au",
        image: "/screenshots/australiannationalcharactercheck.com.au.jpg",
        description: "Online application platform for Nationally Coordinated Criminal History Checks. Added a test/demo bankruptcy check feature built with Angular.",
        tech: ["Angular", "HTML5", "Bootstrap", "jQuery"],
      },
    ],
  },
  {
    title: "Personal Projects",
    description: "Projects I build to explore new technology.",
    sites: [
      {
        title: "Womb of Gold: Browser Game",
        url: "https://wog.sageventures.co.in",
        image: "/screenshots/wog.sageventures.co.in.jpg",
        description: "Vibe-coded Indian folk-horror browser game with 21 levels, accounts and live leaderboards. Plays on phone and desktop with no download.",
        tech: ["HTML5", "JavaScript", "PHP", "Hostinger"],
      },
      {
        title: "Sage Ventures",
        url: "https://sageventures.co.in",
        image: "/screenshots/sageventures.co.in.jpg",
        description: "Website for my registered firm that builds websites, web apps and games, and creates food brands from recipe to first order.",
        tech: ["HTML5", "CSS", "JavaScript", "Hostinger"],
      },
      {
        title: "Kovhar: Kolhapuri Footwear E-Commerce",
        url: "https://kovhar-frontend.vercel.app",
        image: "/screenshots/kovhar-frontend.vercel.app.jpg",
        github: "https://github.com/sumitshinde559/kovhar-frontend",
        description: "Full-stack MERN store for handcrafted Kolhapuri chappals with category browsing, search, wishlist, cart and user accounts.",
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vercel"],
      },
      {
        title: "MeetUp Event Platform",
        url: "https://meetup-frontend-react.vercel.app",
        image: "/screenshots/meetup-frontend-react.vercel.app.jpg",
        github: "https://github.com/sumitshinde559/meetup-frontend-react",
        description: "Meetup-style event platform for discovering events and viewing event details, with a React frontend and Express API.",
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Vercel"],
      },
      {
        title: "MarTech Developer Portfolio",
        url: "https://sumitshinde559.github.io/portfolio/",
        image: "/screenshots/sumitshinde559.github.io-portfolio.jpg",
        description: "My MarTech portfolio covering Oracle Eloqua campaign emails, landing pages, PHP and WordPress sites and form-to-CRM syncs, with a live {{FirstName}} merge field that greets visitors by name.",
        tech: ["HTML5", "Tailwind CSS", "JavaScript", "GitHub Pages"],
      },
    ],
  },
];

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-6 pt-40 pb-32 space-y-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projects
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Websites I've{" "}
            <span className="font-serif italic font-normal text-white">
              built and shipped.
            </span>
          </h1>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Live websites for clients and employers, plus the personal projects
            I build to explore new technology.
          </p>
        </div>

        {groups.map((group, idx) => (
          <section
            key={group.title}
            className="animate-fade-in"
            style={{ animationDelay: `${(idx + 3) * 100}ms` }}
          >
            <h2 className="text-2xl font-semibold">{group.title}</h2>
            <p className="text-muted-foreground mt-2 mb-8">
              {group.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.sites.map((site) => (
                <SiteCard key={site.url} {...site} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};
