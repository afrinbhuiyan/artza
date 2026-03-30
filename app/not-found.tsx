import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="text-center z-10 max-w-lg">
        
        {/* Big 404 with artistic touch */}
        <div className="relative mb-8">
          <h1 className="text-[180px] md:text-[220px] font-light tracking-[-0.05em] text-[#162456] leading-none select-none">
            404
          </h1>
          
        </div>

        <h2 className="text-3xl md:text-4xl font-light tracking-wide text-black mb-4">
          Lost in the Gallery?
        </h2>
        
        <p className="text-gray-600 text-lg mb-12 max-w-sm mx-auto">
          The artwork you're looking for seems to have wandered off. 
          Don't worry, there's plenty more beauty to discover.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <Link 
            href="/"
            className="bg-black hover:bg-[#162456] text-white px-10 py-2 text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Return to Gallery
            <span className="group-hover:rotate-45 transition-transform">→</span>
          </Link>

          <Link 
            href="/shop"
            className="border border-black hover:bg-black hover:text-white px-10 py-2 text-lg font-medium transition-all duration-300"
          >
            Browse All Art
          </Link>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-12 text-gray-400 text-sm tracking-widest">
        ARTZA • EST 2026
      </div>
    </div>
  );
}