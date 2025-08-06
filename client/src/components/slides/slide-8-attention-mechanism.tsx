import { motion } from "framer-motion";
import { Sparkle, Highlighter, Focus, Zap } from "lucide-react";

export function Slide8AttentionMechanism() {
  const highlighters = [
    { color: "bg-red-500", label: "Subject", focus: "The cat" },
    { color: "bg-blue-500", label: "Action", focus: "sat on" },
    { color: "bg-green-500", label: "Object", focus: "the mat" },
    { color: "bg-purple-500", label: "Context", focus: "relationships" },
    { color: "bg-yellow-500", label: "Grammar", focus: "sentence structure" },
    { color: "bg-pink-500", label: "Meaning", focus: "semantic understanding" }
  ];

  const sampleText = "The cat sat on the mat while the dog watched from the window.";
  const words = sampleText.split(' ');

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            The Magic of Attention
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six Highlighters Working at Once
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Theater Sparkle Metaphor */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Sparkle className="mr-3 text-yellow-400" />
                Smart Sparkle Theater
              </h2>
              <p className="text-gray-300">Focusing on what matters most</p>
            </div>
            
            {/* Stage visualization */}
            <div className="bg-black rounded-2xl p-8 border border-gray-600 relative overflow-hidden">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-400">AI's Attention Stage</div>
              </div>
              
              {/* Stage with spotlights */}
              <div className="relative bg-gray-900 rounded-xl p-6 h-32">
                {/* Multiple spotlight effects */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(circle, ${['#fbbf24', '#3b82f6', '#10b981'][i]}40 0%, transparent 70%)`,
                      left: `${20 + (i * 25)}%`,
                      top: '20%'
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity
                    }}
                  />
                ))}
                
                {/* Words on stage */}
                <div className="flex justify-center items-center h-full space-x-2 text-sm">
                  {['Subject', 'Verb', 'Object', 'Context'].map((word, i) => (
                    <motion.div
                      key={word}
                      className="px-3 py-1 bg-white/10 rounded-full"
                      animate={{
                        backgroundColor: ['rgba(255,255,255,0.1)', 'rgba(59,130,246,0.3)', 'rgba(255,255,255,0.1)']
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      {word}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                AI simultaneously focuses on multiple aspects of input
              </p>
            </div>
          </motion.div>
          
          {/* Six Highlighters Demonstration */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Highlighter className="mr-3 text-blue-400" />
                Six Highlighters at Once
              </h2>
              <p className="text-gray-300">Parallel processing of information</p>
            </div>
            
            {/* Sample text with highlighting */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-600">
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Sample Text Analysis:</h3>
                <div className="bg-black rounded-xl p-4 text-sm">
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-1 px-1 rounded transition-colors cursor-pointer"
                      whileHover={{ 
                        backgroundColor: index % 6 === 0 ? '#ef444440' : 
                                       index % 6 === 1 ? '#3b82f640' : 
                                       index % 6 === 2 ? '#10b98140' : 
                                       index % 6 === 3 ? '#8b5cf640' : 
                                       index % 6 === 4 ? '#eab30840' : '#ec489640' 
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Highlighter legend */}
            <div className="grid grid-cols-2 gap-3">
              {highlighters.map((highlighter, index) => (
                <motion.div
                  key={highlighter.label}
                  className={`flex items-center p-3 rounded-xl border ${highlighter.color.replace('bg-', 'border-')} bg-gray-800/50`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (0.1 * index) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-4 h-4 ${highlighter.color} rounded-full mr-3`}></div>
                  <div>
                    <h4 className="font-semibold text-sm">{highlighter.label}</h4>
                    <p className="text-xs text-gray-400">{highlighter.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-start space-x-3">
                <Focus className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">Parallel Processing Power</h3>
                  <p className="text-sm text-gray-300">
                    The attention mechanism allows AI to weigh the importance of different parts simultaneously. 
                    It's like having six expert readers analyzing the same text at once, each focusing on 
                    their specialty - subject, grammar, context, relationships, meaning, and structure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
