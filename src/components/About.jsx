import React from 'react';
import { Shield, Clock, Award, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '../data/content';

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-24 bg-[#0d0f14] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-[#141822]">
              <img 
                src="/images/hero-harley-truck.jpg" 
                alt="Equipe Guincho e Munck HARLEY PAIVA em Manaus - AM" 
                className="w-full h-80 sm:h-96 object-cover object-center filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent opacity-90" />
              
              {/* Highlight Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0b0c10]/95 backdrop-blur-md border border-neutral-700/80 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E51920] flex items-center justify-center flex-shrink-0 text-white font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Compromisso e Confiança</h4>
                    <p className="text-xs text-neutral-300">Cuidado rigoroso no transporte e içamento do seu patrimônio.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick floating experience badge */}
            <div className="absolute -top-3 -right-3 bg-[#E51920] text-white px-4 py-2 rounded-xl shadow-lg border border-red-400/40 text-center">
              <span className="block text-xs uppercase font-extrabold tracking-wider">Atendimento</span>
              <span className="block text-lg font-black font-['Montserrat',sans-serif]">24 HORAS</span>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E51920]" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
                SOBRE O GUINCHO E MUNCK HARLEY PAIVA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-white leading-tight">
              Referência em guincho plataforma, munck e remoções em Manaus e interior
            </h2>

            <p className="mt-4 text-neutral-300 text-base leading-relaxed">
              O <strong className="text-white">Guincho e Munck HARLEY PAIVA</strong> nasceu com a missão de oferecer serviços de guincho plataforma, aluguel de caminhão munck e transporte de carros, máquinas e equipamentos com rapidez, transparência e o mais alto padrão de segurança para clientes em Manaus e em todas as cidades do interior do Amazonas.
            </p>

            <p className="mt-3 text-neutral-300 text-base leading-relaxed">
              Sabemos que imprevistos na estrada, obras ou movimentação de cargas pesadas exigem pontualidade e extremo cuidado. Por isso, nossa equipe prioriza agilidade no despacho, clareza total no orçamento antes da saída e operadores capacitados para cada tipo de serviço.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3 bg-neutral-900/80 p-3.5 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-[#E51920] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Plataforma Hidráulica</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Sem contato brusco ou danos em suspensão e para-choque.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-neutral-900/80 p-3.5 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-[#E51920] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Disponibilidade Total</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Plantão contínuo 24h inclusive em feriados e finais de semana.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-neutral-900/80 p-3.5 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-[#E51920] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Preço Justo e Sem Surpresas</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Valor combinado previamente por telefone ou WhatsApp.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-neutral-900/80 p-3.5 rounded-xl border border-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-[#E51920] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Equipe Capacitada</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Operadores experientes no manuseio de veículos de todos os portes.</p>
                </div>
              </div>
            </div>

            {/* Contact Highlight */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={businessInfo.phoneCallUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E51920] hover:bg-[#c91218] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Falar com Guincho e Munck HARLEY PAIVA</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-4 h-4 text-[#E51920]" />
                <span>Base em Manaus • Atendimento na capital e interior do Amazonas</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

