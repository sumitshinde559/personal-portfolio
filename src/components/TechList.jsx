import {
  SiAngular,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGithubpages,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiWoocommerce,
  SiWordpress,
} from "@icons-pack/react-simple-icons";

// Names without an icon here (e.g. Weebly, WPBakery) render as text-only chips.
const icons = {
  Angular: SiAngular,
  Bootstrap: SiBootstrap,
  CSS: SiCss,
  Express: SiExpress,
  "GitHub Pages": SiGithubpages,
  Hostinger: SiHostinger,
  HTML5: SiHtml5,
  JavaScript: SiJavascript,
  jQuery: SiJquery,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "Node.js": SiNodedotjs,
  PHP: SiPhp,
  React: SiReact,
  Shopify: SiShopify,
  "Tailwind CSS": SiTailwindcss,
  Vercel: SiVercel,
  Vite: SiVite,
  WooCommerce: SiWoocommerce,
  WordPress: SiWordpress,
};

export const TechList = ({ tech }) => {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Built with">
      {tech.map((name) => {
        const Icon = icons[name];
        return (
          <li
            key={name}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-border/50 text-xs text-muted-foreground"
          >
            {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
            {name}
          </li>
        );
      })}
    </ul>
  );
};
