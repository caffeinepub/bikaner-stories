import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-bikaner.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/50 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10"
        style={{
          backgroundImage:
            "repeating-conic-gradient(oklch(0.72 0.12 72) 0deg 10deg, transparent 10deg 20deg)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-gold mb-4"
          >
            ✦ Voices of Rajasthan ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Every Stone of Bikaner
            <br />
            <span className="text-gold italic">Holds a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Hardik Banna, an AI artist from Bikaner, transforms your stories of
            Rajasthani culture, heritage, and life into AI-powered reels that
            travel the world. Share your tale — and watch it come alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-saffron hover:bg-saffron-dark text-white font-sans font-semibold px-8 shadow-card-lg"
              onClick={() => scrollTo("submit")}
              data-ocid="hero.primary_button"
            >
              Share Your Story
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/70 text-white bg-transparent hover:bg-white/10 font-sans font-semibold px-8"
              onClick={() => scrollTo("gallery")}
              data-ocid="hero.secondary_button"
            >
              Explore Stories
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white"
        data-ocid="hero.button"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
