import { Heart, Instagram, Mail, MapPin } from "lucide-react";
import { SiFacebook, SiX } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About Hardik", id: "about" },
  { label: "Submit a Story", id: "submit" },
  { label: "Stories Gallery", id: "gallery" },
  { label: "Bikaner Reels", id: "reels" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-navy text-white">
      <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                <span className="font-serif text-gold text-xl font-bold">
                  BE
                </span>
              </div>
              <div>
                <div className="font-serif text-white font-bold text-2xl leading-tight">
                  BIKANER ECHOES
                </div>
                <div className="font-sans text-gold/80 text-xs tracking-widest">
                  VOICES OF RAJASTHAN
                </div>
              </div>
            </div>
            <p className="font-sans text-white/65 text-sm leading-relaxed max-w-xs">
              Collecting and preserving the stories, legends, and living culture
              of Bikaner, Rajasthan — through the art of AI storytelling.
            </p>
            <p className="font-sans text-gold/70 text-sm italic">
              "Made with AI ❤️ in Bikaner, Rajasthan"
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/banna_bikaneri23?igsh=anl5ajl5Zm14OWk4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                data-ocid="footer.link"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://x.com/hardikbanna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                data-ocid="footer.link"
              >
                <SiX size={14} className="text-white" />
              </a>
              <a
                href="https://facebook.com/hardikbanna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                data-ocid="footer.link"
              >
                <SiFacebook size={14} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="font-sans text-white/60 hover:text-gold text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white font-bold text-lg mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-sans text-white/70 text-sm">
                    Bikaner, Rajasthan
                  </p>
                  <p className="font-sans text-white/50 text-xs">
                    India - 334001
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={16} className="text-gold flex-shrink-0" />
                <a
                  href="https://www.instagram.com/banna_bikaneri23?igsh=anl5ajl5Zm14OWk4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white/70 hover:text-gold text-sm transition-colors"
                  data-ocid="footer.link"
                >
                  @hardikbanna
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:hello@bikanerstories.in"
                  className="font-sans text-white/70 hover:text-gold text-sm transition-colors"
                  data-ocid="footer.link"
                >
                  hello@bikanerstories.in
                </a>
              </div>
            </div>
            <div className="mt-5 rounded-xl overflow-hidden border border-white/10">
              <div
                className="h-28 relative"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.34 0.10 258) 0%, oklch(0.28 0.09 260) 100%)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl mb-1">🏰</div>
                  <p className="font-sans text-white/80 text-xs">
                    Bikaner, Rajasthan
                  </p>
                  <p className="font-sans text-white/50 text-xs">
                    28.0229° N, 73.3119° E
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-white/50 text-xs text-center sm:text-left">
              © {year} Bikaner Echoes by Hardik Banna. All rights reserved.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/40 hover:text-white/60 text-xs flex items-center gap-1 transition-colors"
            >
              Built with{" "}
              <Heart size={10} className="text-saffron" fill="currentColor" />{" "}
              using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
