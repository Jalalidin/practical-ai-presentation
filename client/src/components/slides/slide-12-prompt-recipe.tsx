import { motion } from "framer-motion";
import { VenetianMask, MapPin, CheckCircle, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Slide12PromptRecipe() {
  const [showDemo, setShowDemo] = useState(false);

  const recipeSteps = [
    {
      icon: VenetianMask,
      title: "ROLE",
      description: "Tell AI who to be",
      example: "Act as a world-class copywriter",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-500/10"
    },
    {
      icon: MapPin,
      title: "CONTEXT", 
      description: "Provide background information",
      example: "My audience is new homeowners aged 25-35",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-500/20 to-teal-500/10"
    },
    {
      icon: CheckCircle,
      title: "TASK",
      description: "Specify exact requirements",
      example: "Write 3 email subject lines under 10 words with professional tone",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-500/10"
    }
  ];

  const badPrompt = "Write me some marketing copy";
  const goodPrompt = "Act as a world-class copywriter. My audience is new homeowners aged 25-35 who just bought their first house. Write 3 email subject lines under 10 words with a professional yet friendly tone that promotes our home maintenance app.";

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
            Perfect Prompt Recipe
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The 3-Part Formula for Better Results
          </p>
        </motion.div>
        
        {/* 3-Part Formula */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {recipeSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 text-center border border-white/10`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="text-white h-10 w-10" />
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                {step.title}
              </h3>
              
              <p className="text-gray-300 mb-6">{step.description}</p>
              
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-sm text-gray-400 italic">"{step.example}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Before/After Demo */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Bad Prompt */}
          <motion.div
            className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <X className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-red-400">VAGUE PROMPT</h3>
            </div>
            
            <div className="bg-black/30 rounded-xl p-4 mb-4">
              <p className="text-gray-300 font-mono text-sm">"{badPrompt}"</p>
            </div>
            
            <div className="text-red-400 text-sm flex items-center">
              <X className="h-4 w-4 mr-2" />
              No role, context, or specific requirements
            </div>
            
            <div className="mt-4 p-4 bg-red-500/10 rounded-xl">
              <div className="text-xs text-red-400 mb-2">Typical Result:</div>
              <p className="text-xs text-gray-400">
                Generic, unhelpful marketing copy that doesn't fit your audience or goals.
              </p>
            </div>
          </motion.div>
          
          {/* Good Prompt */}
          <motion.div
            className="bg-green-500/10 border border-green-500/30 rounded-3xl p-8"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Check className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-green-400">SPECIFIC PROMPT</h3>
            </div>
            
            <div className="bg-black/30 rounded-xl p-4 mb-4 max-h-32 overflow-y-auto">
              <p className="text-gray-300 font-mono text-xs leading-relaxed">"{goodPrompt}"</p>
            </div>
            
            <div className="text-green-400 text-sm flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Clear role + context + specific task
            </div>
            
            <div className="mt-4 p-4 bg-green-500/10 rounded-xl">
              <div className="text-xs text-green-400 mb-2">Expected Result:</div>
              <div className="text-xs text-gray-300 space-y-1">
                <div>• "Your First Home Deserves Perfect Care"</div>
                <div>• "Home Maintenance Made Simple and Smart"</div>
                <div>• "Never Miss Home Care Again"</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Interactive Demo Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 max-w-3xl mx-auto border border-blue-500/30">
            <h3 className="text-xl font-semibold mb-6">See the Difference</h3>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                The same request with different levels of specificity produces dramatically different results.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-500/20 rounded-xl p-4">
                  <div className="font-semibold text-blue-400 mb-2">Role</div>
                  <p className="text-gray-300">Sets expertise level</p>
                </div>
                <div className="bg-teal-500/20 rounded-xl p-4">
                  <div className="font-semibold text-teal-400 mb-2">Context</div>
                  <p className="text-gray-300">Provides background</p>
                </div>
                <div className="bg-purple-500/20 rounded-xl p-4">
                  <div className="font-semibold text-purple-400 mb-2">Task</div>
                  <p className="text-gray-300">Defines deliverable</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              onClick={() => setShowDemo(!showDemo)}
            >
              {showDemo ? 'Hide' : 'Try Live Demo'}
            </Button>
            
            {showDemo && (
              <motion.div
                className="mt-6 p-6 bg-black/20 rounded-2xl"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm text-gray-400 mb-4">
                  This is where you'd integrate with an AI API to show real-time results
                </p>
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="text-xs text-green-400 mb-2">Sample Output:</div>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div>✨ "Your Dream Home Needs Expert Care"</div>
                    <div>✨ "Homeowner's Best Friend: Smart Maintenance"</div>
                    <div>✨ "Protect Your Investment Effortlessly"</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
