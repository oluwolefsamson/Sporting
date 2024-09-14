import ShopImg from "../../assets/images/shopping.jpg";
import Hero1 from "../../assets/images/hero1.png";

export default function Shopping() {
  return (
    <div className="bg-white py-16 px-4 md:px-[100px]">
      <div className="container mx-auto">
        {/* Main Content with Image and Text */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={ShopImg}
              alt="Left-side image"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Content on the right */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-500">
              Enhance Shop Management Smoother and More Efficient.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              We provide the best tools to help you analyze and improve your
              betting strategies. Leverage our advanced statistics and insights
              to make informed decisions and outsmart the competition.
            </p>
            {/* Divider (border) */}
            <div className="border-t border-gray-300 my-8 md:my-10"></div>

            {/* Additional Content Section with Flex Direction */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* First Content Block */}
              <div className="flex-1 rounded-lg p-4">
                <div className="h-6 w-10 bg-red-800 rounded"></div>
                <h3 className="text-lg md:text-xl mt-4 font-medium text-gray-500">
                  Smooth Payments
                </h3>
                <p className="text-gray-500">
                  This is the first additional content section.
                </p>
              </div>

              {/* Second Content Block */}
              <div className="flex-1 rounded-lg p-4">
                <div className="h-6 w-10 bg-red-800 rounded"></div>
                <h3 className="text-lg md:text-xl mt-4 font-medium text-gray-500">
                  Convenient Shopping
                </h3>
                <p className="text-gray-500">
                  This is the second additional content section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        {/* Main Content with Image and Text */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Content on the right */}
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-500">
              Elevate Your POS Experience With Personalized Reports
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              We provide the best tools to help you analyze and improve your
              betting strategies. Leverage our advanced statistics and insights
              to make informed decisions and outsmart the competition.
            </p>
            {/* Divider (border) */}
            <div className="border-t border-gray-300 my-8 md:my-10"></div>

            {/* Additional Content Section with Flex Direction */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* First Content Block */}
              <div className="flex-1 rounded-lg p-4">
                <div className="h-10 w-10 font-bold text-2xl md:text-4xl my-4 text-blue-500 rounded">
                  25%
                </div>
                <p className="text-gray-500">
                  Reduction in inventory holding cost stock management.
                </p>
              </div>

              {/* Second Content Block */}
              <div className="flex-1 rounded-lg p-4">
                <div className="h-10 w-10 font-bold text-2xl md:text-4xl my-4 text-blue-500 rounded">
                  15%
                </div>
                <p className="text-gray-500">
                  Ensuring shorter queues and happier customers.
                </p>
              </div>
            </div>
          </div>

          {/* Image on the left */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={Hero1}
              alt="Left-side image"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
