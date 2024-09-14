import { useState } from "react";

export default function Faq() {
  // State to track the active accordion item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the accordion
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl sm:mt-11 mx-auto py-10 px-6 lg:px-8">
      {/* 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Column - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl text-gray-800">
            Get Quick Answers to Your Concerns
          </h2>
          <p className="text-lg text-gray-600">
            Our powerful tool provides you with insights and data that can help
            you make informed decisions when placing your bets.
          </p>
          <br />
          <br />
          <br />
          <p className="text-lg text-gray-600">
            Couldn't find what you are looking for?
          </p>
          <span className="text-lg text-gray-600">Write to us at</span>
          <br />
          <a href="" className="text-blue-600">
            <u> support@domain.com</u>
          </a>
        </div>

        {/* Second Column - Accordion */}
        <div className="space-y-4">
          {/* Accordion Item 1 */}
          <div className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left py-4 px-4 text-lg font-medium bg-blue-100 text-gray-700 hover:bg-gray-100 rounded-t-lg"
              onClick={() => handleToggle(0)}
            >
              Is Axpos suitable for my type of business?
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-blue-100 ${
                activeIndex === 0 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 text-gray-600">
                A betting tool is a platform or system that provides data,
                insights, and analysis to help individuals make more informed
                decisions when placing bets on sports or other events.
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left py-4 px-4 text-lg font-medium bg-blue-100 text-gray-700 hover:bg-gray-100 rounded-t-lg"
              onClick={() => handleToggle(1)}
            >
              Can i get a customized solution for my business?
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-blue-100 ${
                activeIndex === 1 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 text-gray-600">
                Our platform processes payments through secure gateways that
                ensure your transactions are encrypted and protected against
                fraud.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="border border-gray-300 rounded-lg ">
            <button
              className="w-full text-left py-4 px-4 text-lg font-medium text-gray-700 bg-blue-100 hover:bg-gray-100 rounded-t-lg"
              onClick={() => handleToggle(2)}
            >
              How secure is Axpos for payment processings?
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-blue-100 ${
                activeIndex === 2 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 text-gray-600">
                You can manage your account settings, personal information, and
                preferences from the user dashboard, accessible once you log in.
              </div>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="border border-gray-300 rounded-lg">
            <button
              className="w-full bg-blue-100 text-left py-4 px-4 text-lg font-medium  text-gray-700 hover:bg-gray-100 rounded-t-lg"
              onClick={() => handleToggle(3)}
            >
              How do I contact Axpos for more information?
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-blue-100 ${
                activeIndex === 3 ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 text-gray-600">
                You can manage your account settings, personal information, and
                preferences from the user dashboard, accessible once you log in.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
