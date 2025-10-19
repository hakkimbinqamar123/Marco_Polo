import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard';

const products = [
    {
        id: 1,
        name: "Shirt",
        price: 40,
        img: "./images/shirts2.jpg",
    },
    {
        id: 2,
        name: "Trousers",
        price: 50,
        img: "./images/Trousers.jpg",
    },
    {
        id: 3,
        name: "Shoes",
        price: 75,
        img: "./images/shoes.jpg",
    },
    {
        id: 4,
        name: "Blazer",
        price: 120,
        img: "./images/Blazers.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        details: ["100% cotton", "Notched lapel", "Single-breasted", "Machine washable"],
    },
];

const AllProducts = () => {

    const { products, searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    const [minPrice, setMinPrice] = useState(10);
    const [maxPrice, setMaxPrice] = useState(200);
    const [modalProduct, setModalProduct] = useState(null);

    const handleRangeChange = (e, type) => {
        const value = Number(e.target.value);
        if (type === "min") setMinPrice(value);
        else setMaxPrice(value);
    };

    useEffect(()=>{
        if (searchQuery.length > 0) {
            setFilteredProducts((products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )))
        } else {
            setFilteredProducts(products)
        }
    }, [products, searchQuery])

    return (
        <div className='mt-16 flex flex-col'>
            <div className="flex flex-col items-end w-max">
                <p className='text-2xl font-medium uppercase'>All Products</p>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 md:gap-6 lg:grid-cols-5'>
                {
                    filteredProducts.filter((product)=>
                    product.inStock).map((product, index)=>(
                        <ProductCard key={index} product={product}/>
                    ))
                }
            </div>
            
                {/* <section className="container-fluid pt-3">
                    <div className="row">
                        
                        <div className="col-md-3 bg-white p-4 shadow-sm">
                            <h5 className="fw-bold mb-5">Filters</h5>
                            <h6 className="fw-semibold mb-2">Category</h6>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="shirts" />
                                <label htmlFor="shirts" className="form-check-label">
                                    Shirts
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="trousers" />
                                <label htmlFor="trousers" className="form-check-label">
                                    Trousers
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="blazers" />
                                <label htmlFor="blazers" className="form-check-label">
                                    Blazers
                                </label>
                            </div>
                            <div className="form-check mb-4">
                                <input type="checkbox" className="form-check-input" id="shoes" />
                                <label htmlFor="shoes" className="form-check-label">
                                    Shoes
                                </label>
                            </div>

                            <h6 className="fw-semibold mb-2">Price Range</h6>
                            <div className="d-flex align-items-center gap-2">
                                <input
                                    type="range"
                                    className="form-range"
                                    min="10"
                                    max="200"
                                    step="10"
                                    value={minPrice}
                                    onChange={(e) => handleRangeChange(e, "min")}
                                />
                                <input
                                    type="range"
                                    className="form-range"
                                    min="10"
                                    max="200"
                                    step="10"
                                    value={maxPrice}
                                    onChange={(e) => handleRangeChange(e, "max")}
                                />
                            </div>
                            <p className="small text-muted">
                                Price: ${minPrice} – ${maxPrice}
                            </p>
                            <button className="btn mt-3" style={{ backgroundColor: "#e9c810" }}>
                                Apply
                            </button>
                        </div>

                        <div className="col-md-9 p-4">
                            <h3 className="fw-bold mb-4">All Products</h3>
                            <div className="row g-4">
                                {products.map((product) => (
                                    <div key={product.id} className="col-md-6">
                                        <div className="card shadow">
                                            <img
                                                src={product.image[1]}
                                                className="card-img-top"
                                                style={{ height: "300px", objectFit: "cover", cursor: "pointer" }}
                                                alt={product.name}
                                                onClick={() => setModalProduct(product)}
                                            />
                                            <div className="card-body text-center">
                                                <h5 className="fw-bold">{product.name}</h5>
                                                <p className="fw-semibold">${product.price}</p>
                                                <button className="btn fw-semibold" style={{ backgroundColor: "#e9c810" }}>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {modalProduct && (
                        <div
                            className="modal fade show"
                            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                            tabIndex="-1"
                            onClick={() => setModalProduct(null)}
                        >
                            <div
                                className="modal-dialog modal-lg modal-dialog-centered"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title fw-bold">{modalProduct.name}</h5>
                                        <button className="btn-close" onClick={() => setModalProduct(null)}></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-md-6">
                                                <img
                                                    src={modalProduct.img}
                                                    alt={modalProduct.name}
                                                    className="img-fluid rounded shadow"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="fw-bold">{modalProduct.name.toUpperCase()}</h3>
                                                <p className="fs-4 fw-semibold">${modalProduct.price}</p>
                                                <div className="mb-3">
                                                    <span className="text-warning">★★★★★</span>
                                                    <span className="text-muted">(26 reviews)</span>
                                                </div>
                                                <button className="btn fw-semibold px-4 py-2 mb-4" style={{ backgroundColor: "#e9c810" }}>
                                                    ADD TO CART
                                                </button>
                                                {modalProduct.description && (
                                                    <>
                                                        <h6 className="fw-bold">Description</h6>
                                                        <p className="text-muted">{modalProduct.description}</p>
                                                    </>
                                                )}
                                                {modalProduct.details && (
                                                    <>
                                                        <h6 className="fw-bold mt-3">Details</h6>
                                                        <ul>
                                                            {modalProduct.details.map((d, idx) => (
                                                                <li key={idx}>{d}</li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section> */}
            
        </div>
    )
}

export default AllProducts