import { useState, useEffect, useCallback } from "react";

export interface Slide {
  id: number;
  title: string;
  component: React.ComponentType;
}

export function usePresentation(slides: Slide[]) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = slides.length;

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber < 1 || slideNumber > totalSlides) return;
    setCurrentSlide(slideNumber);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const progress = (currentSlide / totalSlides) * 100;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(totalSlides);
          break;
        case 'Escape':
          e.preventDefault();
          // Could add fullscreen exit logic here
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  return {
    currentSlide,
    totalSlides,
    progress,
    goToSlide,
    nextSlide,
    prevSlide,
    canGoNext: currentSlide < totalSlides,
    canGoPrev: currentSlide > 1
  };
}
