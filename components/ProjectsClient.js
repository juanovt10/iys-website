// 'use client';

// import React, { useState } from 'react';
// import ProjectCard from '@/components/ProjectCard';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// export default function ProjectsClient({ projects, locations, serviceTypes }) {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [locationFilter, setLocationFilter] = useState('');
//   const [serviceTypeFilter, setServiceTypeFilter] = useState('');

//   // Filter out invalid values from locations and serviceTypes
//   const validLocations = locations.filter(location => typeof location === 'string' && location.trim() !== '');
//   const validServiceTypes = serviceTypes.filter(serviceType => typeof serviceType === 'string' && serviceType.trim() !== '');

//   const handleFilter = () => {
//     const filtered = projects.filter(
//       project =>
//         (locationFilter === '' || project.location === locationFilter) &&
//         (serviceTypeFilter === '' || project.serviceType === serviceTypeFilter)
//     );
//     setFilteredProjects(filtered);
//   };

//   const clearFilters = () => {
//     setLocationFilter('');
//     setServiceTypeFilter('');
//     setFilteredProjects(projects);
//   };

//   return (
//     <main className="space-y-10 px-10 md:px-20 py-10">
//       <h1 className="text-4xl font-bold">Our Projects</h1>

//       <div className="flex flex-col md:flex-row gap-4 items-end">
//         {/* Location Filter */}
//         <div className="w-full md:w-1/3">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//           <Select value={locationFilter} onValueChange={setLocationFilter}>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Select Location" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem>All Locations</SelectItem>
//               {validLocations.map(location => (
//                 <SelectItem key={location} value={location}>
//                   {location}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Service Type Filter */}
//         <div className="w-full md:w-1/3">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
//           <Select value={serviceTypeFilter} onValueChange={setServiceTypeFilter}>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Select Service Type" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem>All Service Types</SelectItem>
//               {validServiceTypes.map(serviceType => (
//                 <SelectItem key={serviceType} value={serviceType}>
//                   {serviceType}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Filter Actions */}
//         <div className="flex gap-2">
//           <Button onClick={handleFilter}>Apply Filters</Button>
//           <Button variant="outline" onClick={clearFilters}>
//             Clear Filters
//           </Button>
//         </div>
//       </div>

//       {/* Filtered Projects */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map(project => (
//           <ProjectCard
//             key={project.id}
//             imageSrc={project.imageSrc}
//             title={project.title}
//             description={project.description}
//             tags={project.tags}
//           />
//         ))}
//       </div>

//       {/* No Projects Found */}
//       {filteredProjects.length === 0 && (
//         <p className="text-center text-gray-500">No projects found matching the selected filters.</p>
//       )}
//     </main>
//   );
// }

'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import ProjectCard from '@/components/ProjectCard';
import { PaintRoller, Construction, TrafficCone } from 'lucide-react';
import Hero1 from '../assets/images/hero1.jpg';

const projects = [
  { id: 1, imageSrc: Hero1, title: "Via Publica Project", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["Vertical", "Horizontal", "Devices"] },
  { id: 1, imageSrc: Hero1, title: "Via Publica Project", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["Vertical", "Horizontal", "Devices"] },
  { id: 1, imageSrc: Hero1, title: "Via Publica Project", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["Vertical", "Horizontal", "Devices"] },
  { id: 1, imageSrc: Hero1, title: "Via Publica Project", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["Vertical", "Horizontal", "Devices"] },
  { id: 1, imageSrc: Hero1, title: "Via Publica Project", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", tags: ["Vertical", "Horizontal", "Devices"] },
];

const services = [
  { name: "Horizontal Signage", icon: PaintRoller },
  { name: "Vertical Signage", icon: Construction },
  { name: "Devices", icon: TrafficCone }
];
const locations = ["Cundinamarca", "Meta", "Quindio", "Bogota"];

export default function ProjectsClient() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const toggleLocation = (location) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const clearFilters = () => {
    setSelectedServices([]);
    setSelectedLocations([]);
  };

  const filteredProjects = projects.filter(project =>
    (selectedServices.length === 0 || selectedServices.includes(project.serviceType)) &&
    (selectedLocations.length === 0 || selectedLocations.includes(project.location))
  );

  return (
    <main className="space-y-24 mt-20">
      <section className="px-4 md:px-20 space-y-12">
        <h1 className="text-4xl font-bold text-center">Our Projects</h1>
        
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Filters</h2>
            <Button onClick={clearFilters} variant="outline">
              Clear all
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Services</h3>
              <div className="flex flex-wrap gap-3">
                {services.map(({ name, icon: Icon }) => (
                  <Button
                    key={name}
                    onClick={() => toggleService(name)}
                    variant={selectedServices.includes(name) ? "default" : "outline"}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Location</h3>
              <div className="flex flex-wrap gap-3">
                {locations.map(location => (
                  <Button
                    key={location}
                    onClick={() => toggleLocation(location)}
                    variant={selectedLocations.includes(location) ? "default" : "outline"}
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.name}
              description={project.description}
              tags={[project.serviceType, project.location]}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground">No projects found matching the selected filters.</p>
        )}
      </section>
    </main>
  );
}

