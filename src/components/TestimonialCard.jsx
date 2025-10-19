import React, { useState } from 'react'

const TestimonialCard = ({ testimonial }) => {
    const [hover, setHover] = useState(false);
    return testimonial && (
        <>
            <div className="col-md-4" id="card">
                <div className="card shadow border-0 p-3 h-100">
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={testimonial.img}
                            className="rounded-circle me-3"
                            alt="Customer"
                            style={{
                                width: hover ? "120px" : "100px",
                                height: hover ? "140px" : "130px",
                                objectFit: "cover",
                                transition: "0.3s ease"
                            }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                        <div>
                            <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                            <small className="text-muted">{testimonial.role}</small>
                        </div>
                    </div>
                    <p>
                        {testimonial.text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard
