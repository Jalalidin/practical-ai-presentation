import { motion } from "framer-motion";
import { MessageCircle, Brain, Search, Sparkles } from "lucide-react";
import { useState } from "react";

export function Slide1Introduction() {
  const [pollVotes, setPollVotes] = useState({
    chatgpt: 85,
    claude: 45,
    other: 25
  });

  const handlePollVote = (option: keyof typeof pollVotes) => {
    setPollVotes(prev => ({
      ...prev,
      [option]: prev[option] + 1
    }));
  };

  const tools = [
    { icon: MessageCircle, name: "ChatGPT", color: "from-blue-500 to-blue-600", delay: 0 },
    { icon: Brain, name: "Claude", color: "from-teal-500 to-teal-600", delay: 0.2 },
    { icon: Search, name: "Perplexity", color: "from-purple-500 to-purple-600", delay: 0.4 },
    { icon: Sparkles, name: "More Tools", color: "from-yellow-500 to-yellow-600", delay: 0.6 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text">
            Practical AI
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-12 text-gray-300">
            Beyond ChatGPT
          </h2>
        </motion.div>
        
        {/* AI Tools Icons */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tool.delay }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <tool.icon className="text-white text-xl" />
              </div>
              <p className="text-sm font-medium">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Interactive Poll */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-xl font-semibold mb-6">Quick Poll: Which AI tools have you used?</h3>
          <div className="space-y-3">
            {[
              { key: 'chatgpt' as const, label: 'ChatGPT', color: 'bg-blue-500' },
              { key: 'claude' as const, label: 'Claude', color: 'bg-teal-500' },
              { key: 'other' as const, label: 'Other Tools', color: 'bg-purple-500' }
            ].map((option) => (
              <motion.div 
                key={option.key}
                className="bg-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/20 transition-colors"
                onClick={() => handlePollVote(option.key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center">
                  <span>{option.label}</span>
                  <div className="w-32 bg-white/20 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className={`${option.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${pollVotes[option.key]}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-sm">{pollVotes[option.key]}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
