import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { TechList } from "@/components/TechList";

const displayUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const SiteCard = ({ url, title, image, github, tech, description }) => {
  return (
    <div className="group glass rounded-2xl overflow-hidden border border-primary/30 hover:border-primary/50 transition-all duration-500">
      {image && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          {/* Images already include the MacBook frame (Mobile Simulator style). */}
          <img
            src={image}
            alt={`${title ?? displayUrl(url)} on a laptop screen`}
            loading="lazy"
            width={1600}
            height={914}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
        </a>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-0 flex items-center justify-between gap-4"
          >
            <span className="min-w-0">
              <span className="block font-semibold truncate group-hover:text-primary transition-colors">
                {title ?? displayUrl(url)}
              </span>
              {title && (
                <span className="block text-sm text-muted-foreground truncate">
                  {displayUrl(url)}
                </span>
              )}
            </span>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code on GitHub"
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
            >
              <SiGithub className="w-5 h-5" />
            </a>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {tech && <TechList tech={tech} />}
      </div>
    </div>
  );
};
