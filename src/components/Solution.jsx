import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Briefcase, TrendingUp, Calendar, Users, ThumbsUp } from 'lucide-react';

export default function Solution() {
  const solutions = [
    {
      icon: BarChart,
      title: "Diagnóstico financeiro detalhado"
    },
    {
      icon: Briefcase,
      title: "Simulações reais com diferentes instituições"
    },
    {
      icon: TrendingUp,
      title: "Comparativo entre crédito, consórcio e financiamento"
    },
    {
      icon: Calendar,
      title: "Roteiro com prazos, valores e estratégias de adesão"
    },
    {
      icon: Users,
      title: "Atendimento humanizado e consultivo"
    }
  ];

  return (
    <section id="solution" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Na Garanto, você não compra um produto. Você recebe um plano.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nós não empurramos soluções. Entregamos um caminho claro:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 text-center shadow-custom card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-semibold text-gray-800 flex items-center justify-center space-x-3">
            <ThumbsUp className="w-8 h-8 text-primary-600" />
            <span>Planejar com a Garanto é entender antes de assinar.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}