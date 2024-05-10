import {
  deleteAddedToCartService,
  getAddedToCartService,
} from "@/api/services/addToCart";
import { getTodoService } from "@/api/services/products";
import { Button, CardProps, InputText } from "@/components";
import { store } from "@/context";
import { copyFileSync } from "fs";
import Link from "next/link";
import { useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Shipping = () => {
  const { productPrice, setProductPrice, setProductDetail }: any =
    useContext(store);
  const [order, setOrder] = useState<CardProps[]>();

  const fetchProductList = useCallback(async () => {
    const res = await getTodoService();
  }, []);

  useEffect(() => {
    getAddedToCartService().then((res: any) => {
      console.log(res);
      setOrder(res);
    });
  }, []);

  const fetchOrder = () => {
    order?.map(async (items) => {
      fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
      });
      await deleteAddedToCartService(items._id);
      fetchProductList();
    });
    setProductDetail(0);
    toast.dark("your order has been set succussfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressStyle: { backgroundColor: "#ffffff" },
    });
  };

  return (
    <div className="py-10 justify-center sm:px-20 max-xs:px-10 xs:px-8 w-full md:flex-col lg:flex-row lg:flex ">
      <div className=" lg:w-2/6 lg:px-8">
        <div className="order flex flex-col gap-3">
          <h1 className=" text-xl">How would you like to get your order?</h1>
          <p className="text-xs text-gray-600 ">
            Customs regulation for India require a copy of the recipient's KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns. If your KYC does not match your shipping
            address, please click the link for more information. Learn More
          </p>
        </div>

        <div className="address">
          <h1 className="text-xl my-5">Enter your name and address:</h1>
          <div className="flex flex-col gap-4">
            <InputText className="border-2 " placeholder="First Name" />
            <InputText className="border-2 " placeholder="Last Name" />
            <InputText className="border-2 " placeholder="Address Line 1" />
            <div className="flex gap-4">
              <InputText className="border-2 " placeholder="Postal Code" />
              <InputText className="border-2 " placeholder="Locality" />
            </div>
          </div>
        </div>
        <div className="credit-card">
          <h1 className="font-bold text-black mb-5 ms-1 mt-10">
            Payment Method
          </h1>
          <div className="w-full justify-center flex flex-col gap-3">
            <div className="paypal rounded-sm flex border items-center p-5 border-gray-200">
              <div className="flex items-center me-auto gap-2 mb-auto">
                <input type="radio" className="cursor-pointer" />
                <p>PayPal</p>
              </div>
              <p className="text-gray-500 paypal-desc text-xs text-start ms-6 font-light ">
                You will be redirected to the PayPal website after submitting
                your order
              </p>
            </div>
            <div className="credit-card rounded-sm p-5 border flex flex-col border-gray-200">
              <div className="flex credit-and-icon mb-3 justify-between">
                <div className="flex items-center gap-2">
                  <input type="radio" className="cursor-pointer" />
                  <p>Pay with Credit Card</p>
                </div>
                {/* <CreditCardIconSvg /> */}
              </div>

              <div className="flex fields-for-credit-card mt-5 mb-5 gap-5">
                <InputText
                  className="w-full  border-2 !mb-0"
                  placeholder="1234 5678 9101 1121"
                />
                <InputText
                  className="w-full border-2  mb-0"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex fields-for-credit-card gap-8">
                <InputText
                  className="w-full border-2  !mb-0"
                  placeholder="****"
                />
                <p className="text-xs font-thin text-gray-900 w-full mb-3 mt-auto">
                  What is this?
                </p>
              </div>
            </div>
            <div className="flex gap-3  items-center justify-center">
              {/* <LockIconSvg className="w-5 h-5"/> */}
              <p className="text-gray-500  font-thin text-sm">
                We protect your payment information using encryption to provide
                bank-level security.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-8 lg:w-1/4 h-max md:mb-30 lg:mb-52">
        <p className="text-xl font-bold mb-5 mt-1">Summary</p>
        <div className=" flex flex-col pb-4 border-b">
          <div className="flex justify-between py-3">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm">{`₹ ${productPrice}`}</p>
          </div>
          <div className="flex justify-between  py-3">
            <p className="text-sm">Estimated Delivery & Handling</p>
            <p className="text-sm">
              {productPrice && productPrice < 14000 ? `₹ ${12000}` : "Free"}
            </p>
          </div>
        </div>
        <div className="flex justify-between  py-4 mb-8 border-b">
          <p className="text-sm">Total</p>
          <p className="text-sm">
            {productPrice && productPrice < 14000
              ? `₹ ${12000 + productPrice}`
              : `${productPrice}`}
          </p>
        </div>

          <Button
            onClick={fetchOrder}
            className="w-full py-3.5 text-sm hover:bg-neutral-600"
          >
            Complete The Purchase
          </Button>

      </div>
    </div>
  );
};

export default Shipping;
