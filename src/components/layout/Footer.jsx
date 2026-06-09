import { Phone } from "lucide-react";
import {
  SiGithub,
  SiGmail,
  SiReact,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/sumitshinde559",
    label: "GitHub",
  },
  { icon: Phone, href: "tel:+918877446363", label: "Phone" },
  { icon: SiGmail, href: "mailto:sumitshinde559@gmail.com", label: "Email" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              Sumit S<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Sumit Shinde. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="py-16 flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
        Made with <SiReact /> and <SiTailwindcss />
      </div>
    </footer>
  );
};
