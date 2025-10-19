import React, { useRef } from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function Categories() {
  const { navigate } = useAppContext()
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="container my-5">
      <h3 className="fw-bold mb-4">Featured Categories</h3>

      <div className="position-relative">
        {/* Left Arrow */}
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
          style={{ zIndex: 10 }}
          onClick={scrollLeft}
        >
          <span className="fw-bold">&lt;</span>
        </button>

        {/* Scrollable Container */}
        <div
          className="d-flex overflow-x-auto"
          ref={scrollRef}
          style={{
            scrollBehavior: "smooth",
            gap: "1rem",
            paddingBottom: "1rem",
          }}
        >
          {/* Category Items */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card text-center p-3 flex-shrink-0 cursor-pointer"
              style={{
                width: "80%",  // mobile
                maxWidth: "300px",  // prevent too large on wide screens
              }}
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`)
                scrollTo(0, 0)
              }}
            >
              <img
                src={category.image}
                alt={category.text}
                className="category-img mb-2"
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h6 className="fw-semibold">{category.text}</h6>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
          style={{ zIndex: 10 }}
          onClick={scrollRight}
        >
          <span className="fw-bold">&gt;</span>
        </button>
      </div>
    </section>
  )
}

export default Categories
