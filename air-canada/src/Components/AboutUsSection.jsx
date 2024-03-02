import hotspot from "../assets/hotspot.png";


function AboutUsSection() {
  const features = [
    {
      id: 1,
      title: "SAFETY",
      description:
        "The safety of our passengers stands as our highest priority, guiding our every decision and investment.",
      icon: hotspot, // Replace with your icon path
    },
    {
      id: 2,
      title: "RELIABILITY",
      description:
        "We take pride in our steadfast reliability, consistently delivering dependable services that unfailingly meet our clients' needs.",
        icon: hotspot, // Replace with your icon path
    },
    {
      id: 3,
      title: "RELIABILITY",
      description:
        "We take pride in our steadfast reliability, consistently delivering dependable services that unfailingly meet our clients' needs.",
        icon: hotspot, // Replace with your icon path
    },
    {
      id: 4,
      title: "RELIABILITY",
      description:
        "We take pride in our steadfast reliability, consistently delivering dependable services that unfailingly meet our clients' needs.",
        icon: hotspot, // Replace with your icon path
    },
    // ... add other features
  ];

  return (
    <div className=" bg-gray-200 py-16 ">
      <div className="flex flex-wrap  px-16">
        {/* Main content area */}
        <div className="w-full lg:w-2/5 px-4 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-600">
            Since its establishment in 1981, Rosedale Livery has earned its
            reputation as a distinguished leader in luxury transportation.
            Operating from three strategically chosen locations in Canada,
            Romania, and the Philippines, our extensive operations underscore
            our commitment to excellence. Our fleet, with a presence of over 300
            vehicles in Toronto alone, extends globally to encompass more than
            10,000 vehicles across 1,200 cities worldwide. This expansive global
            reach stands as a testament to our unwavering dedication, made
            possible through our extensive network of over 3,800 dedicated local
            partners, ensuring the highest standards in luxury transportation
            services. Our stature as an industry leader is underpinned by
            seasoned management, a cadre of well-trained professionals, and the
            integration of cutting-edge technology. This powerful combination
            enables us to consistently deliver exceptional chauffeured services
            tailored to our clients needs. As a beacon of premium chauffeured
            transportation, Rosedale Livery has been the hallmark of
            sophistication and reliability in Toronto and beyond. Our global
            reach ensures that our clients are transported with the utmost
            convenience and comfort, regardless of their destination – at any
            hour, day or night. Our commitment to excellence is evident in our
            unrivaled door-to-door service. Whether it’s a journey from home,
            office, or hotel, to the airport or a special event, punctuality and
            elegance are guaranteed. At Rosedale Livery, our continual
            investment in our staff and technological advancements is a
            testament to our dedication to evolving with the dynamic needs of
            our corporate clientele.
          </p>
        </div>

        {/* Cards grid */}
        <div className="w-full lg:w-3/5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6">
          {features.map((feature, index) => (
    <div
      key={feature.id}
      className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 ${
        index % 2 === 1 ? '-translate-y-4' : 'translate-y-4'
      }`} // Apply translate transform to stagger the cards
    >
<div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
  <img
    src={feature.icon}
    alt={feature.title}
    className="w-full h-full object-contain" // Ensures the icon scales within the container without being clipped
  />
</div>

      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
