import HeroImg from "../../assets/images/hand.png";
import Hero1 from "../../assets/images/hero1.png";
import Hero2 from "../../assets/images/hero2.png";

export default function Hero() {
  return (
    <div className="bg-white relative">
      {/* Make the container relative for absolute positioning */}
      <div
        className="rounded relative isolate px-6 py-3 align-center justify-center bg-blue-50 mx-11 lg:px-8 h-auto sm:h-auto lg:h-[800px]"
        style={{ borderRadius: "20px" }} // Use height: auto for small screens, fixed height for large
      >
        <div className="mx-auto max-w-2xl py-6 sm:py-48 lg:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 bg-white text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Fully Integrated Point-of-Sale System.
            </div>
          </div>
          <div className="text-center relative">
            <h1
              className="text-4xl font-bold tracking-tight  text-gray-900 sm:text-6xl"
              style={{
                lineHeight: "70px",
              }}
            >
              The Hidden Tool Smart Bettors Use to Outsmart The Bookmakers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Predictivo assists thousands of game-loving bettors and traders in
              making smarter, data-driven betting decisions every day.
            </p>
            <div className="flex flex-col items-center gap-y-6 mt-10">
              <div className="flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Get started
                </a>

                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold ring-1 ring-blue-900/10 text-blue-600 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn More
                </a>
              </div>
              {/* Hide HeroImg on small screens */}
              <div
                className="absolute top-1/2 right-[-150px] transform -translate-y-1/2 hidden sm:block"
                style={{ width: "auto", marginTop: "36%" }} // Ensure it fits the content
              >
                <img
                  src={HeroImg}
                  alt="Hero"
                  style={{
                    height: "428px",
                    width: "auto", // Ensure it maintains aspect ratio
                  }}
                />
              </div>
            </div>

            {/* Adjusted positioning for smaller screens */}
            <div
              className="absolute top-1/2 left-[200px] transform -translate-y-1/2 hidden sm:block"
              style={{ width: "auto", marginTop: "40%" }} // Ensure it fits the content
            >
              <img
                src={Hero1}
                alt="Hero1"
                style={{
                  height: "90px",
                  width: "200px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div
              className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 hidden sm:block"
              style={{ width: "auto", marginTop: "60%" }} // Ensure it fits the content
            >
              <img
                src={Hero2}
                alt="Hero2"
                style={{
                  height: "60px",
                  width: "230px", // Ensure it maintains aspect ratio
                }}
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
      </div>
    </div>
  );
}
