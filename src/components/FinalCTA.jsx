import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function FinalCTA() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="final-cta" className="section-padding bg-gradient-to-br from-primary-600 to-accent-600 text-white">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-bold mb-6"
        >
          Quer parar de perder dinheiro e começar a planejar de verdade?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Agende seu Diagnóstico com a Garanto agora e receba um plano estratégico para seus objetivos pessoais ou empresariais.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="bg-white text-primary-600 px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto space-x-2"
        >
          <ArrowUp className="w-5 h-5" />
          <span>Sim, quero clareza financeira</span>
        </motion.button>
      </div>
    </section>
  );
}