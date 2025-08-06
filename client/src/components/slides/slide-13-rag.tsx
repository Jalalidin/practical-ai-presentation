import { motion } from "framer-motion";
import { BookOpen, Brain, FileText, Upload, Database, Lightbulb } from "lucide-react";

export function Slide13RAG() {
  const ragSteps = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Company manuals, research papers, client data, curriculum standards",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Knowledge Base",
      description: "AI indexes and stores your information for quick retrieval",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: "Enhanced Responses",
      description: "AI combines general knowledge with your specific information",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const examples = [
    {
      profession: "Psychologist",
      upload: "Patient notes & research papers",
      result: "Personalized treatment recommendations",
      icon: Brain,
      color: "text-blue-400"
    },
    {
      profession: "Teacher",
      upload: "Curriculum standards & lesson plans",
      result: "Standards-aligned educational content",
      icon: BookOpen,
      color: "text-teal-400"
    },
    {
      profession: "Trader",
      upload: "Market data & trading strategies",
      result: "Data-driven investment insights",
      icon: FileText,
      color: "text-purple-400"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            RAG
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Giving AI Your Brain
          </p>
        </motion.div>
        
        {/* Open Book Exam Metaphor */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 max-w-3xl mx-auto border border-blue-500/30">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
              animate={{ 
                rotateY: [0, 180, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <BookOpen className="text-white h-10 w-10" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">Think of it as an Open-Book Exam</h2>
            <p className="text-lg text-gray-300 mb-4">
              Instead of relying only on what AI learned during training, RAG lets it consult your documents in real-time.
            </p>
            <div className="bg-black/20 rounded-2xl p-4">
              <p className="text-sm text-gray-400 italic">
                "Suddenly, it's not just any AI - it's YOUR AI, trained on your materials, understanding your context."
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* RAG Process Steps */}
        <motion.div 
          className="relative max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 opacity-30"></div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {ragSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Step number dot on line */}
                <div className="hidden lg:block absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="text-white h-10 w-10" />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* AI Brain + Filing Cabinet Visualization */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative">
            {/* AI Brain */}
            <motion.div
              className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center relative z-10"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 0 rgba(168, 85, 247, 0)',
                  '0 0 30px rgba(168, 85, 247, 0.4)',
                  '0 0 0 rgba(168, 85, 247, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Brain className="text-white h-16 w-16" />
            </motion.div>
            
            {/* Connection */}
            <motion.div
              className="absolute top-1/2 left-full w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            
            {/* Filing Cabinet */}
            <motion.div
              className="absolute top-1/2 left-full ml-16 transform -translate-y-1/2 w-24 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Database className="text-white h-12 w-12" />
            </motion.div>
            
            {/* Floating documents */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-8 bg-white/20 rounded-sm"
                style={{
                  top: `${30 + (i * 15)}%`,
                  right: `${-10 + (i * 5)}%`
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  delay: 1.5 + (i * 0.3),
                  repeat: Infinity
                }}
              >
                <FileText className="text-white h-6 w-6" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Real-world Examples */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {examples.map((example, index) => (
            <motion.div
              key={example.profession}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + (0.1 * index) }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <example.icon className={`${example.color} h-6 w-6`} />
                <h3 className="font-semibold">{example.profession}</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Uploads:</div>
                  <div className="text-sm text-gray-300">{example.upload}</div>
                </div>
                
                <div className="border-t border-gray-600 pt-3">
                  <div className="text-xs text-green-400 mb-1">Result:</div>
                  <div className="text-sm text-gray-300">{example.result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Key Insight */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 max-w-2xl mx-auto border border-yellow-500/30">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">The Magic of RAG</h3>
            <p className="text-gray-300">
              RAG transforms generic AI into a domain expert that knows your business, your data, 
              and your context. It's the difference between asking a stranger and consulting your most knowledgeable colleague.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
