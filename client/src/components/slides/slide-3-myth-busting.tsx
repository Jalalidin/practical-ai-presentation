import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Slide3MythBusting() {
  const [selectedMyth, setSelectedMyth] = useState<string | null>(null);

  const myths = [
    {
      myth: "AI is only for big companies with huge budgets",
      reality: "Many powerful AI tools have free versions. Start small, scale up."
    },
    {
      myth: "AI will replace all human professionals",
      reality: "AI enhances human capabilities. It's a powerful tool, not a replacement."
    },
    {
      myth: "You need technical expertise to use AI",
      reality: "Modern AI interfaces are intuitive. If you can type, you can use AI."
    },
    {
      myth: "AI tools are not available right now",
      reality: "Hundreds of AI tools are accessible today. The future is now."
    }
  ];

  const commonMyths = [
    "AI is too complicated for me",
    "AI will take my job",
    "AI is just hype",
    "AI is too expensive"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Myth Busting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What AI Really Is (And Isn't)
          </p>
        </motion.div>
        
        {/* Myth vs Reality Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {myths.map((item, index) => (
            <motion.div
              key={index}
              className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8 hover:bg-red-500/15 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <X className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-red-400">MYTH</h3>
              </div>
              <p className="text-lg mb-4">{item.myth}</p>
              
              <motion.div 
                className="border-t border-gray-600 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + (0.1 * index) }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <span className="text-green-400 font-semibold">REALITY</span>
                </div>
                <p className="text-gray-300">{item.reality}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Interactive Question */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 max-w-2xl mx-auto border border-blue-500/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">What AI myths have you heard?</h3>
          <div className="space-y-3">
            {commonMyths.map((myth, index) => (
              <Button
                key={myth}
                variant="ghost"
                className={`w-full justify-start p-4 h-auto text-left transition-all duration-300 ${
                  selectedMyth === myth 
                    ? 'bg-blue-500/30 border border-blue-500/50' 
                    : 'bg-white/10 hover:bg-white/20 border border-white/10'
                }`}
                onClick={() => setSelectedMyth(selectedMyth === myth ? null : myth)}
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {myth}
                </motion.span>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
