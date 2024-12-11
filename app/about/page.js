'use client'

import React from 'react'
import Image from 'next/image'
import Hero2 from '../../assets/images/hero2.jpg'
import Hero from '@/components/Hero'
import ValueCard from '@/components/ValueCard'
import { Search, CheckCircle, Shield, Users, Rocket, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import CTA from '@/components/CTA'

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
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster teamwork and partnerships to achieve exceptional results.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We continuously seek new and improved ways to serve our clients and community.",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "We are committed to making a positive impact on society and the environment.",
    },
  ];

  return (
    <main className='space-y-24'>
      <Hero
        imageSrc={Hero2}
        title="Who is Infraestructura y Señalización"
        subtitle="Founded in 2008, IS is a leading Colombian company specializing in high-quality road signage and installations."
      />

      <section className='px-4 md:px-20'>
        <div className="container mx-auto text-center space-y-16">
          <Card>
            <CardContent className="p-6 md:p-10 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Story</h2>
                <p className="text-lg text-muted-foreground">
                  IS, founded in 2008 in Villavicencio, Meta, has built a strong reputation by serving both public and private entities with exceptional customer service and cutting-edge technologies. With a diverse project portfolio, IS is the trusted choice for reliable and efficient road infrastructure services, from small projects to large-scale installations.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 md:p-10 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Mission</h2>
                <p className="text-lg text-muted-foreground">
                  At <span className="text-primary font-semibold">Infraestructura y Señalización</span>, our mission is to study, design, and manage all types of civil works, whether through contracts, administration, or concessions, for both public and private organizations. We aim to improve the welfare of society through innovation and high-quality projects that leave a distinctive mark on our management and construction approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-10 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Vision</h2>
                <p className="text-lg text-muted-foreground">
                  Our vision is to become a <span className="text-primary font-semibold">strategic ally for our clients</span> and a highly recognized, profitable company at the national and international level. We strive for <span className="text-primary font-semibold">creativity and innovation</span> in developing new businesses and fulfilling our commitments. We aim to stand out in providing comprehensive solutions by utilizing state-of-the-art equipment and technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='px-4 md:px-20 space-y-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-center'>Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <CTA
        title='work with us'
        service='Infraestructura y Senalizacion'
      />
    </main>
  )
}

export default AboutUs

