import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Cta = () => {
  return (
    <div className="flex justify-center px-4 py-8">
      <div
        className="flex flex-col gap-4 bg-blue-700 rounded-lg p-6 md:p-10 w-full lg:w-full"
        style={{ borderRadius: "20px" }}
      >
        <div>
          {/* Stars */}
          <p className="flex">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-yellow-500 mr-1 text-sm md:text-base lg:text-lg"
              />
            ))}
          </p>
          {/* Testimonial */}
          <p
            className="flex text-white mt-4 text-sm md:text-base lg:text-lg"
            style={{ maxWidth: "50%" }}
          >
            "Axpos has been an essential part of our restaurant success. It is
            easy for our staff to use, and the integration with our kitchen and
            bar systems has improved order accuracy. Our customers have noticed
            the difference."
          </p>
        </div>
        {/* Divider (border) */}
        <div
          className="border-t border-white my-6 md:my-8"
          style={{ maxWidth: "50%" }} // For larger devices
        ></div>
        {/* Name */}
        <span className="text-white font-medium text-lg md:text-xl">
          Maddisson Lee
        </span>
        <span className="text-white text-sm md:text-base mt-[-10px]">
          Restaurant Owner
        </span>
      </div>
    </div>
  );
};

export default Cta;
