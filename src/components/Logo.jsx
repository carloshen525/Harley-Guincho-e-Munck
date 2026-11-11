import React from 'react';

export default function Logo({ size = 'normal', className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const imgSize = isLarge ? 'w-14 h-14' : isSmall ? 'w-9 h-9' : 'w-11 h-11 sm:w-12 sm:h-12';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Harley Paiva Logo Emblem */}
      <div className={`relative flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden border border-red-500/30 shadow-md ${imgSize}`}>
        <img
          src="/images/logo.jpg"
          alt="Guincho e Munck HARLEY PAIVA"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-['Montserrat',sans-serif] font-bold text-white text-[15px] sm:text-[18px] tracking-tight whitespace-nowrap">
            Guincho e Munck
          </span>
          <span className="font-['Montserrat',sans-serif] font-black text-[#E51920] text-[15px] sm:text-[18px] tracking-tight uppercase whitespace-nowrap">
            HARLEY PAIVA
          </span>
        </div>
        <span className="font-['Montserrat',sans-serif] font-semibold text-[9px] sm:text-[10px] tracking-[0.24em] text-gray-300 uppercase mt-0.5">
          MANAUS - AM
        </span>
      </div>
    </div>
  );
}

