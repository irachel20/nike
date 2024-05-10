import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { CardProps } from "@/components";
import { getOrderedService } from "@/api/services/order";
import { OrderCard } from "@/components/orderCard";

const Shipping = () => {
  const [userData, setUserData] = useState();
  const [userNameData, setUserNameData] = useState();
  const [order, setOrder] = useState<CardProps[]>();

  useEffect(() => {
    if (getCookie("token")) {
      const token: any = getCookie("token");
      const decoded: any = jwt_decode(token);
      setUserData(decoded.user.email);
      setUserNameData(decoded.user.username);
      console.log(decoded.user.username);
    }

    getOrderedService().then((res) => {
      console.log(res);
      setOrder(res);
    });
  }, []);

  return (
    <div className="py-10 justify-center sm:px-20 max-xs:px-10 xs:px-8 w-full md:flex-col lg:flex-row lg:flex ">
      <div className=" lg:w-3/6 lg:px-8">
        <div className="order flex flex-col gap-3">
          <p className="text-xl font-bold mb-5 mt-1">Your Orders</p>
          <p className="text-xs text-gray-600 ">
            Customs regulation for India require a copy of the recipient's KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns.
          </p>
        </div>
        <div className="flex-col flex gap-3 mt-10">

          {order?.length !== 0 ?(order?.map((i) => {
            return (
              <OrderCard
                _id={i._id}
                src={i.src}
                name={i.name}
                category={i.category}
                price={i.price}
                id={i.id}
                key={i.id}
                desc={i.desc}
              />
            );
          }) ):      <p className="text-center text-lg font-medium">
         You Have No Order !
        </p>}
        </div>
      </div>

      <div className="lg:px-8 xs:mt-10 sm:mt-0 lg:w-1/4 h-max md:mb-30 lg:mb-52">
        <p className="text-xl font-bold mb-5 mt-1">Your Account</p>

        <div className=" flex flex-col pb-4 border-b">
          <div className="flex justify-between py-3">
            <p className="text-sm">Name :</p>
            <p className="text-sm">{userNameData}</p>
          </div>
          <div className="flex justify-between  py-3">
            <p className="text-sm">Email :</p>
            <p className="text-sm">{userData}</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 p-1 pt-5 ">
          egulation for India require a copy of the recipient's address on the
          needs to match the shipping address.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
