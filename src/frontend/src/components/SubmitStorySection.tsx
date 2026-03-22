import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitStory } from "../hooks/useQueries";

export function SubmitStorySection() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    connection: "",
    content: "",
  });

  const submitStory = useSubmitStory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.author || !formData.title || !formData.content) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      await submitStory.mutateAsync(formData);
      toast.success(
        "Your story has been submitted! Hardik will review it soon. 🙏",
      );
      setFormData({ author: "", title: "", connection: "", content: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="submit" className="py-24 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow text-saffron mb-3">
            ✦ Share Your Voice ✦
          </p>
          <h2 className="font-serif text-navy text-4xl sm:text-5xl font-bold">
            Submit a Tale
          </h2>
          <p className="font-sans text-foreground/65 mt-3 max-w-xl mx-auto">
            Your story of Bikaner could inspire thousands. Share a memory, a
            folk tale, a legend, or a piece of Rajasthani life — and we may
            bring it to life as an AI reel.
          </p>
          <div className="ornate-divider mt-4 max-w-md mx-auto">
            <span className="text-gold text-2xl">❖</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-lg">
              <img
                src="/assets/generated/story-submission-camel.dim_700x800.jpg"
                alt="Rajasthani storyteller"
                className="w-full object-cover"
                style={{ aspectRatio: "7/8", maxHeight: "560px" }}
              />
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
                <p className="font-serif text-white text-xl font-bold italic">
                  "हर दिल में एक कहानी है"
                </p>
                <p className="font-sans text-white/75 text-sm mt-1">
                  Every heart holds a story
                </p>
              </div>
            </div>

            {/* Decorative border corners */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold" />
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-card-lg border border-sand"
              data-ocid="submit.modal"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="author"
                    className="font-sans text-navy font-semibold text-sm"
                  >
                    Your Name <span className="text-saffron">*</span>
                  </Label>
                  <Input
                    id="author"
                    placeholder="e.g. Priya Sharma"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    className="border-sand focus:border-gold font-sans"
                    data-ocid="submit.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="font-sans text-navy font-semibold text-sm"
                  >
                    Story Title <span className="text-saffron">*</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g. The Night at Junagarh"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="border-sand focus:border-gold font-sans"
                    data-ocid="submit.input"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-5">
                <Label
                  htmlFor="connection"
                  className="font-sans text-navy font-semibold text-sm"
                >
                  Your Connection to Bikaner
                </Label>
                <Input
                  id="connection"
                  placeholder="e.g. Born and raised in the Old City"
                  value={formData.connection}
                  onChange={(e) =>
                    setFormData({ ...formData, connection: e.target.value })
                  }
                  className="border-sand focus:border-gold font-sans"
                  data-ocid="submit.input"
                />
              </div>

              <div className="space-y-2 mb-7">
                <Label
                  htmlFor="content"
                  className="font-sans text-navy font-semibold text-sm"
                >
                  Your Story <span className="text-saffron">*</span>
                </Label>
                <Textarea
                  id="content"
                  placeholder="Share your memory, folk tale, legend, or experience about Bikaner and Rajasthani culture..."
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows={6}
                  className="border-sand focus:border-gold font-sans resize-none"
                  data-ocid="submit.textarea"
                />
              </div>

              <Button
                type="submit"
                disabled={submitStory.isPending}
                className="w-full bg-navy hover:bg-navy-dark text-white font-sans font-semibold py-3 text-base"
                data-ocid="submit.submit_button"
              >
                {submitStory.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Share Your Story
                  </>
                )}
              </Button>

              {submitStory.isPending && (
                <p
                  className="text-center text-sm text-muted-foreground mt-3"
                  data-ocid="submit.loading_state"
                >
                  Sending your story to Bikaner Echoes...
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
