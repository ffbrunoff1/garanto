import React from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, Shield, Lightbulb } from 'lucide-react';

export default function ForWho() {
  const audience = [
    {
      icon: Home,
      text: "Quer comprar um bem com economia"
    },
    {
      icon: DollarSign,
      text: "Precisa levantar capital com segurança"
    },
    {
      icon: Shield,
      text: "Busca proteger sua família ou empresa"
    },
    {
      icon: Lightbulb,
      text: "Não quer mais agir no escuro quando o assunto é dinheiro"
    }
  ];

  return (
    <section id="for-who" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Garanto é para você que:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audience.map((item, index) => {
            const IconComponent = item.icon;
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
                <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}