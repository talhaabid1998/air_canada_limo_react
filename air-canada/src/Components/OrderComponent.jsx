import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import "react-time-picker/dist/TimePicker.css";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

const PickupDropoffForm = () => {
  const [serviceType, setServiceType] = useState("");
  const [tripType, setTripType] = useState("one-way");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [additionalPickup, setAdditionalPickup] = useState(false);
  const [dropOffAddress, setDropOffAddress] = useState("");
  const [additionalDropoff, setAdditionalDropoff] = useState(false);
  const [airlineName, setAirlineName] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [passengers, setPassengers] = useState(0);
  const [luggage, setLuggage] = useState(0);
  const [carryOns, setCarryOns] = useState(0);
  const [needChildSeat, setNeedChildSeat] = useState(false);
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // Handle changes for all inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "serviceType":
        setServiceType(value);
        break;
      case "tripType":
        setTripType(value);
        break;
      // Add cases for other string inputs
      default:
        break;
    }
  };
  //   const handleTripTypeChange = (event) => {
  //     setTripType(event.target.value);
  //   };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log({
      serviceType,
      tripType,
      pickupDate,
      pickupTime,
      pickupAddress,
      additionalPickup,
      dropOffAddress,
      additionalDropoff,
      airlineName,
      flightNumber,
      vehicle,
      passengers,
      luggage,
      carryOns,
      needChildSeat,
      salutation,
      firstName,
      lastName,
      phoneNumber,
      email,
      comments,
    });
    // Send data to server or state management
  };
  return (
    <div className="flex flex-wrap md:flex-nowrap w-full">
      <div className="flex-grow">
        <div className="p-10 max-w-2xl  bg-white rounded-xl shadow-md flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">PICK-UP & DROP OFF INFORMATION</h2>

          {/* Service Type Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Type (Required)</span>
            </label>
            <select
              name="serviceType"
              className="select select-bordered w-full"
              value={serviceType}
              onChange={handleInputChange}
            >
              <option value="">Select Service Type</option>
              <option value="TO AIRPORT">TO AIRPORT</option>
              <option value="FROM AIRPORT">FROM AIRPORT</option>
              <option value="OTHER">OTHER</option>
            </select>
          </div>

          {/* Toggle Switch for Trip Type */}
          <div className="form-control flex flex-row justify-between">
            <label className="label cursor-pointer flex gap-2 items-center">
              <span className="label-text">One way trip</span>
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={handleInputChange}
                className="radio radio-primary"
              />
            </label>
            <label className="label cursor-pointer flex gap-2 items-center">
              <span className="label-text">Round trip</span>
              <input
                type="radio"
                name="tripType"
                value="round-trip"
                checked={tripType === "round-trip"}
                onChange={handleInputChange}
                className="radio radio-primary"
              />
            </label>
          </div>

          {/* Pick-Up Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pick-Up Date (Required)</span>
              </label>
              <DatePicker
                selected={pickupDate} // Pass the selected date
                onChange={(date) => setPickupDate(date)} // Function to handle date change
                placeholderText="mm/dd/yyyy" // Placeholder text for the input
                className="input input-bordered w-full" // Additional class for styling
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pick-Up Time (Required)</span>
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={pickupTime} // Pass the selected time
                  onChange={(e) => setPickupTime(e.target.value)} // Function to handle time change
                  className="input input-bordered w-full pl-10 pr-3 py-2" // Additional class for styling
                />
               
              </div>
            </div>
          </div>

          {/* Pick-Up Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pick-Up Address (Required)</span>
            </label>
            <input
              type="text"
              placeholder="Enter a location"
              className="input input-bordered w-full"
            />
          </div>

          {/* Additional Pick-Up Address */}
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Additional Pick-Up Address</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>

          {/* Drop Off Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Drop Off Address (Required)</span>
            </label>
            <input
              type="text"
              placeholder="Enter a location"
              className="input input-bordered w-full"
            />
          </div>

          {/* Additional Drop off */}
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Additional Drop off</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>

          {/* Airline Name & Flight Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Airline Name + Flight Number (If Applicable)
              </span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </div>
          <h2 className="text-2xl font-bold">VEHICLE & LUGGAGE DETAIL</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Your Vehicle (Required)</span>
            </label>
            <select className="select select-bordered w-full">
              <option>Select</option>
              <option>Luxury Sedan - 3 passengers </option>
              <option>Luxury Suv - 6 passengers </option>
              <option>Luxury Van - 6 passengers </option>
              <option>Premium SUV - 3 passengers </option>
              <option>Sprinter Executive VAN </option>
              <option>Stretch Limousine</option>
              <option>Party Bus</option>

              {/* Add additional vehicle options here */}
            </select>
          </div>

          {/* Number of Passengers, Luggage, Carry ons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="number"
              placeholder="No of Passengers (Required)"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="No of Luggage/Bags (Required)"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="No of Carry ons (Required)"
              className="input input-bordered w-full"
            />
          </div>

          {/* Child Car Seat */}
          <div className="form-control flex flex-col gap-2">
            <label className="label">
              <span className="label-text">
                Do You Need Child Car Seat? (Required)
              </span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="carSeat"
                className="radio"
                value="no"
                checked
              />
              <span className="label-text">No</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="carSeat"
                className="radio"
                value="yes"
              />
              <span className="label-text">Yes</span>
            </label>
          </div>
          <div className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold">PERSONAL INFORMATION</h2>
            {/* Salutation, First Name, Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="select select-bordered w-full">
                <option>Salutation</option>
                {/* Add salutation options here */}
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Phone Number */}
            <input
              type="tel"
              placeholder="Phone Number (Required)"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Personal Information Section */}
      </div>
      <div className="w-full md:w-1/2 h-screen">
        <LoadScript
          googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your Google Maps API key
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default PickupDropoffForm;
