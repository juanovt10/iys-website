import React from 'react'
import Hero2 from '../../assets/images/hero2.jpg'
import Hero from '@/components/Hero'
import ValueCard from '@/components/ValueCard'
import { Search, CheckCircle, Shield } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Search,
      title: "Transparency",
      description: "We operate with openness and honesty in all our interactions and decisions.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We uphold the highest ethical standards in everything we do.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "We ensure the safety and reliability of all our operations and services.",
    },
  ];


  return (
    <main className='space-y-20 mb-20'>
      <Hero
        imageSrc={Hero2}
        title="Who is infraestructura y senalizacion"
        subtitle="IS, founded in 2008 in Villavicencio, Meta, is a leading Colombian company specializing in high-quality road signage and installations. Known for innovative, cost-effective solutions, IS has built a strong reputation by serving both public and private entities with exceptional customer service and cutting-edge technologies. With a diverse project portfolio, IS is the trusted choice for reliable and efficient road infrastructure services, from small projects to large-scale installations."
      />

      {/* mission vision */}
      <section className='px-20'>
        <div className="container mx-auto px-6 text-center space-y-8">
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary">Mission</h2>
            <p className="text-lg text-black">
              At <span className="text-primary">Infrastructura y Señalización</span>, our mission is to study, design, and manage all types of civil works, whether through contracts, administration, or concessions, for both public and private organizations, with the aim of improving the welfare of society. Innovation is a fundamental part of our corporate culture, enabling us to undertake unique and high-quality projects that leave a distinctive mark on our management and construction approach, reflecting our commitment to the business.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <p className="text-xl font-bold text-primary">Vision</p>
            <p className="text-lg text-black">
              Our vision is to become a <span className="text-primary">strategic ally for our clients</span> and a highly recognized, profitable company at the national and international level for our <span className="text-primary">creativity and innovation</span> in developing new businesses and fulfilling our commitments. We aim to stand out in providing comprehensive solutions by utilizing state-of-the-art equipment and technology.
            </p>
          </div>
        </div>

      </section>
      <section className='px-20 space-y-6'>
        <h1 className='text-3xl'>Our Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutUs