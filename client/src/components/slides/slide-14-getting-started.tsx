import { motion } from "framer-motion";
import { MessageCircle, Search, Languages, Code, Mic, Presentation, Zap, ExternalLink, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Slide14GettingStarted() {
  const toolCategories = [
    {
      category: "Writing & Research",
      tools: [
        { name: "ChatGPT", description: "General purpose AI assistant", icon: MessageCircle, free: true, url: "https://chat.openai.com" },
        { name: "Claude", description: "Advanced reasoning and analysis", icon: MessageCircle, free: true, url: "https://claude.ai" },
        { name: "Perplexity", description: "AI-powered search with sources", icon: Search, free: true, url: "https://perplexity.ai" }
      ],
      color: "from-blue-500 to-teal-500"
    },
    {
      category: "Translation & Language",
      tools: [
        { name: "DeepL", description: "Professional translation", icon: Languages, free: true, url: "https://deepl.com" },
        { name: "Grammarly", description: "Writing enhancement", icon: MessageCircle, free: true, url: "https://grammarly.com" }
      ],
      color: "from-teal-500 to-green-500"
    },
    {
      category: "Development",
      tools: [
        { name: "Cursor", description: "AI-powered code editor", icon: Code, free: true, url: "https://cursor.sh" },
        { name: "GitHub Copilot", description: "AI pair programmer", icon: Code, free: false, url: "https://github.com/features/copilot" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Presentation & Media",
      tools: [
        { name: "Gamma", description: "AI presentation maker", icon: Presentation, free: true, url: "https://gamma.app" },
        { name: "Otter.ai", description: "Meeting transcription", icon: Mic, free: true, url: "https://otter.ai" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const professionRecommendations = [
    {
      profession: "Foreign Traders",
      tools: ["DeepL for translation", "Perplexity for market research", "ChatGPT for contract analysis"],
      icon: "🌍"
    },
    {
      profession: "Educators", 
      tools: ["ChatGPT for lesson plans", "Grammarly for content", "Gamma for presentations"],
      icon: "📚"
    },
    {
      profession: "Psychologists",
      tools: ["Claude for research", "Perplexity for literature review", "ChatGPT for documentation"],
      icon: "🧠"
    },
    {
      profession: "Marketers",
      tools: ["ChatGPT for copy", "Gamma for decks", "Claude for strategy"],
      icon: "📈"
    }
  ];

  const learningResources = [
    { name: "OpenAI Documentation", url: "https://platform.openai.com/docs" },
    { name: "Anthropic Claude Guide", url: "https://docs.anthropic.com" },
    { name: "Prompt Engineering Guide", url: "https://promptengineering.org" },
    { name: "AI Tool Directory", url: "https://theresanaiforthat.com" }
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Getting Started
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools and Resources to Begin Your AI Journey
          </p>
        </motion.div>
        
        {/* Tool Categories */}
        <motion.div 
          className="space-y-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (categoryIndex * 0.2) }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    className={`bg-gradient-to-br ${category.color.replace('500', '500/20')} rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer`}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (categoryIndex * 0.2) + (toolIndex * 0.1) }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                        <tool.icon className="text-white h-6 w-6" />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {tool.free && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                            Free
                          </span>
                        )}
                        <ExternalLink className="text-gray-400 h-4 w-4 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                    <p className="text-gray-300 text-sm">{tool.description}</p>
                    
                    {/* QR Code placeholder */}
                    <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                        <QrCode className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Profession-Specific Recommendations */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Recommendations by Profession</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionRecommendations.map((rec, index) => (
              <motion.div
                key={rec.profession}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{rec.icon}</div>
                  <h3 className="font-bold text-lg">{rec.profession}</h3>
                </div>
                
                <div className="space-y-2">
                  {rec.tools.map((tool, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-300">
                      <Zap className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Learning Resources & Next Steps */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {/* Learning Resources */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
            <div className="space-y-4">
              {learningResources.map((resource, index) => (
                <motion.div
                  key={resource.name}
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + (index * 0.1) }}
                  onClick={() => window.open(resource.url, '_blank')}
                >
                  <span className="font-medium">{resource.name}</span>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Getting Started Steps */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Next Steps</h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Pick One Tool", description: "Start with ChatGPT or Claude - don't try everything at once" },
                { step: 2, title: "Practice Prompting", description: "Use the 3-part formula: Role + Context + Task" },
                { step: 3, title: "Experiment Safely", description: "Try with non-sensitive data first" },
                { step: 4, title: "Measure Impact", description: "Track time saved and quality improvements" },
                { step: 5, title: "Scale Gradually", description: "Add more tools as you become comfortable" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 + (index * 0.1) }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 max-w-2xl mx-auto border border-blue-500/30">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-6">
              The AI revolution is here. The question isn't whether you'll use AI - it's when you'll start.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                onClick={() => window.open('https://chat.openai.com', '_blank')}
              >
                Try ChatGPT Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 hover:bg-white/10"
                onClick={() => window.open('https://claude.ai', '_blank')}
              >
                Try Claude
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Both have free versions - no pressure, just explore what might be useful for your work
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
