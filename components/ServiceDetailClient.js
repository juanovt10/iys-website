'use client';

import React from 'react';
import Hero from './Hero';
import { Button } from './ui/button';
import ProjectCard from './ProjectCard';
import CTA from './CTA';

const ServiceDetailClient = ({ service }) => {
  return (
    <main className="space-y-20">
      {/* Hero Section */}
      <Hero
        imageSrc={service.imageSrc}
        title={service.title}
        subtitle={service.subtitle}
      />

      {/* About Section */}
      <section className="px-10 md:px-20 space-y-6">
        <h2 className="text-3xl font-bold">About {service.title}</h2>
        <p className="text-gray-700 max-w-3xl">{service.detailedDescription}</p>
      </section>

      {/* Products Section */}
      <section className="px-10 md:px-20 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">Products</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.products.map((product, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary">•</span>
                <span className="text-gray-700">{product}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="px-10 md:px-20 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          <Button onClick={() => (window.location.href = '/projects')}>
            View All Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.relatedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.name}
              description={`Learn more about ${project.name}.`}
              tags={project.tags || ['Example Tag']}
            />
          ))}
        </div>
      </section>
      <CTA 
        title="get started?"
        service={service.title.toLowerCase()}
      />
    </main>
  );
};

export default ServiceDetailClient;

