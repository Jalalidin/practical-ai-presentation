import { motion } from "framer-motion";
import { Cloud, Smartphone, Plug, Settings } from "lucide-react";

export function Slide11DeploymentModels() {
  const deploymentModels = [
    {
      icon: Cloud,
      title: "Cloud AI",
      examples: "ChatGPT, Claude, Bard",
      pros: ["Most powerful models", "Always up-to-date", "No local hardware needed"],
      cons: ["Requires internet", "Data privacy concerns", "Usage costs"],
      analogy: "Like streaming Netflix",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-500/10"
    },
    {
      icon: Smartphone,
      title: "Local/Edge AI",
      examples: "Ollama, LM Studio, Apple Intelligence",
      pros: ["Complete privacy", "No internet needed", "Fast responses"],
      cons: ["Limited by hardware", "Less powerful models", "Storage required"],
      analogy: "Like downloaded movies",
      color: "from-green-500 to-green-600", 
      bgColor: "from-green-500/20 to-green-500/10"
    },
    {
      icon: Plug,
      title: "API Integration",
      examples: "OpenAI API, Anthropic API",
      pros: ["Embed in existing tools", "Scalable", "Custom applications"],
      cons: ["Development needed", "API costs", "Technical complexity"],
      analogy: "Like adding AI to your CRM",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-500/10"
    },
    {
      icon: Settings,
      title: "Fine-tuned/Custom",
      examples: "Custom GPTs, Fine-tuned models",
      pros: ["Specialized expertise", "Industry-specific", "Better accuracy"],
      cons: ["Higher cost", "Technical expertise", "Maintenance needed"],
      analogy: "Like hiring a specialist",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/10"
    }
  ];

  const tradeOffs = [
    { factor: "Power", cloud: 95, local: 60, api: 90, custom: 85 },
    { factor: "Privacy", cloud: 30, local: 95, api: 40, custom: 70 },
    { factor: "Speed", cloud: 70, local: 90, api: 80, custom: 75 },
    { factor: "Cost", cloud: 60, local: 85, api: 55, custom: 40 }
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
            AI Deployment Models
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cloud, Local, Edge, and Fine-tuning
          </p>
        </motion.div>
        
        {/* Deployment Models Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {deploymentModels.map((model, index) => (
            <motion.div
              key={model.title}
              className={`bg-gradient-to-br ${model.bgColor} rounded-3xl p-6 border border-white/10`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${model.color} rounded-2xl flex items-center justify-center mb-6`}>
                <model.icon className="text-white h-8 w-8" />
              </div>
              
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                {model.title}
              </h3>
              
              <div className="mb-4">
                <div className="text-xs text-gray-400 mb-1">Examples:</div>
                <div className="text-sm text-gray-300">{model.examples}</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-green-400 mb-2">Pros:</div>
                  <div className="space-y-1">
                    {model.pros.map((pro, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {pro}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-red-400 mb-2">Cons:</div>
                  <div className="space-y-1">
                    {model.cons.map((con, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
                        {con}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-black/20 rounded-xl">
                <div className="text-xs text-gray-400 mb-1">Like:</div>
                <div className="text-sm text-gray-300">{model.analogy}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trade-offs Comparison */}
        <motion.div 
          className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-3xl p-8 border border-gray-600"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Trade-offs Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-4 font-semibold">Factor</th>
                  <th className="text-center p-4 font-semibold text-blue-400">Cloud</th>
                  <th className="text-center p-4 font-semibold text-green-400">Local</th>
                  <th className="text-center p-4 font-semibold text-purple-400">API</th>
                  <th className="text-center p-4 font-semibold text-orange-400">Custom</th>
                </tr>
              </thead>
              <tbody>
                {tradeOffs.map((factor, index) => (
                  <motion.tr
                    key={factor.factor}
                    className="border-b border-gray-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + (0.1 * index) }}
                  >
                    <td className="p-4 font-medium">{factor.factor}</td>
                    {(['cloud', 'local', 'api', 'custom'] as const).map((type, i) => {
                      const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
                      const value = factor[type];
                      return (
                        <td key={type} className="p-4 text-center">
                          <div className="flex items-center justify-center">
                            <div className="w-20 bg-gray-600 rounded-full h-2 overflow-hidden">
                              <motion.div
                                className={`h-2 ${colors[i]} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${value}%` }}
                                transition={{ duration: 1, delay: 1.5 + (0.1 * i) }}
                              />
                            </div>
                            <span className="ml-2 text-sm text-gray-300">{value}%</span>
                          </div>
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8 p-4 bg-black/20 rounded-xl">
            <p className="text-sm text-gray-300">
              <strong>Choose based on your needs:</strong> Power, Privacy, Speed, or Customization. 
              Many organizations use a combination of these approaches.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
