import { usePresentation } from "@/hooks/use-presentation";
import { SlideNavigation } from "@/components/slide-navigation";
import { motion, AnimatePresence } from "framer-motion";

// Import all slides
import { Slide1Introduction } from "@/components/slides/slide-1-introduction";
import { Slide2BusinessCase } from "@/components/slides/slide-2-business-case";
import { Slide3MythBusting } from "@/components/slides/slide-3-myth-busting";
import { Slide4AIFamilyTree } from "@/components/slides/slide-4-ai-family-tree";
import { Slide5TechnicalConcepts } from "@/components/slides/slide-5-technical-concepts";
import { Slide6AIEvolution } from "@/components/slides/slide-6-ai-evolution";
import { Slide7HowAILearns } from "@/components/slides/slide-7-how-ai-learns";
import { Slide8AttentionMechanism } from "@/components/slides/slide-8-attention-mechanism";
import { Slide9GenerativeAITypes } from "@/components/slides/slide-9-generative-ai-types";
import { Slide10GPUvsCPU } from "@/components/slides/slide-10-gpu-vs-cpu";
import { Slide11DeploymentModels } from "@/components/slides/slide-11-deployment-models";
import { Slide12PromptRecipe } from "@/components/slides/slide-12-prompt-recipe";
import { Slide13RAG } from "@/components/slides/slide-13-rag";
import { Slide14GettingStarted } from "@/components/slides/slide-14-getting-started";

const slides = [
  { id: 1, title: "Introduction", component: Slide1Introduction },
  { id: 2, title: "Business Case", component: Slide2BusinessCase },
  { id: 3, title: "Myth Busting", component: Slide3MythBusting },
  { id: 4, title: "AI Family Tree", component: Slide4AIFamilyTree },
  { id: 5, title: "Technical Concepts", component: Slide5TechnicalConcepts },
  { id: 6, title: "AI Evolution", component: Slide6AIEvolution },
  { id: 7, title: "How AI Learns", component: Slide7HowAILearns },
  { id: 8, title: "Attention Mechanism", component: Slide8AttentionMechanism },
  { id: 9, title: "Generative AI Types", component: Slide9GenerativeAITypes },
  { id: 10, title: "GPU vs CPU", component: Slide10GPUvsCPU },
  { id: 11, title: "Deployment Models", component: Slide11DeploymentModels },
  { id: 12, title: "Prompt Recipe", component: Slide12PromptRecipe },
  { id: 13, title: "RAG", component: Slide13RAG },
  { id: 14, title: "Getting Started", component: Slide14GettingStarted },
];

export default function Presentation() {
  const {
    currentSlide,
    totalSlides,
    progress,
    goToSlide,
    nextSlide,
    prevSlide,
    canGoNext,
    canGoPrev
  } = usePresentation(slides);

  const CurrentSlideComponent = slides[currentSlide - 1]?.component;

  return (
    <div className="presentation-container">
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        progress={progress}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onGoToSlide={goToSlide}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
      />

      <main className="pt-20 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="slide-container"
          >
            {CurrentSlideComponent && <CurrentSlideComponent />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
