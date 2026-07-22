import React from 'react'
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-purple-500/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[#9b99b4]">
          &copy; {year} Abigail Fonseca Contreras · Cartago, Costa Rica
        </p>
        
      </div>
    </footer>
  );
}

