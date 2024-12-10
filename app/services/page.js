import React from 'react'
import Hero3 from '../../assets/images/hero3.jpg'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { PaintRoller, Construction, TrafficCone } from "lucide-react"; // Example icon from lucide-react

const Services = () => {
  return (
    <main className='space-y-20 mb-20'>
      <Hero
        imageSrc={Hero3}
        title="Our services"
        subtitle="The complete solution for your signage project"
      />

      <section className='px-20 space-y-6'>
        <ServiceCard
          Icon={PaintRoller}
          title="Horizontal Signage"
          description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
          link="/services/horizontal-signage"
        />
        <ServiceCard
          Icon={Construction}
          title="Vertical Signage"
          description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
          link="/services/vertical-signage"
        />

        <ServiceCard
          Icon={TrafficCone}
          title="Devices"
          description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
          link="/services/devices"
        />
      </section>
    </main>
  )
}

export default Services