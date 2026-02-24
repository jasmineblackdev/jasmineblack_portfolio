import { motion } from "framer-motion";
import { Mail, Github, Figma } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "jasmineblack@yourdomain.com",
    href: "mailto:jasmineblack@yourdomain.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/jasmineblackdev",
    href: "https://github.com/jasmineblackdev",
    icon: Github,
  },
  {
    label: "Figma",
    value: "Figma Community",
    href: "#",
    icon: Figma,
  },
];

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h1>
        <p className="text-lg text-muted-foreground font-body mt-3 max-w-lg">
          I'm open to UX & product design roles. Let's talk about building something great.
        </p>
      </motion.div>

      <div className="mt-16 space-y-6">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="flex items-center gap-4 p-6 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors group"
          >
            <c.icon size={24} className="text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
            <div>
              <p className="font-display text-sm font-semibold text-foreground">{c.label}</p>
              <p className="text-sm text-muted-foreground font-body">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
