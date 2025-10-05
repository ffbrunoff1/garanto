import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Banknote, Wallet } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Protegemos seus investimentos com as melhores práticas do mercado"
    },
    {
      icon: Target,
      title: "Objetivos Claros",
      description: "Estratégias personalizadas para alcançar suas metas financeiras"
    },
    {
      icon: Banknote,
      title: "Melhores Taxas",
      description: "Oferecemos as condições mais competitivas do mercado"
    },
    {
      icon: Wallet,
      title: "Gestão Completa",
      description: "Soluções integradas para toda sua vida financeira"
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Suas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-300">
                Soluções
              </span>{' '}
              Financeiras
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed"
            >
              Transforme sua relação com o dinheiro. Na Garanto, oferecemos soluções financeiras 
              personalizadas que se adaptam ao seu perfil e objetivos únicos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-outline flex items-center justify-center space-x-2 text-lg px-10 py-4"
              >
                <span>Comece Agora</span>
                <Shield className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('about')}
                className="border-2 border-transparent text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:border-white hover:bg-white hover:bg-opacity-10 text-lg"
              >
                Saiba Mais
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-primary-200 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-primary-200 text-sm">Clientes Satisfeitos</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}