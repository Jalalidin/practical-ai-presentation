import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Maximize, Bot } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  progress: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (slide: number) => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  progress,
  onPrevious,
  onNext,
  onGoToSlide,
  canGoPrev,
  canGoNext
}: SlideNavigationProps) {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Bot className="text-white text-sm" />
            </div>
            <span className="text-lg font-semibold">Practical AI</span>
          </div>
          
          {/* Progress Bar */}
          <div className="flex-1 max-w-md mx-8">
            <Progress value={progress} className="w-full h-2" />
            <div className="text-xs text-gray-300 mt-1 text-center">
              <span>{currentSlide}</span> / <span>{totalSlides}</span>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrevious}
              disabled={!canGoPrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              disabled={!canGoNext}
              className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
            >
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Slide Indicator Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((slide) => (
            <button
              key={slide}
              onClick={() => onGoToSlide(slide)}
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                slide === currentSlide
                  ? 'w-3 h-3 bg-blue-500'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${slide}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
