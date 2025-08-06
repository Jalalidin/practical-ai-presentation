import { motion } from "framer-motion";
import { User, Users, Zap, Factory } from "lucide-react";

export function Slide10GPUvsCPU() {
  const cpuFeatures = [
    "Sequential Processing",
    "Complex Instructions",
    "Large Cache Memory",
    "Few Powerful Cores",
    "Optimized for Single Tasks"
  ];

  const gpuFeatures = [
    "Parallel Processing",
    "Simple Operations",
    "Smaller Cache",
    "Thousands of Cores",
    "Optimized for Repetitive Tasks"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            The Power Behind AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            GPU vs CPU Explained
          </p>
        </motion.div>
        
        {/* Main Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* CPU Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <User className="text-white h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-blue-400 mb-4">CPU</h2>
              <p className="text-xl text-gray-300">The Brilliant Mathematician</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-3xl p-8 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Single Worker Approach</h3>
              
              {/* CPU visualization */}
              <div className="bg-black/20 rounded-xl p-6 mb-6">
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: ['0 0 0 rgba(59,130,246,0)', '0 0 20px rgba(59,130,246,0.5)', '0 0 0 rgba(59,130,246,0)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <User className="text-white h-8 w-8" />
                  </motion.div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Solving problems one at a time</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {cpuFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center p-3 bg-white/5 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* GPU Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-white h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-green-400 mb-4">GPU</h2>
              <p className="text-xl text-gray-300">Team of Mathematicians</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-3xl p-8 border border-green-500/30">
              <h3 className="text-xl font-semibold mb-6 text-green-400">Parallel Processing Army</h3>
              
              {/* GPU visualization */}
              <div className="bg-black/20 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {Array.from({ length: 16 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: (i * 0.1) % 1,
                        repeat: Infinity 
                      }}
                    >
                      <User className="text-white h-4 w-4" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Thousands working simultaneously</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {gpuFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center p-3 bg-white/5 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Factory Analogy */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
            <div className="text-center mb-8">
              <Factory className="text-purple-400 h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Real-World Analogy</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-2xl p-6 mb-4">
                  <h3 className="font-bold text-blue-400 mb-3">Training Phase</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Factory className="text-blue-400 h-6 w-6" />
                    <span className="text-sm">GPU Factory</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Massive parallel processing to build the AI brain from billions of calculations
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-2xl p-6 mb-4">
                  <h3 className="font-bold text-green-400 mb-3">Inference Phase</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <User className="text-green-400 h-6 w-6" />
                    <span className="text-sm">CPU Assistant</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Smart, efficient processing for everyday AI interactions and responses
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 p-6 bg-black/20 rounded-2xl">
              <Zap className="text-yellow-400 h-8 w-8 mx-auto mb-4" />
              <p className="text-lg text-gray-300">
                <strong>Key Insight:</strong> GPUs build the AI brain through parallel processing power. 
                CPUs run the trained AI efficiently for daily use. Both are essential for modern AI!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
