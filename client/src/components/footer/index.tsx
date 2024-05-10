import { Nav } from "@/components";
import { Facebook, Instagram, Location, Twitter, Youtube } from "../svgs";

export const Footer = () => {
  return (
    <div className="bg-[#212121] flex-col w-full px-8 pt-8 pb-4 h-max">

      <div className="flex  justify-between items-start">
        <div className="flex max-md:flex-col max-md:gap-3 gap-20">
          <ul className="flex-col flex gap-1 items-start">
            <Nav
              className="text-gray-300 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Find A Store"}
            />
            <Nav
              className="text-gray-300 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Become A Member"}
            />
            <Nav
              className="text-gray-300 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Sign Up for Email"}
            />
            <Nav
              className="text-gray-300 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Send Us Feedback"}
            />
            <Nav
              className="text-gray-300 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Student Discounts"}
            />
          </ul>
          <ul className="flex-col flex gap-1.5 items-start">
            <p className="text-gray-300 text-[10px] font-light ">Get Help</p>
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Order Status"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Delivery"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Returns"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Payment Options"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Contact Us On Nike.com Inquiries"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Contact Us On All Other Inquiries"}
            />
          </ul>
          <ul className="flex-col flex gap-1.5 items-start">
            <p className="text-gray-300 text-[10px] font-light ">About Nike</p>
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"News"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Careers"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Investors"}
            />
            <Nav
              className="text-gray-400 text-[10px] font-light hover: hover:text-white"
              link={"/"}
              text={"Sustainability"}
            />
          </ul>
        </div>
        <div className="flex sm:flex-row xs:flex-col justify-center items-center gap-2">
          <Twitter className="fill-gray-100 hover: hover:fill-gray-500 hover:cursor-pointer"/>
          <Facebook className="fill-gray-100 hover: hover:fill-gray-500 hover:cursor-pointer"/>
          <Youtube className="fill-gray-100 hover: hover:fill-gray-500 hover:cursor-pointer"/>
          <Instagram className="fill-gray-100 hover: hover:fill-gray-500 hover:cursor-pointer"/>
        </div>
      </div>
      <div className="flex  max-md:flex-col max-md:gap-3  justify-between mt-8">
        <div className="flex gap-1 items-center">
          <Location />
          <p className="text-white text-[9.5px] me-2">India</p>
          <p className="text-[9.5px] text-gray-400">
            © 2023 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          <Nav
            className="text-gray-400  text-[7.5px] font-light hover: hover:text-white"
            link={"/"}
            text={"Guides"}
          />
          <Nav
            className="text-gray-400 text-[7.5px] font-light hover: hover:text-white"
            link={"/"}
            text={"Terms of Sale"}
          />
          <Nav
            className="text-gray-400 text-[7.5px] font-light hover: hover:text-white"
            link={"/"}
            text={"Terms of Use"}
          />
          <Nav
            className="text-gray-400 text-[7.5px] font-light hover: hover:text-white"
            link={"/"}
            text={"Nike Privacy Policy"}
          />
        </ul>
      </div>
    </div>
  );
};
