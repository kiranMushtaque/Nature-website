

"use client";

import { useState, useEffect } from "react";
import { X, Play } from "lucide-react";
import Image from "next/image";

interface VideoModalProps {
  videoId?: string;
  thumbnailUrl?: string;
}

export default function VideoModal({
  videoId = "MlXaDNYN2hg",
  thumbnailUrl = "/images/thumbnail.jpeg",
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Keyboard close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsLoading(true);
    }
  }, [isOpen]);

  return (
    <div className="flex justify-center p-6 md:p-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      {/* Thumbnail Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-400/50"
        aria-label="Watch video: Nature Water purity process"
        type="button"
      >
        <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-cyan-400">
          {/* Fixed Image Component */}
          <Image
            src={thumbnailUrl}
            alt="Nature Water Purity Process Video"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1280px"
            priority={true}
            quality={90}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
              <div className="relative bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-blue-700 ml-1 fill-current" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <p className="text-xs uppercase tracking-wider text-white font-medium">
                Watch Process
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-2xl mb-2">
              From Source
              <br />
              to Your Home
            </h2>

            <p className="text-sm text-blue-100 font-light max-w-md">
              14-stage purification process — trusted for 25 years.
            </p>
          </div>

          {/* Duration badge */}
          <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
            <p className="text-white text-xs font-medium">3:00</p>
          </div>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal"
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-50 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close video"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video container */}
          <div
            className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading state */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-400 z-10">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-white/40 border-t-white rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-white text-sm font-light">
                    Loading video...
                  </p>
                </div>
              </div>
            )}

            {/* YouTube Embed */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&controls=1`}
              title="Nature Water Purity Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* Keyboard hint */}
          <p className="absolute bottom-6 text-white/70 text-sm">
            Press{" "}
            <kbd className="px-2 py-1 bg-white/15 rounded text-white/90 font-mono text-xs">
              ESC
            </kbd>{" "}
            to close
          </p>
        </div>
      )}
    </div>
  );
}