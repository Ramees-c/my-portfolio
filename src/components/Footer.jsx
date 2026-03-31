import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-16 px-6 bg-card/10 overflow-hidden">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Logo/Brand */}
        <div
          className="flex flex-col items-center md:items-start group cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="text-2xl font-bold tracking-wider mb-1">
            <span className="text-white group-hover:text-primary transition-colors">
              Ramees
            </span>
            <span className="text-primary font-light ml-1">C</span>
          </div>
          <p className="text-[10px] text-muted font-bold uppercase tracking-[0.3em] opacity-60">
            Frontend Developer
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-muted/60 font-medium order-3 md:order-2">
          © {new Date().getFullYear()} Ramees C.{" "}
          <span className="hidden sm:inline">Built with passion.</span>
        </div>

        {/* Socials & Action */}
        <div className="flex items-center space-x-6 order-2 md:order-3">
          <div className="flex space-x-3">
            {[
              {
                icon: <BsWhatsapp size={18} />,
                href: "https://wa.me/918086842985",
                label: "Whatsapp",
              },
              {
                icon: <CgInstagram size={18} />,
                href: "https://www.instagram.com/_ramiez_?igsh=c2hkZmFmeXg3NXpi",
                label: "Instgram",
              },
              {
                icon: <LiaLinkedin size={18} />,
                href: "https://www.linkedin.com/in/ramees-c-4a9208344",
                label: "LinkedIn",
              },
              {
                icon: <BsGithub size={18} />,
                href: "https://github.com/Ramees-c",
                label: "Github",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 border border-white/5 hover:border-primary/20 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-lg bg-primary text-black flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-white transition-colors group"
            title="Back to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
