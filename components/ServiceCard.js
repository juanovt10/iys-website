import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ Icon, title, description, link }) => {
  return (
    <div className="card p-6">
      {/* Icon */}
      <div className="flex items-center justify-start mb-4">
        {Icon && <Icon className="h-8 w-8 text-primary" />}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-black">{title}</h2>

      {/* Description */}
      <p className="mt-3 text-gray-700">{description}</p>

      {/* Explore Link */}
      <Link
        href={link}
        className="mt-4 inline-block text-primary font-medium hover:underline"
      >
        Explore
      </Link>
    </div>
  )
}

export default ServiceCard