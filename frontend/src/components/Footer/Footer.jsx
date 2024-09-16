const Footer = () => {
  return (
    <div className="flex flex-col bg-black py-11 px-4 sm:px-6 md:px-[100px] min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div className="pb-4">
          <h1 className="text-2xl font-bold mb-4 text-gray-300">
            Ready to transform your business? <br />
            Take the first step today!
          </h1>
          <p className="text-base text-gray-400">
            Axpos has been an essential part of our restaurant <br /> success.
            It is easy for our staff to use, and the integration
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="pb-4">
            <p className="text-gray-300">Call Us</p>
            <h1 className="font-bold text-blue-300 mb-4">+234 9028014957</h1>
          </div>
          <div className="pb-4">
            <p className="text-gray-300">Email Us</p>
            <h1 className="text-l font-bold text-blue-300 mb-4">
              oluwolefsamson44@gmail.com
            </h1>
          </div>
        </div>
      </div>

      {/* First border */}
      <div className="border-t border-gray-900 my-11 md:my-8"></div>

      {/* 5-Column Footer Listing Section - Flex wrapping for small screens */}
      <div className="flex flex-wrap gap-8 text-gray-300">
        {/* Column 1 */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-lg font-bold mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Consulting</li>
            <li>Support</li>
            <li>Custom Solutions</li>
            <li>Training</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-lg font-bold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Community Forum</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Sales</li>
            <li>Live Chat</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-lg font-bold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>

      {/* Second border */}
      <div className="border-t border-gray-900 my-6 md:my-6"></div>

      {/* Copyright section */}
      <div className="text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Axpos. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
