import React from 'react'
import { Button } from './ui/button'

const CTA = ( { title, service } ) => {
  return (
    <section className="px-10 md:px-20 py-16 bg-primary text-white text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Ready to {title}?</h2>
        <p className="text-lg">
          Let's discuss how {service} can benefit your project.
        </p>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => (window.location.href = '/contact')}
        >
          Contact Us
        </Button>
      </div>
    </section>
  )
}

export default CTA