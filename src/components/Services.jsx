import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Banknote, Wallet, Clock, Star } from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Banknote,
      title: "Consultoria Financeira",
      description: "Análise completa da sua situação financeira atual e planejamento estratégico para alcançar seus objetivos de curto, médio e longo prazo.",
      features: [
        "Análise de perfil financeiro",
        "Planejamento estratégico",
        "Otimização de recursos",
        "Acompanhamento mensal"
      ],
      highlight: "Mais Procurado"
    },
    {
      icon: Shield,
      title: "Proteção Patrimonial",
      description: "Estratégias avançadas para proteger seu patrimônio contra riscos diversos, garantindo a segurança dos seus bens e investimentos.",
      features: [
        "Blindagem patrimonial",
        "Seguros personalizados",
        "Planejamento sucessório",
        "Gestão de riscos"
      ],
      highlight: "Recomendado"
    },
    {
      icon: Target,
      title: "Gestão de Investimentos",
      description: "Administração profissional dos seus investimentos com estratégias personalizadas baseadas no seu perfil de risco e objetivos financeiros.",
      features: [
        "Carteira diversificada",
        "Análise de mercado",
        "Rebalanceamento automático",
        "Relatórios detalhados"
      ],
      highlight: "Premium"
    },
    {
      icon: Wallet,
      title: "Planejamento de Aposentadoria",
      description: "Construção de um plano sólido para sua aposentadoria, garantindo que você mantenha seu padrão de vida no futuro.",
      features: [
        "Simulações personalizadas",
        "Previdência privada",
        "Investimentos de longo prazo",
        "Revisões periódicas"
      ],
      highlight: "Futuro Garantido"
    },
    {
      icon: Clock,
      title: "Educação Financeira",
      description: "Programa completo de educação financeira para desenvolver suas habilidades de gestão e tomada de decisões financeiras inteligentes.",
      features: [
        "Workshops exclusivos",
        "Material didático",
        "Mentoria individual",
        "Comunidade de investidores"
      ],
      highlight: "Transformador"
    },
    {
      icon: Star,
      title: "Consultoria Empresarial",
      description: "Soluções financeiras especializadas para empresas, incluindo gestão de fluxo de caixa, planejamento tributário e estruturação financeira.",
      features: [
        "Análise de fluxo de caixa",
        "Planejamento tributário",
        "Reestruturação financeira",
        "Consultoria estratégica"
      ],
      highlight: "Para Empresas"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Análise Inicial",
      description: "Realizamos uma avaliação completa da sua situação financeira atual"
    },
    {
      number: "02",
      title: "Planejamento",
      description: "Desenvolvemos uma estratégia personalizada para seus objetivos"
    },
    {
      number: "03",
      title: "Implementação",
      description: "Colocamos o plano em ação com acompanhamento profissional"
    },
    {
      number: "04",
      title: "Monitoramento",
      description: "Acompanhamos constantemente e ajustamos quando necessário"
    }
  ]

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
            Nossas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Soluções
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um portfólio completo de soluções financeiras personalizadas 
            para atender suas necessidades específicas e alcançar seus objetivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-700 transition-all duration-300"
                >
                  Saiba Mais
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Como Funciona Nosso Processo
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Seguimos uma metodologia estruturada para garantir os melhores resultados 
            em cada etapa da sua jornada financeira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                {step.number}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h4>
              
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent-500 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Pronto para Transformar sua Vida Financeira?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções podem 
            ajudá-lo a alcançar seus objetivos financeiros.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary-600 px-12 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Agendar Consulta Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}