import { Button } from "@/components/ui/button";
import { Heart, Instagram, MessageCircle, Play, Share2 } from "lucide-react";
import { motion } from "motion/react";

const REELS = [
  {
    image: "/assets/generated/reel-fort.dim_400x700.jpg",
    title: "Junagarh Fort — 5 Secrets",
    views: "142K",
    likes: "8.4K",
    caption:
      "The fort that was never conquered 🏰✨ #Bikaner #RajasthanHeritage",
    url: "https://www.instagram.com/banna_bikaneri23?igsh=anl5ajl5Zm14OWk4",
  },
  {
    image: "/assets/generated/reel-dance.dim_400x700.jpg",
    title: "Ghoomar — The Desert Soul",
    views: "89K",
    likes: "6.2K",
    caption:
      "When Rajasthani women dance, the desert celebrates 🌸 #Ghoomar #Rajasthan",
    url: "https://www.instagram.com/banna_bikaneri23?igsh=anl5ajl5Zm14OWk4",
  },
  {
    image: "/assets/generated/reel-culture.dim_400x700.jpg",
    title: "The Story of Bikaner Bhujia",
    views: "203K",
    likes: "14.7K",
    caption:
      "How a royal recipe became the world's favourite snack 🍟 #BikanerBhujia",
    url: "https://www.instagram.com/banna_bikaneri23?igsh=anl5ajl5Zm14OWk4",
  },
  {
    image: "/assets/generated/reel-bikaner-new.dim_400x700.jpg",
    title: "Bikaner — A New Story",
    views: "—",
    likes: "—",
    caption:
      "A new reel from Hardik's Instagram 🎬 #Bikaner #AIArt #BannaBikaneri",
    url: "https://www.instagram.com/reel/DTvfWsEkzbn/?igsh=MWYybm05OWcyN2JzeQ==",
  },
];

export function ReelsSection() {
  return (
    <section
      id="reels"
      className="py-24"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.55 0.16 45) 0%, oklch(0.48 0.16 40) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-eyebrow text-white/70 mb-3">
            ✦ AI-Powered Storytelling ✦
          </p>
          <h2 className="font-serif text-white text-4xl sm:text-5xl font-bold">
            Bikaner on Reels
          </h2>
          <p className="font-sans text-white/75 mt-3 max-w-xl mx-auto">
            Watch Hardik bring the stories of Bikaner and Rajasthani culture to
            life through AI-generated visual magic.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {REELS.map((reel, i) => (
            <motion.a
              key={reel.title}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl overflow-hidden shadow-card-lg cursor-pointer block"
              style={{ aspectRatio: "9/16", maxHeight: "480px" }}
              data-ocid={`reels.item.${i + 1}`}
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center">
                  <Instagram size={14} className="text-white" />
                </div>
                <span className="font-sans text-white text-xs font-semibold">
                  @banna_bikaneri23
                </span>
              </div>

              <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4">
                <button
                  type="button"
                  className="flex flex-col items-center gap-1 text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Heart size={16} />
                  </div>
                  <span className="font-sans text-xs">{reel.likes}</span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-1 text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <MessageCircle size={16} />
                  </div>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-1 text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="w-9 h-9 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Share2 size={16} />
                  </div>
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-white font-bold text-lg leading-tight mb-1">
                  {reel.title}
                </p>
                <p className="font-sans text-white/75 text-xs leading-relaxed line-clamp-2">
                  {reel.caption}
                </p>
                <p className="font-sans text-white/50 text-xs mt-2">
                  {reel.views} views
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-white/25 backdrop-blur rounded-full flex items-center justify-center">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/banna_bikaneri23?igsh=anl5ajl5Zm14OWk4"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="reels.link"
          >
            <Button
              size="lg"
              className="bg-white text-saffron hover:bg-white/90 font-sans font-bold text-base px-10 shadow-card-lg"
            >
              <Instagram size={20} className="mr-2" />
              Follow @banna_bikaneri23
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
