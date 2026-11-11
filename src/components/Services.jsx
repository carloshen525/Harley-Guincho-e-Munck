import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E51920]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#E51920] uppercase font-['Montserrat',sans-serif]">
              NOSSOS SERVIÇOS
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black font-['Montserrat',sans-serif] tracking-tight text-neutral-900 leading-tight">
            Guincho Plataforma, Caminhão Munck e Remoções
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Soluções completas com rapidez, segurança e equipamentos modernos para Manaus - AM e todo o interior do Amazonas.
          </p>
        </div>

        {/* 3 Main Services Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Service 1: Guincho Plataforma */}
          <div className="bg-neutral-50 border border-neutral-200 hover:border-[#E51920] p-7 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-100/80 text-[#E51920] flex items-center justify-center font-black mb-5 group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-7 h-7 text-[#E51920]" />
              </div>
              <h3 className="font-['Montserrat',sans-serif] font-black text-xl sm:text-2xl text-neutral-900 mb-2">
                Guincho Plataforma
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                Serviço de remoção e transporte de veículos com rapidez e segurança.
              </p>
            </div>

            <a
              href={`https://wa.me/${businessInfo.phoneRaw}?text=${encodeURIComponent('Olá! Preciso de serviço de Guincho Plataforma em Manaus ou interior.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Pedir Guincho Plataforma</span>
            </a>
          </div>

          {/* Service 2: Aluguel de Caminhão Munck */}
          <div className="bg-neutral-50 border border-neutral-200 hover:border-[#E51920] p-7 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-100/80 text-[#E51920] flex items-center justify-center font-black mb-5 group-hover:scale-105 transition-transform duration-300">
                <CheckCircle2 className="w-7 h-7 text-[#E51920]" />
              </div>
              <h3 className="font-['Montserrat',sans-serif] font-black text-xl sm:text-2xl text-neutral-900 mb-2">
                Aluguel de Caminhão Munck
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                Serviço para movimentação, içamento e transporte de cargas pesadas.
              </p>
            </div>

            <a
              href={`https://wa.me/${businessInfo.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para Aluguel de Caminhão Munck em Manaus ou interior.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Alugar Caminhão Munck</span>
            </a>
          </div>

          {/* Service 3: Transporte e Remoção */}
          <div className="bg-neutral-50 border border-neutral-200 hover:border-[#E51920] p-7 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-100/80 text-[#E51920] flex items-center justify-center font-black mb-5 group-hover:scale-105 transition-transform duration-300">
                <ArrowRight className="w-7 h-7 text-[#E51920]" />
              </div>
              <h3 className="font-['Montserrat',sans-serif] font-black text-xl sm:text-2xl text-neutral-900 mb-2">
                Transporte e Remoção de:
              </h3>
              <ul className="text-sm sm:text-base font-bold text-neutral-800 space-y-1.5 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E51920]" />
                  Carros
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E51920]" />
                  Máquinas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E51920]" />
                  Equipamentos
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/${businessInfo.phoneRaw}?text=${encodeURIComponent('Olá! Preciso de transporte e remoção para carros, máquinas ou equipamentos em Manaus/interior.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Solicitar Transporte / Remoção</span>
            </a>
          </div>

        </div>

        {/* Extra Service Guarantees */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Socorro Imediato</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Acionamento direto com o motorista para deslocamento instantâneo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Cuidado com seu Veículo</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Carga e descarga seguras para automáticos, 4x4 e rebaixados.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E51920] flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">Transparência Total</h5>
              <p className="text-xs text-neutral-600 mt-0.5">
                Preço fixado no atendimento sem cobrança surpresa ao chegar.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

