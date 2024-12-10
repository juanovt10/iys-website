import ProjectsClient from "@/components/ProjectsClient";

// This is a Server Component
export default function ProjectsPage() {
  // In a real application, you would fetch this data from an API or database
  const projects = [
    {
      id: 1,
      title: "Via Publica Project",
      description: "Major road signage overhaul in downtown area.",
      imageSrc: "/images/project-c.jpg",
      tags: ["Horizontal", "Urban"],
      location: "City Center",
      serviceType: "Horizontal Signage"
    },
    {
      id: 2,
      title: "Highway Safety Initiative",
      description: "Implementing new safety measures on major highways.",
      imageSrc: "/images/project-c.jpg",
      tags: ["Vertical", "Safety"],
      location: "Highway",
      serviceType: "Vertical Signage"
    },
    {
      id: 3,
      title: "Smart Traffic Management",
      description: "Deploying smart traffic lights and sensors.",
      imageSrc: "/images/project-c.jpg",
      tags: ["Devices", "Smart"],
      location: "Suburban",
      serviceType: "Devices"
    },
    {
      id: 4,
      title: "Rural Road Marking",
      description: "Improving visibility on rural roads with new markings.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      tags: ["Horizontal", "Rural"],
      location: "Rural",
      serviceType: "Horizontal Signage"
    },
    {
      id: 5,
      title: "Urban Wayfinding System",
      description: "Comprehensive urban wayfinding signage system.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      tags: ["Vertical", "Urban"],
      location: "City Center",
      serviceType: "Vertical Signage"
    }
  ];

  // Filter out invalid data
  const validProjects = projects.filter(
    project =>
      project.location && typeof project.location === "string" && project.location.trim() !== "" &&
      project.serviceType && typeof project.serviceType === "string" && project.serviceType.trim() !== ""
  );

  // Generate unique, valid locations and serviceTypes
  const locations = [...new Set(validProjects.map(project => project.location))];
  const serviceTypes = [...new Set(validProjects.map(project => project.serviceType))];

  // Debug logs
  console.log("Valid Projects:", validProjects);
  console.log("Locations:", locations);
  console.log("Service Types:", serviceTypes);

  return (
    <ProjectsClient
      projects={validProjects}
      locations={locations}
      serviceTypes={serviceTypes}
    />
  );
}
