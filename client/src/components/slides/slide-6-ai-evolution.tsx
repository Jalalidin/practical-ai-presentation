import { motion } from "framer-motion";
import { Calculator, Lightbulb, Zap } from "lucide-react";

export function Slide6AIEvolution() {
  const stages = [
    {
      icon: Calculator,
      period: "Past",
      title: "Traditional AI",
      subtitle: "Calculator",
      description: "Smart but rigid - rule-based systems that followed programmed instructions",
      color: "from-gray-500 to-gray-600",
      bgColor: "from-gray-500/20 to-gray-500/10"
    },
    {
      icon: Lightbulb,
      period: "Present",
      title: "Current AI",
      subtitle: "Brainstormer",
      description: "Pattern-recognizing systems that need guidance but can generate creative solutions",
      color: "from-blue-500 to-teal-500",
      bgColor: "from-blue-500/20 to-teal-500/10"
    },
    {
      icon: Zap,
      period: "Future 2025",
      title: "Agentic AI",
      subtitle: "Co-pilot",
      description: "Autonomous assistants that take action - you give goals, they execute plans",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/10"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Evolution
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From Calculator to Co-pilot
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500"></div>
          
          {/* Timeline stages */}
          <div className="grid md:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                className="relative text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (0.3 * index) }}
              >
                {/* Timeline dot */}
                <div className={`w-4 h-4 bg-gradient-to-r ${stage.color} rounded-full mx-auto mb-8 relative z-10`}></div>
                
                {/* Stage card */}
                <motion.div
                  className={`bg-gradient-to-br ${stage.bgColor} rounded-3xl p-8 border border-white/10`}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-gray-400 mb-2">{stage.period}</div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${stage.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <stage.icon className="text-white h-8 w-8" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                    {stage.title}
                  </h3>
                  
                  <div className={`text-lg font-medium mb-4 bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                    {stage.subtitle}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Future possibilities */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 max-w-3xl mx-auto border border-purple-500/30">
            <h3 className="text-xl font-semibold mb-4">The Shift</h3>
            <p className="text-lg text-gray-300 mb-4">
              From <span className="text-blue-400 font-semibold">passive tool</span> to <span className="text-purple-400 font-semibold">active assistant</span>
            </p>
            <p className="text-gray-400">
              Instead of asking for ideas, you'll give AI a goal and it takes action. 
              The future holds AGI - human-level intelligence across all domains - but today's AI is already transformative.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
