import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { dummyOrders } from '../assets/assets';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currancy } = useAppContext();

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-start mb-10">
        <p className="text-3xl font-bold uppercase tracking-wider">My Orders</p>
        <div className="w-20 h-1 bg-black rounded-full mt-2"></div>
      </div>

      <div className="flex flex-col space-y-12">
        {myOrders.map((order, index) => (
          <div
            key={index}
            className="w-full max-w-5xl mx-auto border border-gray-200 rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
          >
            {/* Order Summary */}
            <div className="flex flex-col md:flex-row justify-between text-gray-700 text-sm md:text-base font-medium mb-6">
              <p>
                <span className="font-semibold">Order ID:</span> {order._id}
              </p>
              <p>
                <span className="font-semibold">Payment:</span> {order.paymentType}
              </p>
              <p>
                <span className="font-semibold">Total:</span> {currancy}{order.amount}
              </p>
            </div>

            {/* Ordered Items */}
            <div className="space-y-6">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-200 pt-4"
                >
                  {/* Product Info */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-50 p-3 rounded-lg flex-shrink-0">
                      <img
                        src={item.product.image[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{item.product.name}</h2>
                      <p className="text-gray-500 text-sm">Category: {item.product.category}</p>
                      <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                    </div>
                  </div>

                  {/* Price & Status */}
                  <div className="mt-4 md:mt-0 text-gray-800 text-sm md:text-base font-medium space-y-1 text-right">
                    <p>
                      <span className="font-semibold">Status:</span>{' '}
                      <span
                        className={`px-2 py-1 rounded-full text-white text-xs ${
                          order.status === 'Delivered'
                            ? 'bg-green-500'
                            : order.status === 'Order Placed'
                            ? 'bg-blue-500'
                            : 'bg-yellow-500'
                        }`}
                      >
                        {order.status}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold">Date:</span>{' '}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-semibold">Amount:</span> {currancy}
                      {item.product.offerPrice * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
