import ContactForm from '@/components/layout/contact-form'
import React from 'react'

function Contact() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="container mx-auto px-4 py-12">
        <div className='text-center'>
          <h1 className="text-3xl lg:text-5xl font-bold mt-5 mb-12">
            Contact <span className="text-pink-600">Form</span>
          </h1>
        </div>

        {/* Validation added using zod and react-hook-form */}
        <ContactForm/>  
      </div>

    </div>
  )
}

export default Contact
