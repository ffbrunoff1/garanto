import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, DollarSign, ShieldOff } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: XCircle,
      title: "Financiamentos com juros altos",
      description: "Muitas vezes, a falta de informação leva a contratos desvantajosos."
    },
    {
      icon: DollarSign,
      title: "Consórcios que nunca contemplam",
      description: "Sem estratégia, a contemplação pode demorar muito ou não acontecer."
    },
    {
      icon: ShieldOff,
      title: "Seguros que não cobrem o essencial",
      description: "Apólices inadequadas deixam você e seu patrimônio desprotegidos."
    }
  ];

  return (
    <section id="problem" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Você sente insegurança ao contratar produtos financeiros?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Essas escolhas equivocadas costumam surgir da falta de planejamento e comparação.
            Na Garanto, nosso objetivo é impedir que você perca dinheiro por falta de informação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 text-center shadow-custom card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}