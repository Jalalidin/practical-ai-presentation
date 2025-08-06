import { motion } from "framer-motion";
import { MessageSquare, Zap, Camera, Layers, Box, Gamepad2 } from "lucide-react";

export function Slide9GenerativeAITypes() {
  const aiTypes = [
    {
      icon: MessageSquare,
      title: "Large Language Models (LLMs)",
      examples: "ChatGPT, Claude, GPT-4",
      description: "General purpose text generation and understanding",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-500/10"
    },
    {
      icon: Zap,
      title: "Small Language Models (SLMs)",
      examples: "Phi-3, Gemma, Llama 3.2",
      description: "Specialized, efficient AI for specific tasks",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/20 to-green-500/10"
    },
    {
      icon: Layers,
      title: "Multimodal AI",
      examples: "GPT-4V, Claude 3, Gemini",
      description: "Combines text, images, voice, and video processing",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-500/10"
    },
    {
      icon: Camera,
      title: "Computer Vision",
      examples: "YOLO, SAM, OpenCV",
      description: "AI that analyzes and understands images and videos",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-500/20 to-teal-500/10"
    },
    {
      icon: Gamepad2,
      title: "GANs (Generative Adversarial Networks)",
      examples: "StyleGAN, CycleGAN",
      description: "Two AIs competing - one generates, one discriminates",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/10"
    },
    {
      icon: Box,
      title: "3D AI",
      examples: "NeRF, Gaussian Splats, 3D GANs",
      description: "Creating and manipulating three-dimensional content",
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-500/20 to-purple-500/10"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Generative AI Types
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond Text - The Full AI Spectrum
          </p>
        </motion.div>
        
        {/* AI Types Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {aiTypes.map((type, index) => (
            <motion.div
              key={type.title}
              className={`bg-gradient-to-br ${type.bgColor} rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                <type.icon className="text-white h-8 w-8" />
              </div>
              
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${type.color} bg-clip-text text-transparent`}>
                {type.title}
              </h3>
              
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Examples:</div>
                <div className="text-sm font-medium text-gray-300">{type.examples}</div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* GAN Competition Visualization */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-500/30">
            <h2 className="text-2xl font-bold mb-6 text-center">GANs: AI vs AI Competition</h2>
            
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Generator */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-white h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Generator</h3>
                  <p className="text-gray-300 text-sm">Creates fake content trying to fool the discriminator</p>
                  <div className="mt-4 text-xs text-gray-400">
                    "I'll make this image so realistic!"
                  </div>
                </div>
                
                {/* Discriminator */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Camera className="text-white h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">Discriminator</h3>
                  <p className="text-gray-300 text-sm">Tries to spot fake content and distinguish from real</p>
                  <div className="mt-4 text-xs text-gray-400">
                    "That's fake! I can tell!"
                  </div>
                </div>
              </div>
              
              {/* VS Symbol - Centered between the two sections */}
              <div className="hidden md:flex absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center border-4 border-gray-800">
                  <span className="text-white font-bold text-sm">VS</span>
                </div>
              </div>
              
              {/* Mobile VS Symbol */}
              <div className="md:hidden flex justify-center my-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VS</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="text-center mt-8 p-4 bg-black/20 rounded-xl"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: ['0 0 0 rgba(59,130,246,0)', '0 0 20px rgba(59,130,246,0.3)', '0 0 0 rgba(59,130,246,0)']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <p className="text-sm text-gray-300">
                <strong>Result:</strong> They compete until the generator creates content so realistic 
                that the discriminator can't tell it's fake!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
