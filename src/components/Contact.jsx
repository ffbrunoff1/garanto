import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Navigation, Clock, Send } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: "",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }
    
    recaptchaRef.current.reset()
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(53) 9999-9999",
      description: "Segunda a Sexta, 8h às 18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contato@garanto.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Navigation,
      title: "Localização",
      info: "Pelotas, RS",
      description: "Atendimento presencial e online"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg - Sex: 8h às 18h",
      description: "Sáb: 9h às 13h"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em{' '}
            <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para ajudá-lo a transformar sua vida financeira. 
            Entre em contato conosco e agende uma consulta personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Fale Conosco
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 shadow-custom border border-gray-100 hover:shadow-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {info.info}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {info.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
            >
              <h4 className="text-2xl font-bold mb-4">
                Consulta Gratuita
              </h4>
              <p className="text-primary-100 mb-6 leading-relaxed">
                Agende uma consulta gratuita de 30 minutos para discutir suas 
                necessidades financeiras e descobrir como podemos ajudá-lo.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">30 minutos</p>
                  <p className="text-primary-100 text-sm">Totalmente gratuita</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-custom border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envie sua Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="consultoria">Consultoria Financeira</option>
                    <option value="investimentos">Gestão de Investimentos</option>
                    <option value="protecao">Proteção Patrimonial</option>
                    <option value="aposentadoria">Planejamento de Aposentadoria</option>
                    <option value="educacao">Educação Financeira</option>
                    <option value="empresarial">Consultoria Empresarial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades financeiras..."
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-50 text-red-600 border border-red-200' 
                      : 'bg-green-50 text-green-600 border border-green-200'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}