import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useIsAdmin } from "../hooks/useQueries";

const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "Our Story", id: "about" },
  { label: "Submit a Tale", id: "submit" },
  { label: "The Gallery", id: "gallery" },
  { label: "Reels", id: "reels" },
  { label: "Contact", id: "footer" },
];

interface HeaderProps {
  onAdminClick: () => void;
}

export function Header({ onAdminClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const { data: isAdmin } = useIsAdmin();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream shadow-md" : "bg-cream/95"
      }`}
    >
      <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
          >
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
              <span className="text-gold font-serif text-lg font-bold">BE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-navy font-bold text-lg leading-tight">
                BIKANER
              </span>
              <span className="font-serif text-saffron font-semibold text-sm leading-tight tracking-widest">
                ECHOES
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="px-3 py-2 text-sm font-sans text-navy/80 hover:text-navy hover:bg-sand/50 rounded transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            {identity ? (
              <>
                {isAdmin && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gold text-navy text-xs"
                    onClick={onAdminClick}
                    data-ocid="nav.button"
                  >
                    Admin Panel
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  className="border-navy text-navy text-xs"
                  onClick={clear}
                  data-ocid="nav.button"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                size="sm"
                className="bg-navy text-white text-xs hover:bg-navy-dark"
                onClick={login}
                disabled={loginStatus === "logging-in"}
                data-ocid="nav.button"
              >
                {loginStatus === "logging-in" ? "Connecting..." : "Admin Login"}
              </Button>
            )}
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-3 text-navy/80 hover:text-navy font-sans border-b border-sand/50 last:border-0"
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
          {!identity ? (
            <Button
              className="mt-3 w-full bg-navy text-white"
              onClick={() => {
                login();
                setMobileOpen(false);
              }}
              data-ocid="nav.button"
            >
              Admin Login
            </Button>
          ) : (
            <Button
              className="mt-3 w-full bg-navy text-white"
              onClick={() => {
                clear();
                setMobileOpen(false);
              }}
              data-ocid="nav.button"
            >
              Sign Out
            </Button>
          )}
        </div>
      )}
    </header>
  );
}
