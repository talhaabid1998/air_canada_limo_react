import airportIcon from "../assets/airport.png"
import PrivateairportIcon from "../assets/plane.png"
import RoadShows from "../assets/roadshows.png"
import corporate from "../assets/corporate.png"
import events from "../assets/events.png"
import accessible from "../assets/access.png"

function ServicesSection() {
  const services = [
    {
      id: 1,
      name: "Airport Transfers",
      description:
        "Providing seamless and sophisticated airport transfers, we ensure that every journey to and from the airport is a pinnacle of comfort and efficiency, reflecting our commitment to exceptional service.",
      icon: airportIcon, // Replace with your icon path
    },
    {
      id: 2,
      name: "Private Aviation",
      description:
        "Specializing in Private Aviation services, we offer unparalleled attention to detail and personalized care, ensuring that each private flight experience is met with the highest standards of luxury and discretion, embodying our dedication to elite service.",
      icon: PrivateairportIcon, // Replace with your icon path
    },
    {
        id: 3,
        name: "Road Shows",
        description:
          "Providing seamless and sophisticated airport transfers, we ensure that every journey to and from the airport is a pinnacle of comfort and efficiency, reflecting our commitment to exceptional service.",
        icon: RoadShows, // Replace with your icon path
      },
      {
        id: 4,
        name: "Corporate Groups",
        description:
          "Specializing in Private Aviation services, we offer unparalleled attention to detail and personalized care, ensuring that each private flight experience is met with the highest standards of luxury and discretion, embodying our dedication to elite service.",
        icon: corporate, // Replace with your icon path
      },
      
    {
        id: 5,
        name: "Corporate Events",
        description:
          "Providing seamless and sophisticated airport transfers, we ensure that every journey to and from the airport is a pinnacle of comfort and efficiency, reflecting our commitment to exceptional service.",
        icon: events, // Replace with your icon path
      },
      {
        id: 6,
        name: "Accessible",
        description:
          "Specializing in Private Aviation services, we offer unparalleled attention to detail and personalized care, ensuring that each private flight experience is met with the highest standards of luxury and discretion, embodying our dedication to elite service.",
        icon: accessible, // Replace with your icon path
      },
    // Add more services as needed
  ];

  return (
    <div className="bg-[#757778] py-16">
      <div className="max-w-full  px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center item-center mb-10">
          <div className="flex items-center justify-center my-8">
            <div
              className="bg-[#f2b56b] inline-block"
              style={{ width: "50px", height: "2px" }}
            ></div>
            <h2 className="mx-4 text-3xl font-bold text-[#f2b56b]">Services</h2>
            <div
              className="bg-[#f2b56b] inline-block"
              style={{ width: "50px", height: "2px" }}
            ></div>
          </div>
          <div>
            <p className="text-center text-white ">
              With a diverse array of vehicles in our fleet, we possess the
              capacity to deliver the most comprehensive solutions, all while
              maintaining the utmost professionalism.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
                
              <li key={service.id} className=" relative mt-10 md:mt-0 border-t-4 border-gray-100 p-4   py-8">
                <div className="absolute top-[-4px] left-0 h-1 w-4 bg-[#f2b56b] "></div>
                <div className="flex gap-2">
                  <div className="flex">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                      {/* Replace with actual img tag and src to your icon */}
                      <img src={service.icon} alt="" className="h-full w-full" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-bold text-[#f2b56b]">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-white leading-6 ">
                      {service.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
