import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Clock, MapPin, User } from "lucide-react";
import { motion } from "motion/react";
import type { Story } from "../backend.d";
import { useGetPublicStories } from "../hooks/useQueries";

const SAMPLE_STORIES: Story[] = [
  {
    title: "The Camel Fair That Changed My Life",
    author: "Ramesh Swami",
    content:
      "Every November, when the desert air turns cool and golden, the great Bikaner Camel Festival transforms our city into something magical. I remember as a child, watching the decorated camels parade through the streets — their necks adorned with colorful beads, bells ringing with each step. My grandfather would lift me onto his shoulders so I could see above the crowd. That memory has never left me.",
    connection: "Third-generation resident of Bikaner",
    timestamp: BigInt(Date.now() - 86400000) * BigInt(1000000),
    status: { approved: null } as any,
  },
  {
    title: "Secrets of Junagarh's Inner Chambers",
    author: "Meena Rathore",
    content:
      "My great-grandmother was a palace attendant at Junagarh Fort in the 1930s. She used to tell us about the underground passages that connected different wings of the fort, passages that even tourists never see today. According to her, some rooms were kept locked for reasons no one dared question — rooms where the royal women would gather in secret to discuss matters of the kingdom.",
    connection: "Descendant of palace attendants",
    timestamp: BigInt(Date.now() - 172800000) * BigInt(1000000),
    status: { approved: null } as any,
  },
  {
    title: "The Desert Night Sky and Grandfather's Stories",
    author: "Sunil Bhati",
    content:
      "There is no sky like the Bikaner night sky. When the electricity would go out in our mohalla, my grandfather would gather all the children on the rooftop and point to constellations we could not even see in the city. He called them by names I have never found in any book — local names passed down through shepherds and traders for centuries along the old desert routes.",
    connection: "Born in Rani Bazar, Bikaner",
    timestamp: BigInt(Date.now() - 259200000) * BigInt(1000000),
    status: { approved: null } as any,
  },
  {
    title: "The Women Who Kept the Art Alive",
    author: "Kavita Joshi",
    content:
      "In our neighborhood, there was a group of elderly women who gathered every Tuesday to make Phad paintings — the traditional scroll paintings of Rajasthan. They were the last custodians of a style specific to our area, slightly different from the Bhilwara style in its use of deep indigo and the way figures were outlined with gold. When I was ten, they let me sit and watch. I have been painting ever since.",
    connection: "Folk art teacher, Bikaner Art School",
    timestamp: BigInt(Date.now() - 345600000) * BigInt(1000000),
    status: { approved: null } as any,
  },
  {
    title: "How Bikaner's Famous Bhujia Was Born",
    author: "Deepak Agarwal",
    content:
      "The real story of Bikaner bhujia is a family story. My ancestor, working in the royal kitchen in the late 19th century, was trying to create a snack for a royal feast. He experimented for weeks, adjusting the spice mixture until the Maharaja himself declared it fit for royalty. The recipe was kept a family secret for three generations before the commercial era began. Even today, the key spice blend is known only to a few.",
    connection: "Member of a founding bhujia family",
    timestamp: BigInt(Date.now() - 432000000) * BigInt(1000000),
    status: { approved: null } as any,
  },
  {
    title: "Monsoon in the Desert City",
    author: "Anjali Sharma",
    content:
      "People outside Bikaner always think of the desert when they imagine us. But the monsoon here is something extraordinary. When the first rains arrive in July, the entire city comes alive in ways that feel almost miraculous. The cracked earth drinks greedily, the trees burst into color overnight, and the smell of wet sand — called petrichor in English, but we have a Rajasthani word that captures it more deeply — fills every corner of the city.",
    connection: "Environmental scientist, Bikaner University",
    timestamp: BigInt(Date.now() - 518400000) * BigInt(1000000),
    status: { approved: null } as any,
  },
];

function StoryCard({ story, index }: { story: Story; index: number }) {
  const excerpt =
    story.content.length > 160
      ? `${story.content.slice(0, 160)}...`
      : story.content;
  const date = new Date(Number(story.timestamp) / 1_000_000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-cream-light border border-gold/30 rounded-xl p-6 shadow-card hover:shadow-card-lg transition-shadow flex flex-col"
      data-ocid={`gallery.item.${index + 1}`}
    >
      <div className="flex items-start justify-between mb-3">
        <Badge className="bg-saffron/15 text-saffron border-saffron/30 font-sans text-xs">
          Bikaner Tale
        </Badge>
        <div className="flex items-center gap-1 text-foreground/40 text-xs font-sans">
          <Clock size={11} />
          <span>
            {date.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      <h3 className="font-serif text-navy text-xl font-bold leading-tight mb-2">
        {story.title}
      </h3>

      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-1 text-foreground/60 text-sm font-sans">
          <User size={12} />
          <span>{story.author}</span>
        </div>
        {story.connection && (
          <div className="flex items-center gap-1 text-foreground/50 text-xs font-sans">
            <MapPin size={10} />
            <span>{story.connection}</span>
          </div>
        )}
      </div>

      <p className="font-sans text-foreground/65 text-sm leading-relaxed flex-1">
        {excerpt}
      </p>

      <button
        type="button"
        className="mt-4 flex items-center gap-2 text-saffron hover:text-saffron-dark font-sans text-sm font-semibold transition-colors group"
      >
        <BookOpen size={14} />
        <span>Read More</span>
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
    </motion.div>
  );
}

function StorySkeleton() {
  return (
    <div
      className="bg-cream-light border border-gold/20 rounded-xl p-6 space-y-3"
      data-ocid="gallery.loading_state"
    >
      <Skeleton className="h-5 w-24 bg-sand" />
      <Skeleton className="h-6 w-3/4 bg-sand" />
      <Skeleton className="h-4 w-1/2 bg-sand" />
      <Skeleton className="h-20 w-full bg-sand" />
    </div>
  );
}

export function GallerySection() {
  const { data: stories, isLoading } = useGetPublicStories();
  const displayStories =
    stories && stories.length > 0 ? stories : SAMPLE_STORIES;

  return (
    <section id="gallery" className="py-24 bg-navy rajasthani-border">
      <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20">
        <div className="text-center mb-16">
          <p className="section-eyebrow text-gold mb-3">
            ✦ Cultural Repository ✦
          </p>
          <h2 className="font-serif text-white text-4xl sm:text-5xl font-bold">
            Stories from Bikaner
          </h2>
          <p className="font-sans text-white/60 mt-3 max-w-xl mx-auto">
            Voices from the land of sand and forts — memories, legends, and
            living culture preserved for generations to come.
          </p>
          <div className="ornate-divider mt-4 max-w-md mx-auto">
            <span className="text-gold text-2xl">❖</span>
          </div>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders have no identity
              <StorySkeleton key={i} />
            ))}
          </div>
        ) : displayStories.length === 0 ? (
          <div className="text-center py-20" data-ocid="gallery.empty_state">
            <div className="text-6xl mb-4">📜</div>
            <h3 className="font-serif text-white text-2xl mb-2">
              No Stories Yet
            </h3>
            <p className="font-sans text-white/60">
              Be the first to share a tale of Bikaner!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayStories.map((story, i) => (
              <StoryCard
                key={story.title + story.author}
                story={story}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
