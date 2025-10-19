import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

function TrendingProducts() {

    const { products } = useAppContext()

    return (
        <>
            <section className="container my-5">
                <h3 className="fw-bold mb-4">Trending Products</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
                    {products.filter((product) => product.inStock).slice(0, 5).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </section>

        </>
    )
}

export default TrendingProducts
