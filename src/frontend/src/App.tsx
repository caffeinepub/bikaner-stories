import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { AdminPanel } from "./components/AdminPanel";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ReelsSection } from "./components/ReelsSection";
import { SubmitStorySection } from "./components/SubmitStorySection";

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onAdminClick={() => setAdminOpen(true)} />

      <main>
        <HeroSection />
        <AboutSection />
        <SubmitStorySection />
        <GallerySection />
        <ReelsSection />
      </main>

      <Footer />

      <AdminPanel isOpen={adminOpen} onClose={() => setAdminOpen(false)} />

      <Toaster richColors position="top-right" />
    </div>
  );
}
