import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import navImage from '../../imports/image-4.png';

interface NavigationBarProps {
  onNavClick: (index: number) => void;
  activeIndex: number;
}

export const NAV_ITEMS = [
  { id: 0, name: 'Brandstory', left: '32%', width: '6%' },
  { id: 1, name: 'Collections', left: '39.5%', width: '6.5%' },
  { id: 2, name: 'Demos', left: '47.5%', width: '5%' },
  { id: 3, name: 'Contact us', left: '54%', width: '6.5%' },
];

export function NavigationBar({ onNavClick, activeIndex }: NavigationBarProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Coded Navigation Bar below the image */}
      <div className="relative w-full bg-[#1A110D] border-b border-[#D4A373]/20 h-[38px] flex items-center justify-between px-[5%] shadow-lg">
        {/* Navigation Items (including Logo) left-aligned with equal spacing */}
        <div className="flex items-center gap-[3vw]">
          {/* Logo */}
          <div className="text-white text-[12px] tracking-[0.2em] font-extralight uppercase">
            KERASTIQUE
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-[3vw]">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onNavClick(index)}
                className={`text-[9px] tracking-[0.05em] font-extralight transition-colors whitespace-nowrap ${
                  activeIndex === index 
                    ? 'text-[#FAF5F0]' 
                    : 'text-[#A87C51] hover:text-[#FAF5F0]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-[#A87C51]">
          <button className="hover:text-white transition-colors">
            <Search className="w-[12px] h-[12px]" strokeWidth={1.5} />
          </button>
          <button className="hover:text-white transition-colors">
            <User className="w-[12px] h-[12px]" strokeWidth={1.5} />
          </button>
          <button className="hover:text-white transition-colors">
            <ShoppingBag className="w-[12px] h-[12px]" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
