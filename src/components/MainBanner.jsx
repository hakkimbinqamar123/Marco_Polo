import React, { useState } from 'react'
import bg_img from '../assets/bg_img.jpeg'
import { Link } from 'react-router-dom'

function MainBanner() {
    const [hover, setHover] = useState(false);
    return (
        <>
            <section className="container my-1 hero-section w-full position-relative">
                <div className="row g-0 border">
                    {/* Left Content */}
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-dark text-white p-4">
                        <h1 className="fw-bold mb-3 text-center">
                            REDEFINE YOUR STYLE <br /> WITH "MARCO POLO"
                        </h1>
                        <Link
                            to={"/products"}
                            className="btn btn-warning btn-lg fw-semibold"
                            style={{
                                width: '150px',
                                backgroundColor: hover ? "#d4b400" : "#e9c810",
                                color: hover ? "black" : "white",
                                transition: "0.3s ease",
                            }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            SHOP NOW
                        </Link>
                    </div>

                    <div className="col-md-6">
                        <img
                            src={bg_img}
                            alt="Men's Wear"
                            className="img-fluid w-100 h-100"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBanner
