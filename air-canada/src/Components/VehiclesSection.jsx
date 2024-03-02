import Sedanimg from "../assets/sedan.jpg";
import Suvimg from "../assets/suv.jpg";
import Vanimg from "../assets/van.jpg";
import miniimg from "../assets/mini.png";
import Busimg from "../assets/bus.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const VehicleCard = (props) => {
  // Destructuring props for easier access
  const { title, passengers, description, imgSrc } = props;

  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={imgSrc}
        alt={title}
        className="w-64 h-64 object-cover rounded-full shadow-lg"
      />
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{passengers} Passengers</p>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export const Vehicles = () => {
  return (
    <div className="bg-gray-200 py-10 px-5">
      <div className="flex flex-col justify-center item-center mb-10">
        <div className="flex items-center justify-center my-8">
          <div
            className="bg-red-500 inline-block"
            style={{ width: "50px", height: "2px" }}
          ></div>
          <h2 className="mx-4 text-3xl font-bold text-gray-800">Vehicles</h2>
          <div
            className="bg-red-500 inline-block"
            style={{ width: "50px", height: "2px" }}
          ></div>
        </div>
        <div>
          <p className="text-center ">
            With a diverse array of vehicles in our fleet, we possess the
            capacity to deliver the most comprehensive solutions, all while
            maintaining the utmost professionalism.
          </p>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation]} // Add the Navigation module here
          navigation // Enable navigation
          breakpoints={{
            // when window width is >= 640px (sm)
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px (md)
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // when window width is >= 1024px (lg)
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          onSlideChange={(swiper) => {
            console.log("slide index:", swiper.realIndex);
          }}
          onSwiper={(swiper) => console.log("yes")}
        >
          <SwiperSlide>
            <VehicleCard
              title="LUXURY SEDAN"
              passengers="2"
              description="Traveling in our elegant sedans, two passengers experience the epitome of comfort and style, embodying our commitment to providing impeccable chauffeur services."
              imgSrc={Sedanimg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="LUXURY SUV"
              passengers="6"
              description="In our spacious SUVs, accommodating up to six passengers, travelers enjoy a luxurious journey that seamlessly combines comfort and sophistication, reflecting our dedication to exceptional chauffeur services."
              imgSrc={Suvimg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="LUXURY VAN"
              passengers="14"
              description="In our versatile vans designed for up to 14 passengers, travelers embark on a journey that harmonizes spaciousness with luxury, exemplifying our unwavering commitment to delivering exceptional chauffeur services."
              imgSrc={Vanimg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="MINI VAN"
              passengers="18"
              description="Indulge in unmatched comfort and luxury with our 24-passenger Mini Coach, as we, Toronto's foremost chauffeur service, craft your journey to perfection."
              imgSrc={miniimg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="BUS"
              passengers="55"
              description="Set out on an extraordinary journey aboard our 55-passenger bus, as we, Toronto's foremost chauffeur service, guarantee your voyage is marked by unparalleled comfort and luxury, meticulously tailored to perfection."
              imgSrc={Busimg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="MINI COACH"
              passengers="14"
              description="Indulge in unmatched comfort and luxury with our 24-passenger Mini Coach, as we, Toronto's foremost chauffeur service, craft your journey to perfection."
              imgSrc={Vanimg}
            />
          </SwiperSlide>
          {/* Repeat SwiperSlide for additional vehicles */}
        </Swiper>
      </div>
    </div>
  );
};
