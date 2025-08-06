import { motion } from "framer-motion";
import { Cherry, ChefHat, Layers, Eye } from "lucide-react";

export function Slide7HowAILearns() {
  const layers = [
    { name: "Color Detection", color: "bg-red-500", description: "Identifies red, yellow, green" },
    { name: "Texture Analysis", color: "bg-orange-500", description: "Checks for bruises, spots" },
    { name: "Size & Weight", color: "bg-yellow-500", description: "Measures dimensions" },
    { name: "Quality Rating", color: "bg-green-500", description: "Final classification" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            How AI Learns
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Mango Sorting Revolution
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mango Sorting Visualization */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Cherry className="mr-3 text-red-400" />
                Neural Network Layers
              </h2>
              <p className="text-gray-300">Each layer checks specific features</p>
            </div>
            
            {/* Conveyor Belt Animation */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-600">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-400">Input</span>
                <span className="text-sm text-gray-400">Processing Layers</span>
                <span className="text-sm text-gray-400">Output</span>
              </div>
              
              {/* Mangoes moving through layers */}
              <div className="relative overflow-hidden bg-gray-700 rounded-xl p-4 h-20 flex items-center">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full absolute"
                    initial={{ x: -50 }}
                    animate={{ x: 300 }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  />
                ))}
                
                {/* Processing stations */}
                {layers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className={`w-2 h-12 ${layer.color} rounded-full absolute`}
                    style={{ left: `${25 + (index * 15)}%`, top: '50%', transform: 'translateY(-50%)' }}
                  />
                ))}
              </div>
            </div>
            
            {/* Layer descriptions */}
            <div className="space-y-3">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  className={`flex items-center p-4 rounded-xl border ${layer.color.replace('bg-', 'border-')} bg-gray-800/50`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (0.1 * index) }}
                >
                  <div className={`w-4 h-4 ${layer.color} rounded-full mr-4`}></div>
                  <div>
                    <h4 className="font-semibold">{layer.name}</h4>
                    <p className="text-sm text-gray-400">{layer.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Chef Analogy */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <ChefHat className="mr-3 text-blue-400" />
                Restaurant Chef Analogy
              </h2>
              <p className="text-gray-300">Learning from millions of recipes</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 border border-blue-500/30">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Training Phase</h4>
                    <p className="text-sm text-gray-300">Chef learns from millions of recipes, understanding ingredients, techniques, and flavor combinations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Layers className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-400">Pattern Recognition</h4>
                    <p className="text-sm text-gray-300">Identifies patterns: what spices work together, cooking times, temperature relationships</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChefHat className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-400">Generation</h4>
                    <p className="text-sm text-gray-300">Creates new recipes by combining learned patterns - not copying, but recombining at superhuman scale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-600">
              <h3 className="text-lg font-semibold mb-3">Key Insight</h3>
              <p className="text-gray-300 text-sm">
                AI doesn't memorize or copy - it learns patterns and relationships from data, 
                then uses those patterns to generate new, relevant outputs. It's pattern recognition 
                and recombination at a scale impossible for humans.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
