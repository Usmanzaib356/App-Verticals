'use client'
import About from '@/Components/About'
import CarouselCards from '@/Components/CarouselCards'
import CaseStudy from '@/Components/CaseStudy'
import Customer from '@/Components/Customer'
import Footer from '@/Components/Footer'
import Form from '@/Components/Form'
import Hero from '@/Components/Hero'
import Industries from '@/Components/Industries'
import Process from '@/Components/Process'
import Usa from '@/Components/Usa'
import React from 'react'
function page() {
  return (
    <>
     <Hero/>
     <CarouselCards/>
     <Usa/>
     <CaseStudy/>
     <Process/>
     <About/>
     <Industries/>
     {/* <Customer/> */}
     <Form/>
     <Footer/>
    </>
  )
}

export default page