import React from "react";

const About = () => {
  return (
    <>

      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          background: "url('https://images.pexels.com/photos/5264957/pexels-photo-5264957.jpeg') center/cover no-repeat",
          height: "60vh",
          marginTop: "70px",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="fw-bold display-4">About Us</h1>
          <p className="lead">Discover our journey, values, and global presence</p>
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our History</h2>
          <p className="text-muted">From humble beginnings to a global brand</p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.pexels.com/photos/5264949/pexels-photo-5264949.jpeg"
              className="img-fluid rounded shadow"
              alt="Our History"
            />
          </div>
          <div className="col-md-6">
            <h4 className="fw-semibold">The Journey of Marco Polo</h4>
            <p>
              Founded in 2000, Marco Polo started as a small tailoring shop with a vision to redefine men’s fashion.
              Over the years, we have grown into a trusted global brand known for premium quality, timeless designs,
              and customer satisfaction.
            </p>
            <p>
              Our commitment to elegance and craftsmanship has made us a favorite among fashion enthusiasts worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Branches</h2>
          <p className="text-muted">Expanding across the globe to serve you better</p>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100 border-0">
              <img
                src="https://media.istockphoto.com/id/1572391955/photo/clothing-boutique-with-clothes-and-accessories-on-display.jpg?b=1&s=612x612&w=0&k=20&c=0cDDoOlJE2a_jTbwigH6MQwawyaQYfGuNe2mVCm_GKg="
                className="card-img-top"
                alt="New York Branch"
              />
              <div className="card-body">
                <h5 className="fw-bold">Kanjirapally</h5>
                <p className="text-muted">
                  Our flagship store in the heart of Manhattan offers the best of our collections.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 border-0">
              <img
                src="https://media.istockphoto.com/id/1572391955/photo/clothing-boutique-with-clothes-and-accessories-on-display.jpg?b=1&s=612x612&w=0&k=20&c=0cDDoOlJE2a_jTbwigH6MQwawyaQYfGuNe2mVCm_GKg="
                className="card-img-top"
                alt="London Branch"
              />
              <div className="card-body">
                <h5 className="fw-bold">Mundakaym</h5>
                <p className="text-muted">
                  A premium shopping experience in the fashion capital of Europe.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 border-0">
              <img
                src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?b=1&s=612x612&w=0&k=20&c=5T9d2q0viYR1DVcq7FGllJpVTkSrfdpuLHODWiH1a5I="
                className="card-img-top"
                alt="Dubai Branch"
              />
              <div className="card-body">
                <h5 className="fw-bold">Mundakayam</h5>
                <p className="text-muted">
                  Luxury and style meet at our store in the Middle East’s fashion hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default About;
