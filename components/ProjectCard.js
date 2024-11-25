import React from "react";
import Image from "next/image";

const ProjectCard = ({ imageSrc, title, description, tags }) => {
  return (
    <div className="card overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-black">{title}</h2>

        {/* Description */}
        <p className="mt-2 text-gray-600">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium bg-green-200 text-green-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
