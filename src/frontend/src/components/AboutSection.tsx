import { Camera, Instagram, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const EMOJIS = ["🐪", "🏰", "🎨", "🌅", "✨"];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-eyebrow text-saffron mb-3">
            ✦ The Storyteller ✦
          </p>
          <h2 className="font-serif text-navy text-4xl sm:text-5xl font-bold">
            Meet Hardik Banna
          </h2>
          <div className="ornate-divider mt-4 max-w-md mx-auto">
            <span className="text-gold text-2xl">❖</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute -inset-4 rounded-2xl border-2 border-gold/30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, oklch(0.72 0.12 72 / 0.08) 0%, transparent 60%)",
                }}
              />
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold rounded-br-lg" />
              <img
                src="/assets/uploads/WhatsApp-Image-2026-03-22-at-7.36.35-PM-1.jpeg"
                alt="Hardik Banna - AI Artist from Bikaner"
                className="relative rounded-xl w-full object-cover shadow-card-lg"
                style={{ aspectRatio: "6/7" }}
              />
              <div className="absolute -bottom-5 -right-5 bg-navy text-white rounded-xl p-3 shadow-card-lg">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-gold" />
                  <span className="font-sans text-xs font-semibold">
                    AI Artist
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <p className="font-sans text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
                From the Land of Forts
              </p>
              <h3 className="font-serif text-navy text-3xl font-bold leading-tight">
                Bridging Ancient Heritage with Modern AI
              </h3>
            </div>

            <p className="font-sans text-foreground/70 leading-relaxed">
              Born and raised in the royal city of Bikaner, Rajasthan, I am
              Hardik Banna — an AI artist on a mission to preserve and celebrate
              the living culture of my hometown. Through AI-powered visual
              storytelling, I breathe digital life into the timeless traditions,
              folk tales, and everyday magic of Rajasthan.
            </p>

            <p className="font-sans text-foreground/70 leading-relaxed">
              On Instagram, I create AI-generated reels that travel the world —
              sharing the beauty of Junagarh Fort, the warmth of Bikaner's
              people, the colors of its festivals, and the stories that have
              been passed down for generations.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-cream-light border border-sand rounded-full px-4 py-2">
                <MapPin size={14} className="text-saffron" />
                <span className="font-sans text-sm text-navy font-medium">
                  Bikaner, Rajasthan
                </span>
              </div>
              <div className="flex items-center gap-2 bg-cream-light border border-sand rounded-full px-4 py-2">
                <Sparkles size={14} className="text-saffron" />
                <span className="font-sans text-sm text-navy font-medium">
                  AI Visual Artist
                </span>
              </div>
              <div className="flex items-center gap-2 bg-cream-light border border-sand rounded-full px-4 py-2">
                <Camera size={14} className="text-saffron" />
                <span className="font-sans text-sm text-navy font-medium">
                  Instagram Creator
                </span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/banna_bikaneri23?igsh=anl5ajl5Zm14OWk4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-xl px-6 py-3 font-sans font-semibold text-sm hover:opacity-90 transition-opacity shadow-card"
              data-ocid="about.link"
            >
              <Instagram size={18} />
              Follow @hardikbanna on Instagram
            </a>

            <div className="border-t border-sand pt-6">
              <div className="flex gap-4 items-center">
                {EMOJIS.map((emoji) => (
                  <span key={emoji} className="text-2xl opacity-70">
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
