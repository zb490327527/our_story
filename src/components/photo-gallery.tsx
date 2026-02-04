"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  date: string;
  description: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-sm tracking-widest text-muted-foreground uppercase mb-10">
            我们的回忆
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openLightbox(photo, index)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                type="button"
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.description}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") goToPrevious();
            if (e.key === "ArrowRight") goToNext();
          }}
          role="dialog"
          aria-modal="true"
          tabIndex={0}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
            type="button"
            aria-label="关闭"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 p-2 rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
            type="button"
            aria-label="上一张"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 p-2 rounded-full bg-background/20 text-background hover:bg-background/30 transition-colors"
            type="button"
            aria-label="下一张"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card">
              <Image
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.description}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-background/70 mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{selectedPhoto.date}</span>
              </div>
              <p className="text-background text-lg">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
