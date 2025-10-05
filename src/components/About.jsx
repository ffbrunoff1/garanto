import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Star, Check } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados na transparência e integridade em todas as nossas operações financeiras."
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em entregar resultados mensuráveis que impactem positivamente a vida financeira dos nossos clientes."
    },
    {
      icon: Star,
      title: "Excelência",
      description: "Buscamos a excelência em cada serviço prestado, utilizando as melhores práticas e tecnologias do mercado financeiro."
    }
  ]

  const achievements = [
    { number: "10+", label: "Anos no Mercado" },
    { number: "500+", label: "Clientes Atendidos" },
    { number: "R$ 50M+", label: "Recursos Gerenciados" },
    { number: "98%", label: "Satisfação dos Clientes" }
  ]

  const benefits = [
    "Consultoria financeira personalizada e estratégica",
    "Análise completa do seu perfil de investidor",
    "Planejamento financeiro de longo prazo",
    "Acompanhamento contínuo dos seus investimentos",
    "Educação financeira para tomada de decisões",
    "Suporte especializado em todas as etapas"
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre a{' '}
            <span className="gradient-text">Garanto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em soluções financeiras inovadoras, comprometidos em 
            transformar a relação dos nossos clientes com o dinheiro através de estratégias 
            personalizadas e orientação especializada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Democratizar o acesso a soluções financeiras de qualidade, oferecendo 
              consultoria especializada e ferramentas inovadoras que permitam a cada 
              pessoa e empresa alcançar seus objetivos financeiros com segurança e eficiência.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 text-center shadow-custom card-hover border border-gray-100"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Nossos Valores
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Construímos nossa empresa sobre pilares sólidos que guiam cada decisão 
            e relacionamento que estabelecemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 text-center shadow-custom card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}