import React from "react";

const ContactInfoBox = ({ icon, title, children }) => {
  return (
    <div className="flex items-start bg-gray-100 p-4 bg-white  ">
      <div className="p-2 mr-4 text-red-500 bg-red-100 ">
        {/* Insert your SVG or font icon here */}
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="bg-[#757778]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col">
          <div className="flex items-center justify-center my-8">
            <div
              className="bg-[#f2b56b] inline-block"
              style={{ width: "50px", height: "2px" }}
            ></div>
            <h2 className="mx-4 text-3xl font-bold text-[#f2b56b]">Contact</h2>
            <div
              className="bg-[#f2b56b] inline-block"
              style={{ width: "50px", height: "2px" }}
            ></div>
          </div>

          <div className="flex flex-wrap gap-2  justify-between">
            {/* Left Box for Contact Info */}
            <div className=" ml-4 grid grid-cols-2 sm:grid-cols-2 gap-4">
              {/* Head Quarter Box */}
              <ContactInfoBox title="Head Quarter" icon={<span>📍</span>}>
                <p>30 Bertrand Avenue, Unit B112</p>
                <p>Toronto, ON M1L 2P5</p>
              </ContactInfoBox>

              {/* Call Us Box */}
              <ContactInfoBox title="Call Us" icon={<span>📞</span>}>
                <p>+1 (800) 268-4967</p>
                <p>+1 (905) 677-9444</p>
              </ContactInfoBox>

              {/* Email Us Box */}
              <ContactInfoBox title="Email Us" icon={<span>📧</span>}>
                <p>information at rosedelivery.com</p>
                <p>jobs at rosedelivery.com</p>
              </ContactInfoBox>

              {/* Customer Service Box */}
              <ContactInfoBox title="Customer Service" icon={<span>⏰</span>}>
                <p>24/7</p>
                <p>Including Holidays</p>
              </ContactInfoBox>
            </div>

            {/* Right Box for Contact Form */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-gray-100 p-8 rounded-lg">
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg border-gray-300"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg border-gray-300"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      rows="4"
                      placeholder="Message"
                      className="w-full p-3 rounded-lg border-gray-300"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f2b56b] text-white p-3 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
