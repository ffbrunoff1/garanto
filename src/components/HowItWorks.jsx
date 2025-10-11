import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Layout, CheckCircle, Globe } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Você preenche um breve formulário",
      description: "Comece nos contando um pouco sobre seus objetivos e necessidades financeiras."
    },
    {
      icon: Users,
      title: "Nossa equipe entra em contato para entender seu momento",
      description: "Um especialista Garanto fará uma análise aprofundada da sua situação."
    },
    {
      icon: Layout,
      title: "Criamos um plano com simulações e comparativos",
      description: "Apresentamos as melhores opções, com clareza e transparência."
    },
    {
      icon: CheckCircle,
      title: "Você escolhe a melhor solução com segurança e clareza",
      description: "Tome decisões informadas, com todo o suporte da Garanto."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como é feito seu Diagnóstico?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
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
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 flex items-center justify-center space-x-4"
        >
          <Globe className="w-10 h-10 text-primary-600" />
          <p className="text-2xl font-semibold text-gray-800">
            Tudo 100% online, com atendimento humano
          </p>
        </motion.div>
      </div>
    </section>
  );
}