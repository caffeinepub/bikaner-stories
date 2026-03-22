import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Clock, MapPin, User, X, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { toast } from "sonner";
import type { Story, StoryId } from "../backend.d";
import {
  useApproveStory,
  useGetAllStories,
  useRejectStory,
} from "../hooks/useQueries";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function StoryRow({
  story,
  storyId,
  index,
}: { story: Story; storyId: StoryId; index: number }) {
  const approve = useApproveStory();
  const reject = useRejectStory();

  const handleApprove = async () => {
    try {
      await approve.mutateAsync(storyId);
      toast.success(`"${story.title}" approved!`);
    } catch {
      toast.error("Failed to approve story.");
    }
  };

  const handleReject = async () => {
    try {
      await reject.mutateAsync(storyId);
      toast.success(`"${story.title}" rejected.`);
    } catch {
      toast.error("Failed to reject story.");
    }
  };

  const statusColor =
    story.status === "approved"
      ? "bg-green-100 text-green-700 border-green-200"
      : story.status === "rejected"
        ? "bg-red-100 text-red-700 border-red-200"
        : "bg-yellow-100 text-yellow-700 border-yellow-200";

  return (
    <div
      className="border border-sand rounded-xl p-5 bg-cream-light space-y-3"
      data-ocid={`admin.item.${index + 1}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h4 className="font-serif text-navy font-bold text-lg leading-tight">
            {story.title}
          </h4>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <span className="flex items-center gap-1 text-foreground/60 text-sm font-sans">
              <User size={12} /> {story.author}
            </span>
            {story.connection && (
              <span className="flex items-center gap-1 text-foreground/50 text-xs font-sans">
                <MapPin size={10} /> {story.connection}
              </span>
            )}
          </div>
        </div>
        <Badge className={`font-sans text-xs capitalize ${statusColor}`}>
          {typeof story.status === "string" ? story.status : "pending"}
        </Badge>
      </div>

      <p className="font-sans text-foreground/65 text-sm leading-relaxed line-clamp-3">
        {story.content}
      </p>

      {(typeof story.status === "object" ||
        (typeof story.status === "string" && story.status === "pending")) && (
        <div className="flex gap-3 pt-1">
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white font-sans flex-1"
            onClick={handleApprove}
            disabled={approve.isPending}
            data-ocid={`admin.confirm_button.${index + 1}`}
          >
            <Check size={14} className="mr-1" /> Approve
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50 font-sans flex-1"
            onClick={handleReject}
            disabled={reject.isPending}
            data-ocid={`admin.delete_button.${index + 1}`}
          >
            <XCircle size={14} className="mr-1" /> Reject
          </Button>
        </div>
      )}
    </div>
  );
}

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const { data: stories, isLoading } = useGetAllStories();

  const pending =
    stories?.filter(
      (s) =>
        s.status === "pending" ||
        (typeof s.status === "object" && "pending" in s.status),
    ) ?? [];
  const others =
    stories?.filter(
      (s) =>
        s.status !== "pending" &&
        !(typeof s.status === "object" && "pending" in s.status),
    ) ?? [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-cream z-50 overflow-y-auto shadow-card-lg"
            data-ocid="admin.panel"
          >
            <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
            <div className="sticky top-0 bg-cream/95 backdrop-blur border-b border-sand px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="font-serif text-navy text-2xl font-bold">
                  Admin Panel
                </h2>
                <p className="font-sans text-foreground/55 text-sm">
                  {pending.length} pending review
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-sand/50 text-navy transition-colors"
                data-ocid="admin.close_button"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {isLoading ? (
                <div className="space-y-4" data-ocid="admin.loading_state">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="space-y-3 border border-sand rounded-xl p-5"
                    >
                      <Skeleton className="h-6 w-3/4 bg-sand" />
                      <Skeleton className="h-4 w-1/2 bg-sand" />
                      <Skeleton className="h-16 w-full bg-sand" />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Clock size={16} className="text-saffron" />
                      <h3 className="font-serif text-navy text-xl font-bold">
                        Pending Review
                      </h3>
                      <Badge className="bg-saffron/15 text-saffron border-saffron/30 font-sans text-xs">
                        {pending.length}
                      </Badge>
                    </div>
                    {pending.length === 0 ? (
                      <div
                        className="text-center py-8 text-foreground/50 font-sans"
                        data-ocid="admin.empty_state"
                      >
                        No pending stories 🎉
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {pending.map((story, i) => (
                          <StoryRow
                            key={story.title + story.author}
                            story={story}
                            storyId={BigInt(i)}
                            index={i}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {others.length > 0 && (
                    <div>
                      <h3 className="font-serif text-navy text-xl font-bold mb-4">
                        All Stories
                      </h3>
                      <div className="space-y-4">
                        {others.map((story, i) => (
                          <StoryRow
                            key={story.title + story.author}
                            story={story}
                            storyId={BigInt(i + pending.length)}
                            index={i + pending.length}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
