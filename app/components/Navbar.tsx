'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef } from 'react'

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setShopOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShopOpen(false), 150)
  }

  return (
    <div className="bg-white text-black font-sans sticky top-0 z-50">

      {/* Main Nav */}
      <div className="relative flex items-center justify-between px-6 md:px-12 lg:px-20 h-20 bg-white">

        {/* Left Links - Desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">

          {/* Shop Art with hover dropdown */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-lg text-black border-b border-[#162456] pb-0.5 tracking-wide bg-transparent cursor-pointer hover:text-[#162456] transition-colors">
              Shop Art
            </button>

            {/* Dropdown Menu */}
            {shopOpen && (
              <div
                className="fixed left-0 top-20 w-screen bg-[#469aa51c] backdrop-blur-sm z-40 flex flex-col md:flex-row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Subject */}
                <div className="px-8 py-8 md:px-10 md:py-9 min-w-[160px] border-b md:border-r border-blue-900/10">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Subject</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'Animals', href: '/shop/subject/animals' },
                      { label: 'Flora', href: '/shop/subject/flora' },
                      { label: 'Landscape', href: '/shop/subject/landscape' },
                      { label: 'Nudes', href: '/shop/subject/nudes' },
                      { label: 'People', href: '/shop/subject/people' },
                      { label: 'Western', href: '/shop/subject/western' },
                      { label: 'Seascape', href: '/shop/subject/seascape' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors block">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Style */}
                <div className="px-8 py-8 md:px-10 md:py-9 min-w-[160px] border-b md:border-r border-blue-900/10">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Style</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'Abstract', href: '/shop/style/abstract' },
                      { label: 'Classical', href: '/shop/style/classical' },
                      { label: 'Expressionism', href: '/shop/style/expressionism' },
                      { label: 'Impressionism', href: '/shop/style/impressionism' },
                      { label: 'Modern', href: '/shop/style/modern' },
                      { label: 'Realism', href: '/shop/style/realism' },
                      { label: 'Surrealism', href: '/shop/style/surrealism' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors block">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Medium */}
                <div className="px-8 py-8 md:px-10 md:py-9 min-w-[200px] border-b md:border-r border-blue-900/10">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Medium</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'Oil Paintings', href: '/shop/medium/oil' },
                      { label: 'Watercolor Paintings', href: '/shop/medium/watercolor' },
                      { label: 'Acrylic Paintings', href: '/shop/medium/acrylic' },
                      { label: 'Mixed Media Art', href: '/shop/medium/mixed-media' },
                      { label: 'Encaustic Art', href: '/shop/medium/encaustic' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors block">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/shop" className="inline-block mt-6 text-lg font-medium underline underline-offset-2 hover:text-[#162456] transition-colors">
                    See All Artworks
                  </Link>
                </div>

                {/* Discover */}
                <div className="px-8 py-8 md:px-10 md:py-9 min-w-[180px]">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Discover</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'New Art This Month', href: '/shop/new' },
                      { label: 'Staff Favorites', href: '/shop/staff-favorites' },
                      { label: 'Commission Art', href: '/commissions' },
                      { label: 'Gift Cards', href: '/gift-cards' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors block">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li><Link href="/commissions" className="text-lg text-gray-500 hover:text-black transition-colors tracking-wide">Commissions</Link></li>
          <li><Link href="/about" className="text-lg text-gray-500 hover:text-black transition-colors tracking-wide">About Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-black"
        >
          ☰
        </button>

        {/* Logo - Centered */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo.png" alt="Artza Logo" width={110} height={38} className="object-contain" />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/wishlist" className="text-lg text-gray-500 hover:text-[#162456] transition-colors hidden sm:block">Wishlist</Link>
          <Link href="/login" className="text-lg text-gray-500 hover:text-[#162456] transition-colors">Log In</Link>
          <Link href="/cart" className="text-lg text-gray-500 hover:text-[#162456] transition-colors">Cart</Link>
        </div>

      </div>

      {/* Mobile Menu (Simple) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-6 px-6">
          <ul className="flex flex-col gap-6 text-lg">
            <li><Link href="/shop" className="block">Shop Art</Link></li>
            <li><Link href="/artists" className="block">Our Artists</Link></li>
            <li><Link href="/commissions" className="block">Commissions</Link></li>
            <li><Link href="/about" className="block">About Us</Link></li>
            <li><Link href="/wishlist" className="block">Wishlist</Link></li>
          </ul>
        </div>
      )}
    </div>
  )
}