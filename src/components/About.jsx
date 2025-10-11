import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Star, Check, User } from 'lucide-react'

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
              A Garanto é liderada por quem entende do mercado
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Raíza Brito atuou por 12 anos em instituições como Bradesco e Santander. Fundou a Garanto em 2019 com o objetivo de oferecer soluções personalizadas e humanas para quem busca clareza financeira.
            </p>
            <blockquote className="text-xl italic font-medium text-gray-800 border-l-4 border-primary-600 pl-4">
              "Não vendemos produto. Entregamos planejamento."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/raiza-brito.png"
              alt="Raíza Brito"
              className="rounded-2xl shadow-custom object-cover w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}