import React from 'react'
import TestimonialCard from './TestimonialCard'
import { useAppContext } from '../context/AppContext'

function Testimonials() {

    const { testimonials } = useAppContext()

    return (
        <>
            <section className="container my-5">
                <h3 className="fw-bold mb-4 mt-3">What Our Customers Say</h3>
                <div className="row g-4" id="testimonial-list">
                    {testimonials.slice(0,3).map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Testimonials
