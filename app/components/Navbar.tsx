'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useRef } from 'react'

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setShopOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShopOpen(false), 100)
  }

  return (
    <div className="bg-white text-black font-sans">

      {/* Main Nav */}
      <div className="relative flex items-center justify-between px-12 h-20 bg-white z-50 shadow-md shadow-[#161a2507]">

        {/* Left Links */}
        <ul className="flex items-center gap-8 list-none m-0 p-0">

          {/* Shop Art with hover dropdown */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-lg text-black border-b border-[#162456] pb-0.5 tracking-wide bg-transparent cursor-pointer hover:text-[#162456] transition-colors">
              Shop Art
            </button>

            {shopOpen && (
              <div
                className="fixed left-0 top-20 w-screen bg-[#469aa51c] backdrop-blur-sm z-40 flex"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Subject */}
                <div className="px-10 py-9 min-w-[160px] border-r border-blue-900/10">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Subject</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'Animals',   href: '/shop/subject/animals' },
                      { label: 'Flora',     href: '/shop/subject/flora' },
                      { label: 'Landscape', href: '/shop/subject/landscape' },
                      { label: 'Nudes',     href: '/shop/subject/nudes' },
                      { label: 'People',    href: '/shop/subject/people' },
                      { label: 'Western',   href: '/shop/subject/western' },
                      { label: 'Seascape',  href: '/shop/subject/seascape' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Style */}
                <div className="px-10 py-9 min-w-[160px] border-r border-blue-900/10">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Style</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'Abstract',      href: '/shop/style/abstract' },
                      { label: 'Classical',     href: '/shop/style/classical' },
                      { label: 'Expressionism', href: '/shop/style/expressionism' },
                      { label: 'Impressionism', href: '/shop/style/impressionism' },
                      { label: 'Modern',        href: '/shop/style/modern' },
                      { label: 'Realism',       href: '/shop/style/realism' },
                      { label: 'Surrealism',    href: '/shop/style/surrealism' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Medium */}
                <div className="px-10 py-9 min-w-[200px] border-r border-blue-900/10">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Medium</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'Oil Paintings',       href: '/shop/medium/oil' },
                      { label: 'Watercolor Paintings', href: '/shop/medium/watercolor' },
                      { label: 'Acrylic Paintings',   href: '/shop/medium/acrylic' },
                      { label: 'Mixed Media Art',     href: '/shop/medium/mixed-media' },
                      { label: 'Encaustic Art',       href: '/shop/medium/encaustic' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/shop/all" className="inline-block mt-5 text-lg font-medium underline underline-offset-2 hover:text-[#162456] transition-colors">
                    See All Artworks
                  </Link>
                </div>

                {/* Discover */}
                <div className="px-10 py-9 min-w-[180px] border-r border-blue-900/10">
                  <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4">Discover</p>
                  <ul className="space-y-3 list-none p-0 m-0">
                    {[
                      { label: 'New Art This Month', href: '/shop/new' },
                      { label: 'Staff Favorites',    href: '/shop/staff-favorites' },
                      { label: 'Commission Art',     href: '/commissions' },
                      { label: 'Gift Cards',         href: '/gift-cards' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="text-lg text-black hover:text-[#162456] transition-colors">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/artists" className="text-lg text-gray-500 hover:text-black transition-colors tracking-wide">
              Our Artists
            </Link>
          </li>
          <li>
            <Link href="/commissions" className="text-lg text-gray-500 hover:text-black transition-colors tracking-wide">
              Commissions
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg text-gray-500 hover:text-black transition-colors tracking-wide">
              About Us
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image src="/logo.png" alt="Artza Logo" width={120} height={40} className="object-contain" />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="/wishlist" className="text-lg text-gray-500 hover:text-[#162456] transition-colors">
            Wishlist
          </Link>
          <Link href="/login" className="text-lg text-gray-500 hover:text-[#162456] transition-colors">
            Log In
          </Link>
          <Link href="/cart" className="text-lg text-gray-500 hover:text-[#162456] transition-colors">
            Cart
          </Link>
        </div>

      </div>
    </div>
  )
}