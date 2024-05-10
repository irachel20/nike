import useAuth from "@/Hooks/auth/useAuth";
import { getProService } from "@/api/services/products";
import {
  Button,
  Card,
  CardProps,
  FilterCheckBox,
  Slider,
  Title,
} from "@/components";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import FakeData from "@/fakedata/sliderSingel.json";
import Table from "@/components/table";
import Image from "next/image";
import { getAddedToCartService } from "@/api/services/addToCart";
import { toast } from "react-toastify";
import { store } from "@/context";
import { getAddedToFavService } from "@/api/services/addToFav";

const SingleProduct = () => {
  const [product, setProduct] = useState<CardProps>();
  const [render, setRender] = useState<boolean>();
  const [renderer, setRenderer] = useState<boolean>();
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const { setProductDetail, setProductFav }: any = useContext(store);

  useEffect(() => {
    getAddedToFavService().then((res) => {
      setProductFav(res.length);
    });
  }, [renderer]);

  const handleAddoCart = () => {
    const pro = [product];
    pro?.map((items: any) => {
      if (items.id === search) {
        fetch("http://localhost:5000/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(items),
        });
      }
      toast.dark(`${items.name} added to your bag`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: { backgroundColor: "#ffffff" },
      });
    });
  };

  const handleAddToFavCart = () => {
    const pro = [product];
    pro?.map((items: any) => {
      if (items.id === search) {
        fetch("http://localhost:5000/api/favorite", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(items),
        });
      }
      toast.dark(`${items.name} added to favotites`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: { backgroundColor: "#ffffff" },
      });
    });
  };

  console.log(search);
  useAuth();

  useEffect(() => {
    getAddedToCartService().then((res) => {
      setProductDetail(res.length);
    });
  }, [render]);

  useEffect(() => {
    getProService().then((res) => {
      res?.map((items: CardProps) => {
        if (items.id === search) {
          setProduct(items);
        }
      });
    });
  }, [search]);

  return (
    product && (
      <>
        <div className="lg:flex xs:flex-col sm:flex-row md:flex justify-center lg:h-[930px] gap-10">
          <div className="flex sm:justify-center md:flex-col xl:flex-col  xs:justify-center lg:flex md:flex lg:pt-0 xs:p-8  lg:flex-col">
            <div className="lg:flex xl:flex-row md:flex-col lg:gap-10">
              <img
                src={product.src}
                width="400px"
                className="pb-5"
                height="430px"
              />
              <img
                src="/images/Frame-30.jpg"
                className="pb-5 xs:hidden sm:hidden md:flex lg:flex"
                alt=""
                height="430px"
                width="400px"
              />
            </div>

            <p className="text-black xs:hidden lg:flex font-medium mt-3 mb-6">
              YOU MIGHT ALSO LIKE
            </p>
            <div className="lg:w-[840px] lg:flex xs:hidden">
              <Slider anotherProp={4}>
                {FakeData.map((cardDetails) => (
                  <SwiperSlide {...cardDetails} key={cardDetails.name}>
                    <Card
                      size={400}
                      price={cardDetails.price}
                      src={cardDetails.src}
                      name={cardDetails.name}
                      category={cardDetails.category}
                    />
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
          </div>

          <div className="mb-6 md:w-2/4  sm:px-10 mt-8 lg:me-10 md:pe-2   xs:px-8  lg:mt-12 lg:pe-32 xl:p-0  lg:w-2/5 md:w-ull  flex flex-col gap-1">
            <div className="flex w-4/5 gap-2  flex-col ">
              <h1 className=" text-2xl">{product.name}</h1>
              <p className="text-xs mb-3 text-gray-500">
                for {product.category}
              </p>
              <p className="text-sm">MPR: ₹ {product.price}</p>
              <p className="text-xs text-gray-400">inci. of taxes</p>
              <p className="text-xs text-gray-400">
                (Also includes all applicable duties)
              </p>
            </div>
            <div className="w-full flex  mt-6 ">
              <div className="xl:w-3/4 2xl:w-full  lg:w-3/4 xs:w-full sm:w-full md:w-full sm:pe-8 md:pe-8 ">
                <Table />
                <div className="w-full flex flex-col">
                  <Button
                    onClick={() => {
                      handleAddoCart();
                      setRender(!render);
                    }}
                    className="py-4 text-sm mt-8 hover:bg-neutral-600"
                  >
                    Add to Bag
                  </Button>
                  <Button
                    onClick={() => {
                      handleAddToFavCart();
                      setRenderer(!renderer);
                    }}
                    className="py-4 hover:bg-gray-300 hover:text-gray-50 text-sm mt-2 bg-transparent border text-gray-600"
                  >
                    Favourite
                  </Button>
                  <div className="mt-5">
                    <FilterCheckBox
                      children={false}
                      titleOne={"Product Details"}
                      titleTwo={"Product Information"}
                      titleThree={"Delivery & Returns"}
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/4   h-12 lg:flex xl:flex md:hidden sm:hidden xs:hidden "></div>
            </div>
          </div>
        </div>

        <div className="w-full px-8">
          <Title bottom="Explore the Nike Air Max 97 SE Men's Shoes" />
          <Image
            src="/images/explore1.jpg"
            alt="My Image"
            width={1000}
            height={700}
            layout="responsive"
          />
          <Title bottom="Originally designed for performance running, the full-length Max Air unit adds soft cushioning." />
          <Image
            src="/images/explore2.jpg"
            alt="My Image"
            width={1000}
            height={700}
            layout="responsive"
          />
          <Title bottom="The suede and synthetic leather upper with mesh underlays adds breathability and durability." />
          <Image
            src="/images/explore3.jpg"
            alt="My Image"
            width={1000}
            height={700}
            layout="responsive"
            className="mb-24"
          />
        </div>
      </>
    )
  );
};

export default SingleProduct;
