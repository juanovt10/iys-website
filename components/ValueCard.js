import React from "react";

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card text-center p-6">
      {/* Icon */}
      {Icon && <Icon className="h-8 w-8 text-primary mx-auto mb-4" />}
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;
