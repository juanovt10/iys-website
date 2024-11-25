import React from 'react'
import Hero1 from '../assets/images/hero1.jpg'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { PaintRoller } from "lucide-react"; // Example icon from lucide-react
import { Construction } from "lucide-react";
import { TrafficCone } from "lucide-react";
  
const page = () => {
  return (
    <div className='space-y-10'>
      <Hero
        imageSrc={Hero1}
        title="Infraestrucutra y Senalizacion"
        subtitle="Your new partner in blah blah blah"
      />

      <div className='font-semibold px-20 space-y-6'>
        <h1 className='text-3xl'>Our Services</h1>
        <div className='flex gap-4'>
          <ServiceCard
            Icon={PaintRoller}
            title="Horizontal Signage"
            description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
          />

          <ServiceCard
            Icon={Construction}
            title="Vertical Signage"
            description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
          />

          <ServiceCard
            Icon={TrafficCone}
            title="Devices"
            description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
          />
        </div>
      </div>
    </div>
  )
}


export default page