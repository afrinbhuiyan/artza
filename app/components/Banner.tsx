import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative container mx-auto  min-h-[800px] flex items-center overflow-hidden  ">
      
    

      {/* Right Side - Text Content */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-16 py-20 md:py-0 flex items-center min-h-[800px]">
        <div className="max-w-xl space-y-8">
          
          <div className="inline-block px-5 py-2 bg-white/90 backdrop-blur-md text-black text-sm tracking-widest uppercase font-medium border border-black/10">
            New Collection 2026
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide text-black">
            Art that<br />
            tells your story
          </h1>

          <p className="text-xl text-gray-600 max-w-lg">
            Discover original paintings and limited edition artworks 
            from emerging and established artists.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/shop" 
              className="bg-black text-white px-10 py-2 text-lg font-medium hover:bg-[#162456] transition-all duration-300 flex items-center gap-2"
            >
              Shop Now
              <span>→</span>
            </a>
          </div>
        </div>
      </div>


  {/* Left Side - Full Width Image */}
      <div className="absolute md:relative md:w-1/2 min-h-[800px] md:h-auto left-0 top-0">
        <Image 
          src="/assets/floral_flower_banner.jpg" 
          alt="Floral Flower Art - Original Painting" 
          fill 
          className="object-cover" 
          priority 
        />
        
        {/* Dark overlay for better look on mobile */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/10" />
      </div>
    </div>
  );
}