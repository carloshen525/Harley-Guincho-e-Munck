import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { businessInfo } from '../data/content';

export default function QuickContactBanner() {
  return (
    <section className="bg-gradient-to-r from-[#980e14] via-[#b91118] to-[#980e14] py-8 sm:py-10 px-4 sm:px-6 relative overflow-hidden shadow-2xl">
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Truck Icon and Catchphrase from Mockup */}
        <div className="flex items-center gap-4 sm:gap-6 text-center lg:text-left">
          
          {/* Official Logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white/30 flex items-center justify-center flex-shrink-0 shadow-2xl bg-black/40">
            <img
              src="/images/logo.jpg"
              alt="Guincho e Munck HARLEY PAIVA"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="block text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-white/90">
              PRECISOU? É SÓ CHAMAR!
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-black font-['Montserrat',sans-serif] text-white uppercase tracking-tight drop-shadow-sm">
              GUINCHO E MUNCK HARLEY PAIVA
            </span>
            <span className="text-xs sm:text-sm text-red-100 font-medium hidden sm:block">
              Chegamos rápido onde você estiver em Manaus e interior do Amazonas.
            </span>
          </div>

        </div>

        {/* Right Side: Red & Green Action CTAs matching mockup */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          
          {/* Ligar Agora Button */}
          <a
            href={businessInfo.phoneCallUrl}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-[#E51920] hover:bg-[#c91218] active:scale-95 text-white rounded-xl shadow-lg shadow-black/30 border border-white/20 transition-all font-bold group"
          >
            <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 fill-white transition-transform group-hover:rotate-12" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold text-red-100">Ligar Agora</span>
              <span className="block text-sm sm:text-base font-black font-['Montserrat',sans-serif]">
                {businessInfo.phoneDisplay}
              </span>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 text-white rounded-xl shadow-lg shadow-black/30 border border-white/20 transition-all font-bold group"
          >
            <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold text-emerald-100">WhatsApp</span>
              <span className="block text-sm sm:text-base font-black font-['Montserrat',sans-serif]">
                {businessInfo.phoneDisplay}
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

