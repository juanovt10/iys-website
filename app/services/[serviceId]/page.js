import React from 'react';
import Hero from '@/components/Hero';
import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/ServiceDetailClient';

// Service data (replace this with your actual data fetching logic)
const services = {
  'horizontal-signage': {
    title: 'Horizontal Signage',
    subtitle: 'Detailed solutions for road markings and more.',
    imageSrc: '/images/horizontal-signage.jpg',
    detailedDescription:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula sociosqu nisi a facilisi tempus leo. Nisi sapien porta euismod ac nunc dolor. Dignissim nisl fames quis, et phasellus maximus. Ex eleifend mus est, magna nunc iaculis. Leo aenean natoque nullam fermentum cras ultricies urna bibendum nisi. Porta ullamcorper vitae fames a fermentum augue. Tortor sodales conubia nulla ad pretium. Rhoncus consequat magnis interdum fusce finibus. Montes per etiam libero lobortis turpis himenaeos. Aliquam ridiculus etiam viverra eros tempus laoreet magnis eu lectus. Sociosqu pretium pulvinar netus habitasse eros mus cursus faucibus. Ultricies lobortis rutrum integer mattis eu a ridiculus dolor morbi. Aliquet fusce orci hac; ligula blandit senectus. Lectus nibh ornare gravida habitasse sodales quisque enim pellentesque.',
    products: ['Lines', 'Zebra crossings', 'Parking markers', 'Lane dividers'],
    relatedProjects: [
      {
        id: 1,
        name: 'Project A',
        imageSrc: '/images/project-a.jpg',
        description: 'A project focused on durable road markings.',
        tags: ['Road Markings', 'Horizontal Signage'],
        link: '/projects/project-a',
      },
      {
        id: 2,
        name: 'Project B',
        imageSrc: '/images/project-b.jpg',
        description: 'A project featuring parking lot signage.',
        tags: ['Parking Signage', 'Safety'],
        link: '/projects/project-b',
      },
    ],
  },
  'vertical-signage': {
    title: 'Vertical Signage',
    subtitle: 'Stand-out signage solutions for every location.',
    imageSrc: '/images/vertical-signage.jpg',
    detailedDescription:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula sociosqu nisi a facilisi tempus leo. Nisi sapien porta euismod ac nunc dolor. Dignissim nisl fames quis, et phasellus maximus. Ex eleifend mus est, magna nunc iaculis. Leo aenean natoque nullam fermentum cras ultricies urna bibendum nisi. Porta ullamcorper vitae fames a fermentum augue. Tortor sodales conubia nulla ad pretium. Rhoncus consequat magnis interdum fusce finibus. Montes per etiam libero lobortis turpis himenaeos. Aliquam ridiculus etiam viverra eros tempus laoreet magnis eu lectus. Sociosqu pretium pulvinar netus habitasse eros mus cursus faucibus. Ultricies lobortis rutrum integer mattis eu a ridiculus dolor morbi. Aliquet fusce orci hac; ligula blandit senectus. Lectus nibh ornare gravida habitasse sodales quisque enim pellentesque.',
    products: ['Stop signs', 'Yield signs', 'Directional signs', 'Speed limit signs'],
    relatedProjects: [
      {
        id: 3,
        name: 'Project C',
        imageSrc: '/images/project-c.jpg',
        description: 'A project focused on stop and yield signs for urban intersections.',
        tags: ['Urban Signage', 'Vertical Signs'],
        link: '/projects/project-c',
      },
      {
        id: 4,
        name: 'Project D',
        imageSrc: '/images/project-d.jpg',
        description: 'Directional signs for a major highway project.',
        tags: ['Directional Signs', 'Highway'],
        link: '/projects/project-d',
      },
    ],
  },
  'devices': {
    title: 'Devices',
    subtitle: 'Traffic management devices for safety and efficiency.',
    imageSrc: '/images/devices.jpg',
    detailedDescription:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula sociosqu nisi a facilisi tempus leo. Nisi sapien porta euismod ac nunc dolor. Dignissim nisl fames quis, et phasellus maximus. Ex eleifend mus est, magna nunc iaculis. Leo aenean natoque nullam fermentum cras ultricies urna bibendum nisi. Porta ullamcorper vitae fames a fermentum augue. Tortor sodales conubia nulla ad pretium. Rhoncus consequat magnis interdum fusce finibus. Montes per etiam libero lobortis turpis himenaeos. Aliquam ridiculus etiam viverra eros tempus laoreet magnis eu lectus. Sociosqu pretium pulvinar netus habitasse eros mus cursus faucibus. Ultricies lobortis rutrum integer mattis eu a ridiculus dolor morbi. Aliquet fusce orci hac; ligula blandit senectus. Lectus nibh ornare gravida habitasse sodales quisque enim pellentesque.',
    products: ['Guardrails', 'Cones', 'Barriers', 'Delineators'],
    relatedProjects: [
      {
        id: 5,
        name: 'Project E',
        imageSrc: '/images/project-e.jpg',
        description: 'Traffic cones and barriers for a construction zone.',
        tags: ['Safety Devices', 'Construction'],
        link: '/projects/project-e',
      },
      {
        id: 6,
        name: 'Project F',
        imageSrc: '/images/project-f.jpg',
        description: 'Guardrails installed on a mountain road for enhanced safety.',
        tags: ['Guardrails', 'Mountain Roads'],
        link: '/projects/project-f',
      },
    ],
  },
};




export async function generateStaticParams() {
  return Object.keys(services).map((serviceId) => ({
    serviceId,
  }));
}

const ServiceDetail = ({ params }) => {
  const { serviceId } = params;

  const service = services[serviceId];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailClient service={service} />
    </main>
  );
};

export default ServiceDetail;
