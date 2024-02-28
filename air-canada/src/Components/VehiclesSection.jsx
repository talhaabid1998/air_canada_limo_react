import Sedanimg from "../assets/sedan.jpg";
import Suvimg from "../assets/suv.jpg";
import Vanimg from "../assets/van.jpg";

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
        With a diverse array of vehicles in our fleet, we possess the capacity to deliver the most comprehensive solutions, all while maintaining the utmost professionalism.
        </p>
      </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Repeat the VehicleCard for each type of vehicle */}
        <VehicleCard
          title="LUXURY SEDAN"
          passengers="2"
          description="Traveling in our elegant sedans, two passengers experience the epitome of comfort and style, embodying our commitment to providing impeccable chauffeur services."
          imgSrc={Sedanimg} // Replace with your image path
        />
        <VehicleCard
          title="LUXURY SUV"
          passengers="6"
          description="In our spacious SUVs, accommodating up to six passengers, travelers enjoy a luxurious journey that seamlessly combines comfort and sophistication."
          imgSrc={Suvimg} // Replace with your image path
        />
        <VehicleCard
          title="LUXURY VAN"
          passengers="14"
          description="In our versatile vans designed for up to 14 passengers, travelers embark on a journey that harmonizes spaciousness with luxury."
          imgSrc={Vanimg} // Replace with your image path
        />
         <VehicleCard
          title="LUXURY SEDAN"
          passengers="2"
          description="Traveling in our elegant sedans, two passengers experience the epitome of comfort and style, embodying our commitment to providing impeccable chauffeur services."
          imgSrc={Sedanimg} // Replace with your image path
        />
        <VehicleCard
          title="LUXURY SUV"
          passengers="6"
          description="In our spacious SUVs, accommodating up to six passengers, travelers enjoy a luxurious journey that seamlessly combines comfort and sophistication."
          imgSrc={Suvimg} // Replace with your image path
        />
        <VehicleCard
          title="LUXURY VAN"
          passengers="14"
          description="In our versatile vans designed for up to 14 passengers, travelers embark on a journey that harmonizes spaciousness with luxury."
          imgSrc={Vanimg} // Replace with your image path
        />
      </div>
    </div>
  );
};
