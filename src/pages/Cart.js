import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [total, setTotal] = useState(0);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotal(price);
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please login to checkout");
    }
  };
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      <div className="max-w-screen-xl xl-auto p-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-300 pb-6">
            <h2 className="text-2xl font-medium">cart total</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                $ {total}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Jl. Jendral Sudirman No. 1, Kebayoran Baru, Jakarta Selatan,
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">$ {total}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black rounded-lg text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            procees to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51PYKlGGN5s7JPl1GqxtgYxANB9BRP5f6tY4SRpisWqeEdfcAbxXEfem1hvjAX4qYKLSVOzZLvx8QwWZDMmNEhBm100vBpTrVIo"
                name="Bazar Online Shopping"
                amount={total * 100}
                label="Pay to bazar"
                description={`Your Payment amount is $${total}`}
                // token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
