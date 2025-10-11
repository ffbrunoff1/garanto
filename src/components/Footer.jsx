import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Navigation } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'O Problema', id: 'problem' },
    { label: 'A Solução', id: 'solution' },
    { label: 'Para Quem', id: 'for-who' },
    { label: 'Como Funciona', id: 'how-it-works' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Quem Somos', id: 'about' },
    { label: 'Serviços', id: 'services' }
  ]

  const services = [
    'Crédito com Garantia de Imóvel',
    'Crédito Imobiliário',
    'Consórcio Estruturado',
    'Seguros Personalizados',
    'Mentorias Financeiras'
  ]

  const contactInfo = [
    {
      icon: Phone,
      info: "(53) 9999-9999"
    },
    {
      icon: Mail,
      info: "contato@garanto.com"
    },
    {
      icon: Navigation,
      info: "Pelotas, RS"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white pb-20">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/a3eb381c-5aaf-4c59-9c0d-8445f50b19e6/logo_1759696327514_0.jpg"
                  alt="Garanto"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-2xl font-bold text-white">
                  Garanto
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformando vidas através de soluções financeiras personalizadas. 
                Sua segurança financeira é nossa prioridade.
              </p>
              <div className="flex items-center space-x-2 text-accent-400">
                <span className="text-lg">⭐</span>
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-400">• 500+ clientes satisfeitos</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Links Rápidos
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-accent-400 transition-all duration-300 text-left"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Nossas Soluções
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection('services')}
                      className="text-gray-300 hover:text-accent-400 transition-all duration-300 text-left text-sm"
                    >
                      {service}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Contato
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">
                        {contact.info}
                      </span>
                    </li>
                  )
                })}
              </ul>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Horário de Atendimento
                </h4>
                <div className="text-gray-300 space-y-1">
                  <p>Segunda - Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Garanto. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-1 text-sm text-gray-400">
                <span>Criado com</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors duration-300 italic font-medium"
                >
                  Papum
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hover:text-accent-400 transition-colors duration-300"
              >
                Política de Privacidade
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hover:text-accent-400 transition-colors duration-300"
              >
                Termos de Uso
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}