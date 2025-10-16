import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Achei que consórcio era enrolação, mas com a Garanto vi que era estratégia.",
      author: "José, produtor rural"
    },
    {
      quote: "Meu plano de saúde era caríssimo e mal aproveitado. Eles reformularam tudo.",
      author: "Camila, empresária"
    },
    {
      quote: "Nunca imaginei que dava pra reorganizar minha empresa só mexendo no que já tinha contratado. Foi um divisor de águas.",
      author: "Roberto, dono de transportadora"
    },
    {
      quote: "A Raíza me mostrou que crédito pode ser uma ferramenta — e não só dívida. Hoje uso isso a favor do meu crescimento.",
      author: "Larissa, microempresária"
    },
    {
      quote: "O diagnóstico foi tão claro que parecia que me conheciam há anos. Pela primeira vez senti que minha grana tava no caminho certo.",
      author: "André, autônomo"
    },
    {
      quote: "Tive mais clareza com uma hora de conversa com a Garanto do que em anos lidando com banco.",
      author: "Paula, médica e empreendedora"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quem escolheu a Garanto, recomenda:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-custom card-hover border border-gray-100 flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-primary-400 mb-6" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-gray-900 text-right">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}