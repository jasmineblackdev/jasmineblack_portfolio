import { Link } from "react-router-dom";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-sm text-muted-foreground">
          © 2025 Jasmine Black. Designed & built with intention.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:jasmineblack@yourdomain.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/jasmineblackdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-accent transition-colors font-body"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
