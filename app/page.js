import React from 'react'
import Hero1 from '../assets/images/hero1.jpg'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { PaintRoller } from "lucide-react"; // Example icon from lucide-react
import { Construction } from "lucide-react";
import { TrafficCone } from "lucide-react";
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
  
const page = () => {
  const projects = [
    {
      imageSrc: Hero1,
      title: "Via Publica Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["Vertical", "Horizontal", "Devices"],
    },
    {
      imageSrc: Hero1,
      title: "Vertical Signage Project",
      description: "Purus et tortor enim eget tincidunt pellentesque lorem.",
      tags: ["Vertical", "Devices"],
    },
    {
      imageSrc: Hero1,
      title: "Vertical Signage Project",
      description: "Purus et tortor enim eget tincidunt pellentesque lorem.",
      tags: ["Vertical", "Devices"],
    },
  ];


  return (
    <main className='space-y-20 mb-20'>
      <Hero
        imageSrc={Hero1}
        title="Infraestrucutra y Senalizacion"
        subtitle="Your new partner in blah blah blah"
      />

      <div className='px-10 md:px-20 space-y-6'>
        <h1 className='text-3xl'>Our Services</h1>
        <div className='flex gap-4 flex-col md:flex-row'>
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
        </div>
      </div>

      {/* Projects */}
      <div className='px-10 md:px-20 space-y-6'>
        <div className='flex justify-between'>
          <h1 className='text-3xl'>Projects</h1>
          <Button>View All Projects</Button>
        </div>
        <div className='flex gap-4 flex-col md:flex-row'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </main>
  )
}


export default page