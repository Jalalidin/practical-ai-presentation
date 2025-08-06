import { motion } from "framer-motion";
import { TrendingUp, Package, Users, Languages, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Slide2BusinessCase() {
  const stats = [
    {
      icon: TrendingUp,
      value: "15-20%",
      label: "Cost Reduction",
      description: "Average operational savings",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Package,
      value: "35%",
      label: "Inventory Optimization", 
      description: "Improved efficiency",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Users,
      value: "65%",
      label: "Service Improvement",
      description: "Customer satisfaction boost",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: Languages,
      title: "Translation Costs",
      description: "50-70% reduction in professional translation expenses",
      color: "text-blue-400"
    },
    {
      icon: Rocket,
      title: "Content Creation",
      description: "3-5x faster marketing content generation",
      color: "text-teal-400"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Why AI Matters Now
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real numbers from organizations using AI effectively
          </p>
        </motion.div>
        
        {/* Statistics Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <motion.h3 
                className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + (0.1 * index) }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-lg font-medium mb-2">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Benefits */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + (0.1 * index) }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <benefit.icon className={benefit.color} />
                <span className="font-semibold">{benefit.title}</span>
              </div>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Interactive Element */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-500/30">
            <h3 className="text-xl font-semibold mb-4">Show of Hands</h3>
            <p className="text-lg mb-6">Who would like to achieve similar results in your work?</p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white/20 hover:bg-white/30 border border-white/20">
                🙋‍♀️ Count me in!
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                🤔 Tell me more
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
