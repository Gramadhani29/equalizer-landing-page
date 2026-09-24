import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-cream-main flex flex-col">
      {/* Responsive Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full pointer-events-none select-none z-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/bg-main-desktop.png"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/bg-main-tablet.png"
          />
          <img
            src="/assets/bg-main-mobile.png"
            alt=""
            className="w-full h-auto object-cover max-h-200 md:max-h-275 lg:max-h-350 opacity-100"
          />
        </picture>
      </div>

      {/* Top Right Decorative Pattern (Visible on Tablet & Desktop) */}
      <div className="absolute top-0 right-0 pointer-events-none select-none z-0 hidden md:block overflow-hidden">
        <div className="relative -top-8.75 -right-8.75 md:-top-10 md:-right-8.75 lg:-top-10 lg:right-0">
          <Image
            src="/assets/bg-pattern-1.svg"
            alt=""
            width={312}
            height={468}
            priority
            className="w-67.5 md:w-67.5 lg:w-78 h-auto"
          />
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col flex-1">
        <Header />
        <main className="flex-1">
          <Hero />
          <ProductSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
