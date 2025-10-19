import React from 'react'
import { useAppContext } from '../context/AppContext';
import star_fill from '../assets/star_fill.jpg'
import star from '../assets/star.png'

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

    return product && (
        <div onClick={() => {
            navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
            scrollTo(0, 0);
        }} className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img
                    style={{ height: "200px" }}
                    className="group-hover:scale-105 transition max-w-26 md:max-w-36"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            <div className="text-gray-500/60 text-sm space-y-1">
                <p className="m-0">{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full m-0">
                    {product.name}
                </p>

                <div className="flex items-center gap-1 m-0">
                    {Array(5).fill('').map((_, i) => (
                        <img key={i} className="md:w-3.5 w-3" src={i < 1 ? star : star_fill} alt="" />
                    ))}
                    <p className="m-0 text-xs">(4)</p>
                </div>

                <div className="flex items-end justify-between mt-1">
                    <p className="md:text-xl text-base font-medium text-black m-0">
                        {currency}{product.offerPrice}{" "}
                        <span className="text-gray-500/60 md:text-sm text-xs line-through">
                            {currency}{product.price}
                        </span>
                    </p>

                    <div onClick={(e) => { e.stopPropagation() }} className="text-white">
                        {!cartItems[product._id] ? (
                            <button
                                className="flex bg-[#e9c810] hover:bg-yellow-500 items-center justify-center gap-1 border border-white md:w-[80px] w-[64px] h-[34px] rounded text-white font-medium"
                                onClick={() => addToCart(product._id)}
                            >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Add
                            </button>
                        ) : (
                            <div style={{ backgroundColor: "#e9c810" }} className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] rounded select-none">
                                <button
                                    onClick={() => { removeFromCart(product._id) }}
                                    className="cursor-pointer text-md px-2 h-full"
                                >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button
                                    onClick={() => { addToCart(product._id) }}
                                    className="cursor-pointer text-md px-2 h-full"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
