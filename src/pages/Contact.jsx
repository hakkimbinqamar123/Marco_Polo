import React from "react";

const Contact = () => {
  return (
    <>
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          background: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg') center/cover no-repeat",
          height: "50vh",
          marginTop: "70px",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="fw-bold display-4">Contact Us</h1>
          <p className="lead">We’re here to help. Get in touch with us!</p>
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-muted">Fill out the form below and we’ll get back to you as soon as possible</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="col-12">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn fw-semibold" style={{ backgroundColor: "#e9c810" }}>
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Branches</h2>
          <p className="text-muted">Visit us at any of our locations worldwide</p>
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
                <p className="text-muted">123 5th Avenue, Manhattan, New York</p>
                <p className="text-muted">Phone: +1 123-456-7890</p>
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
                <h5 className="fw-bold">Mundakayam</h5>
                <p className="text-muted">221 Baker Street, London, UK</p>
                <p className="text-muted">Phone: +44 20 7946 0958</p>
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
                <p className="text-muted">Downtown Dubai, UAE</p>
                <p className="text-muted">Phone: +971 4 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;
