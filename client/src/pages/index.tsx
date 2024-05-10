import { Button, Title, Card, Slider, MiniTitle, Nav } from "@/components";
import Image from "next/image";
import mainSliderFakeData from "@/fakedata/mainSlider.json";
import cleanup1SliderFakeData from "@/fakedata/cleanupSlider1.json";
import cleanup2SliderFakeData from "@/fakedata/cleanupSlider2.json";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [sliderNumber, setSliderNumber] = useState<number>();
  const [sliderNumberGear, setSliderNumberGear] = useState<number>();

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 505) {
      return setSliderNumber(1), setSliderNumberGear(1);
    }
    if (window.innerWidth > 505 && window.innerWidth < 700) {
      return setSliderNumber(2), setSliderNumberGear(2);
    }
    if (window.innerWidth > 700) {
      return setSliderNumber(3), setSliderNumberGear(2);
    }
  }, []);

  return (
    <>
      <div className="flex-col text-center py-3  bg-gray-100 w-full px-8">
        <h1 className="text-[#212121]">Hello Nike App</h1>
        <Nav
          text="Download the app to access everything Nike. Get Your Great"
          link="/"
          className="!text-[10px] hover: hover:text-gray-500 cursor-pointer hover:underline text-[#212121]"
        />
      </div>
      <div className="px-8 flex-col">
        <Image
          src="/images/nikeshoe.jpg"
          alt="My Image"
          width={1344}
          height={700}
          layout="responsive"
        />
        <Title
          top="First Look"
          main="NIKE AIR MAX PULSE"
          bottom="Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max."
        />
        <div className="flex mb-24 items-center justify-center gap-3">
          <Button className="hover: hover:bg-neutral-600">Notify Me</Button>
          <Button className="hover: hover:bg-neutral-600">Shop Air Max</Button>
        </div>

        <MiniTitle main="Best of Air Max" />
        <Slider anotherProp={Number(sliderNumber)}>
          {mainSliderFakeData.map((cardDetails) => (
            <SwiperSlide {...cardDetails} key={cardDetails.name}>
              <Card
                size={441}
                src={cardDetails.src}
                name={cardDetails.name}
                price={cardDetails.price}
                category={cardDetails.category}
              />
            </SwiperSlide>
          ))}
        </Slider>
        <MiniTitle main="Featured" />
        <Image
          src="/images/featured.png"
          alt="My Image"
          width={1344}
          height={700}
          layout="responsive"
        />
        <Title
          main="STEP INTO WHAT FEELS GOOD"
          bottom="Cause everyone should know the feeling of running in that perfect pair."
        />
        <div className="flex mb-24 items-center justify-center">
          <Button className="hover: hover:bg-neutral-600">
            Find Your Shoe
          </Button>
        </div>
        <MiniTitle main="Gear Up" />
        <div className="flex md:flex-nowrap xs:flex-wrap gap-12 justify-center">
          <Slider anotherProp={Number(sliderNumberGear)}>
            {cleanup1SliderFakeData.map((cardDetails) => (
              <SwiperSlide {...cardDetails} key={cardDetails.name}>
                <Card
                  size={441}
                  src={cardDetails.src}
                  name={cardDetails.name}
                  price={cardDetails.price}
                  category={cardDetails.category}
                />
              </SwiperSlide>
            ))}
          </Slider>
          <Slider anotherProp={Number(sliderNumberGear)}>
            {cleanup2SliderFakeData.map((cardDetails) => (
              <SwiperSlide {...cardDetails} key={cardDetails.name}>
                <Card
                  size={441}
                  src={cardDetails.src}
                  name={cardDetails.name}
                  price={cardDetails.price}
                  category={cardDetails.category}
                />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
        <MiniTitle main="Don't Miss" />
        <Image
          src="/images/dontmiss.png"
          alt="My Image"
          width={1344}
          height={700}
          layout="responsive"
        />
        <Title
          main="FLIGHT ESSENTIALS"
          bottom="Your built-to-last, all-week wears—but with style only Jordan Brand can deliver."
        />
        <div className="flex  items-center justify-center">
          <Button className="px-6 hover: hover:bg-neutral-600">Shop</Button>
        </div>
        <MiniTitle main="The Essentials" />
        <div className="flex md:flex-nowrap xs:flex-wrap  category gap-6 mb-12 items-center justify-center">
          <div className="w-[440px]  flex items-end bg-[url('/images/essentialmen.png')] h-[540px] ">
            <Button className="bg-[#f1f1f1] hover: hover:bg-neutral-300 text-black mb-12 ms-12">
              Men's
            </Button>
          </div>
          <div className="w-[440px] flex items-end  bg-[url('/images/essentialwomen.png')] h-[540px] ">
            <Button className="bg-[#f1f1f1] hover: hover:bg-neutral-300 text-black mb-12 ms-12">
              Women's
            </Button>
          </div>
          <div className="w-[440px] flex items-end  bg-[url('/images/essentialkid.png')] h-[540px] ">
            <Button className="bg-[#f1f1f1] hover: hover:bg-neutral-300 text-black mb-12 ms-12">
              kids'
            </Button>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Home;
