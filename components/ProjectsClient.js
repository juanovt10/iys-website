'use client';

import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function ProjectsClient({ projects, locations, serviceTypes }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [locationFilter, setLocationFilter] = useState('');
  const [serviceTypeFilter, setServiceTypeFilter] = useState('');

  // Filter out invalid values from locations and serviceTypes
  const validLocations = locations.filter(location => typeof location === 'string' && location.trim() !== '');
  const validServiceTypes = serviceTypes.filter(serviceType => typeof serviceType === 'string' && serviceType.trim() !== '');

  const handleFilter = () => {
    const filtered = projects.filter(
      project =>
        (locationFilter === '' || project.location === locationFilter) &&
        (serviceTypeFilter === '' || project.serviceType === serviceTypeFilter)
    );
    setFilteredProjects(filtered);
  };

  const clearFilters = () => {
    setLocationFilter('');
    setServiceTypeFilter('');
    setFilteredProjects(projects);
  };

  return (
    <main className="space-y-10 px-10 md:px-20 py-10">
      <h1 className="text-4xl font-bold">Our Projects</h1>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        {/* Location Filter */}
        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem>All Locations</SelectItem>
              {validLocations.map(location => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Service Type Filter */}
        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
          <Select value={serviceTypeFilter} onValueChange={setServiceTypeFilter}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Service Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem>All Service Types</SelectItem>
              {validServiceTypes.map(serviceType => (
                <SelectItem key={serviceType} value={serviceType}>
                  {serviceType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Filter Actions */}
        <div className="flex gap-2">
          <Button onClick={handleFilter}>Apply Filters</Button>
          <Button variant="outline" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Filtered Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>

      {/* No Projects Found */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500">No projects found matching the selected filters.</p>
      )}
    </main>
  );
}
