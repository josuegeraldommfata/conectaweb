import React from 'react';
import Timeline from './Timeline';
import { Button } from './ui/button';
import { Download } from "lucide-react";
import minhaFotoDePerfil from '../assets/img/hero-bg.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-portfolio-violet font-medium mb-2">Um Pouco Sobre Mim</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-portfolio-blue mb-4">Minha Journada & Expertise</h2>
          <div className="w-20 h-1 bg-portfolio-indigo mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full max-w-[800px] h-[650px] rounded-lg overflow-hidden shadow-xl mb-12">
                <img
                  src={minhaFotoDePerfil} // <-- ALtere AQUI para usar a variável importada
                  alt="Working on design"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 md:p-6">
                <div className="text-center">
                  <p className="text-portfolio-blue font-bold text-lg md:text-xl mb-1">14+ Anos</p>
                  <p className="text-gray-600 text-sm md:text-base">Experiencia</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-portfolio-blue mb-4">
                Engenheiro de Software Full Stack Sênior Web & Mobile.
            </h3>
            <p className="text-gray-600 mb-6">
             Com mais de 14 anos na vanguarda do desenvolvimento de software, minha atuação é focada na engenharia de sistemas de alta complexidade e impacto comercial. Sou especialista em transformar requisitos de negócio em ecossistemas digitais escaláveis, unindo o rigor da arquitetura backend com a sofisticação do UI Design moderno.
          Minha expertise abrange o ciclo completo de desenvolvimento para diversos modelos de negócio, incluindo:
         Sistemas Críticos: Desenvolvimento de ERPs robustos, PDVs de alta performance e plataformas de gestão integrada.

Produtos e Escala: Criação de MVPs acelerados para validação de mercado e arquiteturas MVC sólidas para manutenção a longo prazo.

Soluções de Mercado: Implementação de plataformas White Label altamente customizáveis e SaaS escaláveis.

Performance Digital: E-commerces de alta conversão, Landing Pages otimizadas para tráfego pago e aplicações Mobile nativas/híbridas.
            </p>
            <p className="text-gray-600 mb-6">
             Minha abordagem é orientada a resultados: entrego código limpo, animações fluidas que retêm o usuário e um foco absoluto em SEO estratégico e performance extrema. Não entrego apenas software; entrego ferramentas de crescimento para empresas que não aceitam menos que a excelência técnica.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Nome:</h4>
                <p className="text-gray-600">Josué Geraldo Gomes</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Email:</h4>
                <p className="text-gray-600">josuegeraldoata@hotmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">localização:</h4>
                <p className="text-gray-600">São Paulo, Brazil</p>
              </div>
              <div>
                <h4 className="font-bold text-portfolio-blue mb-2">Disponibilidade:</h4>
                <p className="text-gray-600">Freelancer e em tempo integral</p>
              </div>
            </div>


          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold inline-block">Resumo De Minha Experiências E Cursos</h2>
        </div>
        <Timeline
          courses={[
            { title: 'Designer Grafico', period: '2012 - 2014', description: '' },
            { title: 'ANÁLISE DESENVOLVIMENTO DE SISTEMAS', period: '2014 - 2017', description: '' },
            { title: 'ENGENHARIA DE SOFTWARE', period: '2018 - 2023', description: '' },
          ]}
          experiences={[
            {
              title: 'FREELANCER 99FREELAS',
              period: '2025 Atual',
              description: 'desenvolvendo Projetos, Pra Diversos Clientes Que Tem Demanda Na Plataforma De Freelancer.',
            },

             {
              title: 'NexGen Systems',
              period: '2016 - 2018',
              description: 'Participação no desenvolvimento de dashboards analíticos para grandes clientes do setor de varejo, com visualizações dinâmicas e relatórios customizáveis em tempo real.',
            },

             {
              title: 'ByteForge Technologies',
              period: '2015 - 2016',
              description: 'Desenvolvimento full stack para soluções mobile-first, utilizando React.js no frontend e Node.js no backend, garantindo responsividade e alta performance em dispositivos móveis.',
            },
            {
              title: 'WebCraft Studios',
              period: '2014 - 2015',
              description: 'Criação e manutenção de portais de conteúdo e blogs corporativos com sistemas de gerenciamento avançados, além da integração com redes sociais e ferramentas de análise de dados.',
            },
            {
              title: 'StartLab Tech',
              period: '2012 - 2013',
              description: 'Desenvolvimento ágil de MVPs e protótipos para startups, trabalhando diretamente com equipes multidisciplinares para garantir entregas rápidas e alinhadas às necessidades do mercado.',
            },
            {
              title: 'InovaDigital',
              period: '2011 - 2012',
              description: 'Implementação de plataformas SaaS customizadas para clientes do setor financeiro, com foco em segurança, compliance e performance. Atuei na automação de testes e implantação contínua (CI/CD).',
            },
            {
              title: 'TechNova Solutions',
              period: '2010 - 2011',
              description: 'Desenvolvimento de aplicações corporativas integradas, focando em APIs RESTful e arquitetura microservices. Participei da migração de sistemas legados para tecnologias modernas, aumentando a eficiência dos processos internos.',
            },
            {
              title: 'GLOBAL WEBSITES',
              period: '2009 - 2010',
              description: 'Liderança no desenvolvimento de sistemas de gerenciamento de conteúdo, plataformas de e-commerce e dashboards interativos. Otimizei a performance e escalabilidade das aplicações, garantindo alta disponibilidade e excelente experiência do usuário.',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default About;
