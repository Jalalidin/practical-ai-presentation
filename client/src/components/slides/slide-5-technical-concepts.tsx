import { motion } from "framer-motion";
import { Database, Brain, MessageSquare, Settings, Plug, Coins, GraduationCap } from "lucide-react";

export function Slide5TechnicalConcepts() {
  const coreConcepts = [
    {
      icon: Database,
      title: "DATA",
      description: "Training material (billions of text examples, images, conversations)",
      analogy: "Like feeding a student millions of books before an exam",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "MODEL", 
      description: "The trained AI brain (GPT-4, Claude, etc.) with billions of parameters",
      analogy: "Like a graduate who studied everything and can answer questions",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: MessageSquare,
      title: "PROMPT",
      description: "Your instructions to the AI (the questions or tasks you give it)",
      analogy: "Like asking a consultant a specific, well-crafted question",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const technicalTerms = [
    {
      icon: Settings,
      title: "Parameters",
      description: "Billions of settings that control AI behavior (like knobs on a mixing board)",
      color: "bg-blue-500"
    },
    {
      icon: Plug,
      title: "API",
      description: "How software talks to AI (like a restaurant waiter taking your order to the kitchen)",
      color: "bg-teal-500"
    },
    {
      icon: Coins,
      title: "Tokens",
      description: "Units of text AI processes (~0.75 words each, like counting syllables)",
      color: "bg-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Teaching AI by showing it millions of examples (like studying for years)",
      color: "bg-yellow-500"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Your AI User Manual
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Core Technical Concepts Made Simple
          </p>
        </motion.div>
        
        {/* Core Concepts Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {coreConcepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              className={`bg-gradient-to-br ${concept.color.replace('500', '500/20')} rounded-3xl p-8 text-center border border-white/10`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${concept.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <concept.icon className="text-3xl text-white h-8 w-8" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${concept.color} bg-clip-text text-transparent`}>
                {concept.title}
              </h3>
              <p className="text-gray-300 mb-4">{concept.description}</p>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-sm text-gray-400">{concept.analogy}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Context Window Visualization */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl p-8 mb-8 border border-blue-500/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Context Window</h3>
            <div className="text-right">
              <p className="text-lg font-semibold text-teal-400">Up to 200 pages!</p>
              <p className="text-sm text-gray-400">AI's short-term memory</p>
            </div>
          </div>
          
          {/* Thermometer visualization */}
          <div className="relative bg-white/10 rounded-full h-8 overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '85%' }}
              transition={{ duration: 2, delay: 1 }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-4 text-sm font-medium">
              <span>1 page</span>
              <span className="text-teal-400">200 pages</span>
            </div>
          </div>
        </motion.div>
        
        {/* Technical Terms Glossary */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {technicalTerms.map((term, index) => (
            <motion.div
              key={term.title}
              className="bg-white/10 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + (0.1 * index) }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 ${term.color} rounded-lg flex items-center justify-center`}>
                  <term.icon className="text-sm text-white h-4 w-4" />
                </div>
                <h4 className="font-semibold">{term.title}</h4>
              </div>
              <p className="text-gray-300 text-sm">{term.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
