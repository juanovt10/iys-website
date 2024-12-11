// import React from 'react'
// import Hero1 from '../assets/images/hero1.jpg'
// import Hero from '@/components/Hero'
// import ServiceCard from '@/components/ServiceCard'
// import { PaintRoller } from "lucide-react"; // Example icon from lucide-react
// import { Construction } from "lucide-react";
// import { TrafficCone } from "lucide-react";
// import { Button } from '@/components/ui/button';
// import ProjectCard from '@/components/ProjectCard';

// const page = () => {
//   const projects = [
//     {
//       imageSrc: Hero1,
//       title: "Via Publica Project",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       tags: ["Vertical", "Horizontal", "Devices"],
//     },
//     {
//       imageSrc: Hero1,
//       title: "Vertical Signage Project",
//       description: "Purus et tortor enim eget tincidunt pellentesque lorem.",
//       tags: ["Vertical", "Devices"],
//     },
//     {
//       imageSrc: Hero1,
//       title: "Vertical Signage Project",
//       description: "Purus et tortor enim eget tincidunt pellentesque lorem.",
//       tags: ["Vertical", "Devices"],
//     },
//   ];


//   return (
//     <main className='space-y-20 mb-20'>
//       <Hero
//         imageSrc={Hero1}
//         title="Infraestrucutra y Senalizacion"
//         subtitle="Your new partner in blah blah blah"
//       />

//       <div className='px-10 md:px-20 space-y-6'>
//         <h1 className='text-3xl'>Our Services</h1>
//         <div className='flex gap-4 flex-col md:flex-row'>
//           <ServiceCard
//             Icon={PaintRoller}
//             title="Horizontal Signage"
//             description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
//             link="/services/horizontal-signage"
//           />

//           <ServiceCard
//             Icon={Construction}
//             title="Vertical Signage"
//             description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
//             link="/services/vertical-signage"
//           />

//           <ServiceCard
//             Icon={TrafficCone}
//             title="Devices"
//             description="Lorem ipsum dolor sit amet consectetur. Purus et tortor enim eget tincidunt. Phasellus quam aliquam integer neque integer et amet vulputate tristique."
//             link="/services/devices"
//           />
//         </div>
//       </div>

//       {/* Projects */}
//       <div className='px-10 md:px-20 space-y-6'>
//         <div className='flex justify-between'>
//           <h1 className='text-3xl'>Projects</h1>
//           <Button>View All Projects</Button>
//         </div>
//         <div className='flex gap-4 flex-col md:flex-row'>
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={index}
//               imageSrc={project.imageSrc}
//               title={project.title}
//               description={project.description}
//               tags={project.tags}
//             />
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }


// export default page

'use client'

import React from 'react'
import Image from 'next/image'
import Hero1 from '../assets/images/hero1.jpg'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { PaintRoller, Construction, TrafficCone, CheckCircle, Sun, Moon, CircleCheckBig, Timer, UserRoundCheck, HardHat } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/ProjectCard'
import { Card, CardContent } from '@/components/ui/card'
import ValueCard from '@/components/ValueCard'
import CTA from '@/components/CTA'

const Page = () => {

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
      title: "Horizontal Signage Project",
      description: "Purus et tortor enim eget tincidunt pellentesque lorem.",
      tags: ["Horizontal", "Devices"],
    },
  ];


  const whyChooseUs = [
    { title: "Expert Team", description: "Our team of professionals brings years of experience to every project.", icon: HardHat },
    { title: "Quality Materials", description: "We use only the highest quality materials to ensure durability and longevity.", icon: CircleCheckBig },
    { title: "Timely Delivery", description: "We pride ourselves on completing projects on time and within budget.", icon: Timer },
    { title: "Customer Satisfaction", description: "Our commitment to excellence ensures 100% customer satisfaction.", icon: UserRoundCheck },
  ];
  
  return (
    <main className='space-y-24'>
      <Hero
        imageSrc={Hero1}
        title="Infraestructura y Señalización"
        subtitle="Your new partner in infrastructure and signage solutions"
      />

      <section className='px-4 md:px-20 space-y-12'>
        <h2 className='text-4xl font-bold text-center'>Our Services</h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <ServiceCard
            Icon={PaintRoller}
            title="Horizontal Signage"
            description="Expert road marking and horizontal signage solutions for improved traffic management and safety."
            link="/services/horizontal-signage"
          />

          <ServiceCard
            Icon={Construction}
            title="Vertical Signage"
            description="High-quality vertical signage installations for clear communication and effective traffic control."
            link="/services/vertical-signage"
          />

          <ServiceCard
            Icon={TrafficCone}
            title="Traffic Devices"
            description="Cutting-edge traffic control devices to enhance road safety and optimize traffic flow."
            link="/services/devices"
          />
        </div>
      </section>

      <section className='px-4 md:px-20 space-y-12 bg-muted py-16'>
        <h2 className='text-4xl font-bold text-center'>Why Choose Us</h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {whyChooseUs.map((item, index) => (
            <ValueCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className='px-4 md:px-20 space-y-12'>
        <div className='flex justify-between items-center'>
          <h2 className='text-4xl font-bold'>Featured Projects</h2>
          <Button size="lg">View All Projects</Button>
        </div>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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
      </section>
      <CTA service='Infraestructura y Senalizacion'/>
    </main>
  )
}

export default Page
