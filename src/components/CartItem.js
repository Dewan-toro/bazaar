import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  decreamentQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);
  return (
    <div className="w-full lg:w-2/3 pr-0 lg:pr-10">
      <div className="w-full">
        <h2 className="text-2xl font-titleFont">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is deleted`)
                }
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                className="w-20 h-20 lg:w-32 lg:h-32 object-cover"
                src={item.image}
                alt="cartImg"
              />
            </div>
            <h2 className="w-full lg:w-52 text-center lg:text-left">
              {item.title}
            </h2>
            <p className="w-20 lg:w-10 text-center lg:text-left">
              ${item.price}
            </p>
            <div className="w-full lg:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={() =>
                    dispatch(
                      decreamentQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>{" "}
                {item.quantity}
                <span
                  onClick={() =>
                    dispatch(
                      increamentQuantity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-20 lg:w-14 text-center lg:text-left">
              ${item.quantity * item.price}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => dispatch(resetCart()) & toast.error("Cart is empty")}
        className="bg-red-500 text-white mt-8 p-1 px-6 hover:bg-red-800 duration-300 rounded-lg w-full lg:w-auto"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 flex items-center gap-1 text-gray-400 hover:text-black duration-300 w-full lg:w-auto justify-center lg:justify-start">
          <span>
            <HiOutlineArrowLeft />
          </span>{" "}
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
