"use client";

import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = { src: string; alt: string };

export default function PortfolioLightbox({
  open,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}: {
  open: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onIndexChange: (i: number) => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndexChange(prevIndex);
      if (e.key === "ArrowRight") onIndexChange(nextIndex);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, currentIndex, prevIndex, nextIndex, onClose, onIndexChange]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const img = images[currentIndex];
  if (!img) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={() => onIndexChange(prevIndex)}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white md:left-4"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="relative max-h-[85vh] w-full max-w-5xl flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[80vh] w-auto max-w-full object-contain"
          loading="eager"
          decoding="async"
          draggable={false}
        />
        <p className="mt-2 text-center text-sm text-white/80" id="lightbox-caption">
          {img.alt}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onIndexChange(nextIndex)}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white md:right-4"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
