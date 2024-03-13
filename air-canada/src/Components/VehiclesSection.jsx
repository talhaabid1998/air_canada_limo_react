
import Mercedes_van from "../assets/mercedes_van.jpeg";
import Esclade from "../assets/esclade.jpeg";
import Navigator from "../assets/navigator_luxury_suv.jpeg";
import Mercedes_s_class from "../assets/mercedes_s_class.jpeg";
import Contenental from "../assets/contenental.jpeg";
import React from "react";
import Luxury_sedan_s_class from "../assets/luxury_sedan_s_class.jpeg";


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
        <h3 className="text-xl text-[#f2b56b] font-semibold">{title}</h3>
        <p className="text-[#f2b56b]">{passengers} Passengers</p>
        <p className="mt-2 text-sm text-white">{description}</p>
      </div>
    </div>
  );
};

export const Vehicles = () => {
  return (
    <div className="bg-[#757778] py-10 px-5">
      <div className="flex flex-col justify-center item-center mb-10">
        <div className="flex items-center justify-center my-8">
          <div
            className="bg-[#f2b56b] inline-block"
            style={{ width: "50px", height: "2px" }}
          ></div>
          <h2 className="mx-4 text-3xl font-bold text-[#f2b56b]">Vehicles</h2>
          <div
            className="bg-[#f2b56b] inline-block"
            style={{ width: "50px", height: "2px" }}
          ></div>
        </div>
        <div>
          <p className="text-center text-white">
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
              imgSrc={Luxury_sedan_s_class}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="CONTINENTAL"
              passengers="2"
              description="In our versatile vans designed for up to 2 passengers, travelers embark on a journey that harmonizes spaciousness with luxury, exemplifying our unwavering commitment to delivering exceptional chauffeur services."
              imgSrc={Contenental}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="MERCEDES S CLASS"
              passengers="2"
              description="Indulge in unmatched comfort and luxury with our 2-passenger Mini Coach, as we, Toronto's foremost chauffeur service, craft your journey to perfection."
              imgSrc={Mercedes_s_class}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="NAVIGATOR"
              passengers="6-7"
              description="Set out on an extraordinary journey aboard our 6 to 7-passenger bus, as we, Toronto's foremost chauffeur service, guarantee your voyage is marked by unparalleled comfort and luxury, meticulously tailored to perfection."
              imgSrc={Navigator}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="MERCEDES VAN"
              passengers="14"
              description="Indulge in unmatched comfort and luxury with our 14-passenger Mini Coach, as we, Toronto's foremost chauffeur service, craft your journey to perfection."
              imgSrc={Mercedes_van}
            />
          </SwiperSlide>
          <SwiperSlide>
            <VehicleCard
              title="CADILLAC ESCALADE"
              passengers="6-7"
              description="Indulge in unmatched comfort and luxury with our 6 to 7-passenger Mini Coach, as we, Toronto's foremost chauffeur service, craft your journey to perfection."
              imgSrc={Esclade}
            />
          </SwiperSlide>
          {/* Repeat SwiperSlide for additional vehicles */}
        </Swiper>
      </div>
    </div>
  );
};