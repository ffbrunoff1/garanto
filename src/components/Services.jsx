import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, CreditCard, Shield, TrendingUp, Banknote } from 'lucide-react';

export default function Services() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Soluções financeiras completas, seguras e sob medida para cada objetivo.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Da pessoa física à empresa, a Garanto entrega clareza, estratégia e resultados reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Crédito com Garantia de Imóvel
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Levante capital sem vender seu patrimônio. Uma solução inteligente para quem precisa de recursos para capital de giro, expansão ou reorganização financeira.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Ideal para empresários e autônomos
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Taxas reduzidas e prazos longos
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Sem precisar se desfazer do bem
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Crédito Imobiliário
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Consultoria completa para aquisição de imóveis. A Garanto negocia com os principais bancos do país para encontrar as melhores condições e taxas do mercado.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Comparativo entre instituições
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Simulações reais e personalizadas
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Acompanhamento até a liberação do crédito
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Consórcio Estruturado
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Planejamento estratégico para quem quer comprar imóveis, veículos, máquinas ou investir, sem juros e com segurança.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Estratégia de lances e contemplação
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Grupos ativos e cartas contempladas
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Solução ideal para quem quer planejar com inteligência
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Seguros Personalizados
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Proteja o que realmente importa com soluções sob medida para pessoas e empresas.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Seguro de Vida Individual e em Grupo
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Seguro Saúde Empresarial (Bradesco Saúde)
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Seguro de Máquinas, Frota e Empresarial
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Seguro RC Profissional e Seguro Garantia
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Mentorias Financeiras
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Aprenda a usar o dinheiro e o crédito como ferramentas de crescimento. Raíza Brito conduz mentorias práticas e personalizadas para diferentes perfis.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Mentoria Profissional – para quem quer atuar no mercado financeiro
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Mentoria Pessoa Física – para reorganizar a vida financeira
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                Mentoria Empresarial – diagnóstico financeiro completo
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-semibold text-gray-300 mb-6">
            📲 Quer entender qual dessas soluções é ideal para você?
          </p>
          <p className="text-2xl font-bold text-white mb-8">
            👉 Clique abaixo e agende seu Diagnóstico Personalizado.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary-600 px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            🔘 Quero meu Diagnóstico
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}