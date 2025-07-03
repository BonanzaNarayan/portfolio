import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/layouts/Header'
import Hero from '@/components/layouts/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import React from 'react'

export default function page() {
  return (
    <div className=' '>
      <Header />
      <main className=''>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  )
}
