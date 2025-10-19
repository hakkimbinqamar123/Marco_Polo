import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {
    const { products } = useAppContext()
    const { category } = useParams()

    const searchCategory = categories.find(
        (item) => item.path.toLocaleLowerCase() === category
    )

    const filteredProducts = products.filter(
        (product) => product.category.toLocaleLowerCase() === category
    )

    return (
        <div className='mt-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'>
            {searchCategory && (
                <div className='flex flex-col items-end w-max mb-4'>
                    <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>
                        {searchCategory.text.toUpperCase()}
                    </p>
                    <div className='w-12 sm:w-16 h-0.5 bg-primary rounded-full'></div>
                </div>
            )}

            {filteredProducts.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-6 md:gap-6'>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center h-[50vh] sm:h-[60vh]'>
                    <p className='text-2xl sm:text-3xl font-medium text-primary'>
                        No products found in this category.
                    </p>
                </div>
            )}
        </div>
    )
}

export default ProductCategory
