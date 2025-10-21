import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Phone, Mail, MapPin, Star, Heart, Egg, Baby, MessageCircle, Activity, BarChart3, UserCheck, Zap, Waves } from 'lucide-react'
import './App.css'

// Import assets
import logoImage from './assets/Layer_1.svg'
import heroImage from './assets/juliana_sobral_portrait.webp'
import aboutImage from './assets/juliana_sobral_full_body.webp'
import dnaImage from './assets/dna_strand.webp'

function App() {
  const treatments = [
    {
      iconComponent: <BarChart3 className="h-8 w-8 text-[#1A7373]" />,
      title: "Bioimpedância",
      description: "Exame destinado à avaliação da composição corporal."
    },
    {
      iconComponent: <UserCheck className="h-8 w-8 text-[#1A7373]" />,
      title: "Consulta Nutricional",
      description: "Consulta personalizada, atendendo a necessidade do paciente."
    },
    {
      iconComponent: <Heart className="h-8 w-8 text-[#1A7373]" />,
      title: "Nutrição para Fertilidade",
      description: "Planos alimentares específicos para otimizar a fertilidade e aumentar chances de concepção."
    },
    {
      iconComponent: <Egg className="h-8 w-8 text-[#1A7373]" />,
      title: "Tratamento para SOP e Endometriose",
      description: "Abordagem nutricional para equilibrar hormônios e reduzir sintomas de SOP e endometriose."
    },
    {
      iconComponent: <Activity className="h-8 w-8 text-[#1A7373]" />,
      title: "Biofeedback",
      description: "Método que mede respostas do corpo humano."
    },
    {
      iconComponent: <Zap className="h-8 w-8 text-[#1A7373]" />,
      title: "ILIB",
      description: "Técnica de aplicação intravascular de laseroterapêutico."
    },
    {
      iconComponent: <Waves className="h-8 w-8 text-[#1A7373]" />,
      title: "Hidrovitalis",
      description: "Equipamento emissor de frequências e de hidroterapia."
    }
  ]

  const processSteps = [
    {
      number: "1",
      title: "Agendamento",
      description: "Marque sua consulta presencial ou online conforme sua preferência e disponibilidade."
    },
    {
      number: "2",
      title: "Orientações Prévias",
      description: "Receba instruções detalhadas, se necessário, para exames específicos, como jejum ou evitar cafeína."
    },
    {
      number: "3",
      title: "Consulta presencial",
      description: "Chegue pontualmente para sua consulta, seguindo todas as orientações encaminhadas no agendamento."
    },
    {
      number: "4",
      title: "Consulta Online",
      description: "Acesse o link encaminhado previamente para sua consulta virtual."
    },
    {
      number: "5",
      title: "Discussão Detalhada",
      description: "Durante a consulta, discutiremos seu histórico, sintomas, e os resultados dos exames para compreender melhor suas necessidades."
    },
    {
      number: "6",
      title: "Plano Alimentar Personalizado:",
      description: "Com base nas informações coletadas, será desenvolvido um plano alimentar adaptado às suas condições e preferências."
    },
    {
      number: "7",
      title: "Plano de tratamento",
      description: "Após avaliado todos os exames realizados durante a consulta, será Elaborado um tratamento conforme suas necessidades."
    },
    {
      number: "8",
      title: "Acompanhamento Pós Consulta",
      description: "Aproveite a opção de retorno gratuito em até 30 dias para garantir que suas necessidades continuem sendo atendidas."
    }
  ]

  const testimonials = [
    {
      name: "Rafael Magalhães",
      role: "Paciente",
      text: "Atendimento diferenciado! Nunca nada visto depois de ter passado por vários Nutricionistas. Juh realmente tem muito conhecimento agregado. Fora os aparelhos altamente tecnológicos que faz toda a diferença no tratamento."
    },
    {
      name: "Livia Pereira",
      role: "Paciente",
      text: "A consulta com Dra Juliana Sobral foi IMPECÁVEL. Já havia feito alguns planos alimentares mas nenhum tão completo e assertivo como o seu. Além de todo conhecimento teórico, Juliana ainda conta com diversos recursos e a presença da enfermeira Mariana que garantem a certeza da promoção da saúde e bem estar de forma holística e integral. Parabéns pela excelência! RECOMENDO ALTAMENTE!"
    },
    {
      name: "Sergio Coelho Borges Farias",
      role: "Paciente",
      text: "Excelente exercício profissional. Explicações detalhadas e avaliação do estado de saúde com aparato tecnológico apropriado apontam para o tratamento mais eficaz para resolução dos problemas encontrados."
    }
  ]

  const faqItems = [
    {
      question: "Como a nutrição integrativa pode ajudar na fertilidade?",
      answer: "A nutrição integrativa identifica desequilíbrios hormonais e nutricionais que afetam a fertilidade, utilizando planos alimentares personalizados, suplementação e tecnologias avançadas para otimizar o corpo para a concepção."
    },
    {
      question: "Quais alimentos ajudam a aumentar a fertilidade?",
      answer: "Alimentos ricos em antioxidantes, ácidos graxos ômega-3, vitaminas do complexo B e minerais como zinco e ferro. Incluímos frutas, verduras, peixes, nozes e sementes em planos personalizados para equilibrar hormônios e melhorar a ovulação."
    },
    {
      question: "Como a nutrição pode ajudar no tratamento de SOP e endometriose?",
      answer: "Através de dietas anti-inflamatórias, controle de insulina e equilíbrio hormonal, reduzimos sintomas, melhoramos a ovulação e diminuímos a inflamação associada a essas condições, aumentando as chances de concepção natural."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Juliana Sobral Logo" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#1A7373] transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-[#1A7373] transition-colors">Dra. Juliana Sobral</a>
              <a href="#treatments" className="text-gray-700 hover:text-[#1A7373] transition-colors">Procedimentos</a>
              <a href="#faq" className="text-gray-700 hover:text-[#1A7373] transition-colors">FAQ</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#1A7373] transition-colors">Depoimento</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1A7373] transition-colors">Atendimento</a>
            </nav>
            <Button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5571983442024&text&type=phone_number&app_absent=0', '_blank')} className="cursor-pointer bg-[#1A7373] hover:bg-[#778286] text-white px-10 py-4 rounded-full flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Agende para Fertilidade!</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#E9FAB0] to-[#FFE498] py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2">SEJA BEM - VINDO!!!</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-wide">
                Prepare seu corpo para a concepção e realize o sonho da maternidade.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed tracking-wide">
                Nutrição integrativa especializada em fertilidade: aumente suas chances de engravidar naturalmente com um plano alimentar personalizado e suplementação individualizada.
              </p>
              <Button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5571983442024&text&type=phone_number&app_absent=0', '_blank')} className="cursor-pointer bg-[#1A7373] hover:bg-[#778286] text-white px-10 py-4 rounded-full text-lg flex items-center space-x-2 mx-auto">
                <MessageCircle className="h-5 w-5" />
                <span>Agende para Fertilidade!</span>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#E9FAB0] rounded-full transform rotate-12 scale-110 opacity-20"></div>
              <img 
                src={heroImage} 
                alt="Dra. Juliana Sobral" 
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Dra. Juliana Sobral" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2">NUTRICIONISTA</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Dra. Juliana Sobral
              </h2>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                Olá, sou Juliana Sobral, uma nutricionista apaixonada com mais de 13 anos de experiência dedicada a aprimorar o estilo de vida e a longevidade dos meus pacientes. Especializei-me em Nutrição Clínica, Ortomolecular e Nutrigenômica, com foco especial em saúde da mulher, fertilidade e equilíbrio hormonal. Trago conhecimentos variados, desde Endocrinologia até nutrição esportiva e estética.
              </p>
              <p className="text-gray-600 leading-relaxed tracking-wide">
                Utilizando exames específicos, protocolos de desintoxicação corporal, suplementação quando necessário e planos alimentares individualizados, garanto a conquista da saúde plena. Após um enriquecedor intercâmbio em San Francisco, incorporei tecnologias como Biofeedback e avaliação termográfica aos meus atendimentos em Salvador, aprimorando diagnósticos.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Membro da sociedade Europeia de Oncologia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Pós graduada em Nutrição Ortomolecular e Nutri Genômica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Especialista em exames e Tratamentos Indolores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Especialista em Nutrição para Fertilidade e Saúde da Mulher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2 mb-4">CONSULTA PARA FERTILIDADE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consulta Especializada em Fertilidade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed tracking-wide">
              🧬💊 Planos nutricionais para otimizar sua fertilidade e concepção
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl bg-gradient-to-br from-white to-gray-50">
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-green-600 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2 mb-4">PROCEDIMENTOS PARA FERTILIDADE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tratamentos Nutricionais para Fertilidade e Saúde da Mulher
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {treatments.map((treatment, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group rounded-xl bg-gradient-to-br from-white to-gray-50">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                    {treatment.iconComponent}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{treatment.title}</h3>
                  <p className="text-sm text-gray-600">{treatment.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 group-hover:bg-green-600 group-hover:text-white transition-colors"
                  >
                    Faça uma Avaliação
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2">DIFERENCIAIS PARA FERTILIDADE</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Prepare-se para a concepção com suporte nutricional completo!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Encontre o equilíbrio perfeito para uma alimentação saudável e otimize sua fertilidade com o apoio de uma nutricionista especializada em saúde da mulher.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Tecnologia Precisa:</h4>
                  <p className="text-sm text-gray-600">Utilização de tecnologias avançadas para avaliação personalizada. Integração de análise genômica e Bioimpedância.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Planos Nutricionais para Fertilidade:</h4>
                  <p className="text-sm text-gray-600">Desenvolvimento de planos alimentares baseados em dados tecnológicos para otimizar fertilidade e equilíbrio hormonal.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Experiência Online:</h4>
                  <p className="text-sm text-gray-600">Consultas online adaptadas à agenda do paciente. Plataforma interativa para envio de exames.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Monitoramento e Suporte:</h4>
                  <p className="text-sm text-gray-600">Tecnologias para monitoramento contínuo. Retorno gratuito em até 30 dias após consultas.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dnaImage} 
                alt="DNA Strand" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2 mb-4">FAQ SOBRE FERTILIDADE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Nutrição para Fertilidade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre como a nutrição pode ajudar na concepção.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <h3 className="font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#778286] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2 mb-4">DEPOIMENTOS DE PACIENTES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Histórias de Sucesso em Fertilidade e Saúde da Mulher
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white text-gray-900 p-6">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2 mb-4">VAMOS REALIZAR SEU SONHO DE MATERNIDADE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agende sua Consulta para Fertilidade!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Agende sua consulta especializada em nutrição para fertilidade e aumente suas chances de engravidar naturalmente.
            </p>
            <Button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5571983442024&text&type=phone_number&app_absent=0', '_blank')} className="cursor-pointer bg-[#1A7373] hover:bg-[#778286] text-white px-10 py-4 rounded-full text-lg flex items-center space-x-2 mx-auto">
              <MessageCircle className="h-5 w-5" />
              <span>Agende para Fertilidade!</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#013441] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-[#E9FAB0] text-[#013441] px-4 py-2 mb-4">PRECISO DE VOCÊ PARA REALIZAR SEU SONHO</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nosso prazer é ajudar você a realizar o sonho da maternidade!
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Agende sua consulta especializada em nutrição para fertilidade e aumente suas chances de engravidar naturalmente.
            </p>
            <Button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5571983442024&text&type=phone_number&app_absent=0', '_blank')} className="cursor-pointer bg-[#1A7373] hover:bg-[#778286] text-white px-10 py-4 rounded-full text-lg mb-12 flex items-center space-x-2 mx-auto">
              <MessageCircle className="h-5 w-5" />
              <span>Agende para Fertilidade!</span>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Será um prazer ajudar você a engravidar!</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Fertilidade Otimizada</li>
                <li>• Plano Alimentar Personalizado para Fertilidade</li>
                <li>• Suplementação para Equilíbrio Hormonal</li>
              </ul>
              <p className="text-sm text-gray-400">
                Métodos de avaliação que tornam o atendimento INDIVIDUALIZADO para aumentar suas chances de concepção.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(71) 98344-2024</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@nutrijulianasobral.com.br</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Salvador, BA</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Explore</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#home" className="block hover:text-[#1A7373] transition-colors">Home</a>
                <a href="#about" className="block hover:text-[#1A7373] transition-colors">Sobre</a>
                <a href="#treatments" className="block hover:text-[#1A7373] transition-colors">Tratamentos</a>
                <a href="#contact" className="block hover:text-[#1A7373] transition-colors">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#013441] text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Nutricionista – Juliana Sobral. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

