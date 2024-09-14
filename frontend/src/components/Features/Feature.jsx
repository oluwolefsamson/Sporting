export default function Feature() {
  return (
    <div className="bg-white pt-10 pb-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header Text */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A powerful betting tool to gain an edge over the bookmakers
          </p>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>

        {/* First Row of Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* First Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-[50vh] sm:h-[70vh] lg:h-[70vh]">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 sm:text-2xl">
                Data-Driven Decision-Making
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Gain access to data-driven insights and statistics to help you
              make smarter betting decisions and stay ahead of the competition.
            </p>
          </div>

          {/* Second Card */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col justify-between h-[50vh] sm:h-[70vh] lg:h-[70vh]">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 sm:text-2xl">
                Payment Processing
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Your betting data is securely stored and easily accessible, so you
              can track your progress.
            </p>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Third Card */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col justify-between h-[50vh] sm:h-[50vh] lg:h-[50vh]">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 sm:text-2xl">
                Customer Loyalty
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Our platform uses the latest security protocols to ensure your
              data and transactions are protected at all times.
            </p>
          </div>

          {/* Fourth Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-[50vh] sm:h-[50vh] lg:h-[50vh]">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 sm:text-2xl">
                Inventory Control
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Enjoy the peace of mind that comes with knowing your transactions
              are processed securely and efficiently.
            </p>
          </div>

          {/* Fifth Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-[50vh] sm:h-[50vh] lg:h-[50vh]">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 sm:text-2xl">
                Staff Management
              </h3>
            </div>
            <p className="mt-4 text-gray-500">
              Backup your data to the cloud automatically, ensuring that it is
              always accessible for the customer and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
