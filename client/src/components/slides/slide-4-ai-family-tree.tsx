import { motion } from "framer-motion";
import { Bot, BarChart3, Brain, MessageCircle } from "lucide-react";

export function Slide4AIFamilyTree() {
  const concepts = [
    {
      icon: Bot,
      title: "Artificial Intelligence",
      description: "The broadest concept - computers performing tasks that typically require human intelligence",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400"
    },
    {
      icon: BarChart3,
      title: "Machine Learning",
      description: "Systems that learn from data to make predictions or decisions without explicit programming",
      color: "from-teal-500 to-teal-600",
      textColor: "text-teal-400"
    },
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Neural networks with multiple layers that can learn complex patterns from data",
      color: "from-purple-500 to-purple-600",
      textColor: "text-purple-400"
    },
    {
      icon: MessageCircle,
      title: "Natural Language Processing",
      description: "The skill that enables AI to understand and generate human language",
      color: "from-yellow-500 to-yellow-600",
      textColor: "text-yellow-400"
    }
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            The AI Family Tree
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding AI like Russian Nesting Dolls
          </p>
        </motion.div>
        
        {/* Nesting Dolls Visualization */}
        <motion.div 
          className="relative max-w-4xl mx-auto mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Outer Doll - AI */}
          <div className="relative w-96 h-96 bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-full p-12 border-4 border-blue-500/50 flex items-start justify-center">
            <motion.div 
              className="absolute top-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-blue-400">Artificial Intelligence</h3>
              <p className="text-xs text-gray-300">Computers doing human-like tasks</p>
            </motion.div>
            
            {/* Middle Doll - ML */}
            <div className="relative w-64 h-64 bg-gradient-to-br from-teal-500/40 to-teal-500/20 rounded-full p-8 border-4 border-teal-500/50 flex items-start justify-center">
              <motion.div 
                className="absolute top-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h4 className="text-base font-bold text-teal-400">Machine Learning</h4>
                <p className="text-xs text-gray-300">Pattern recognition</p>
              </motion.div>
              
              {/* Inner Doll - Deep Learning */}
              <div className="relative w-40 h-40 bg-gradient-to-br from-purple-500/50 to-purple-500/30 rounded-full p-4 border-4 border-purple-500/50 flex items-start justify-center">
                <motion.div 
                  className="absolute top-4 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <h5 className="text-sm font-bold text-purple-400">Deep Learning</h5>
                  <p className="text-xs text-gray-300">Neural networks</p>
                </motion.div>
                
                {/* Core - NLP */}
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/60 to-orange-400/40 rounded-full border-4 border-yellow-400/50 flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    <h6 className="text-xs font-bold text-yellow-300">NLP</h6>
                    <p className="text-xs text-gray-300">Language</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Explanation Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              className={`bg-gradient-to-br ${concept.color.replace('500', '500/20')} backdrop-blur-sm rounded-2xl p-6 border border-white/10`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${concept.color} rounded-xl flex items-center justify-center mb-4`}>
                <concept.icon className="text-white h-6 w-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${concept.textColor}`}>{concept.title}</h3>
              <p className="text-gray-300 text-sm">{concept.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
