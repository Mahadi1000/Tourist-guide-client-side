const Footer = () => {
  return (
    <div className="bg-center bg-fixed bg-cover bg-no-repeat mt-20 relative">
      <footer
        className="flex bg-center bg-cover bg-no-repeat flex-col justify-center items-center h-screen text-white relative"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/bgR6Mpb/pexels-ariful-haque-3675856.jpg')",
          color: "black",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-3xl text-white text-center font-semibold mb-4 font-cinzel">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-300 mb-6 text-center">
            Get updates on our latest events and news
          </p>
          <div className="w-full max-w-md">
            <div className="flex items-center border-b border-white py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-white placeholder-white"
              />
              <button className="btn btn-outline btn-success">Sign Up</button>
            </div>
          </div>
          <div className="container mx-auto px-4 z-10">
            <nav className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl text-gray-300 hover:text-white block font-semibold mb-3">
                    Services
                  </h3>
                  <a className="text-gray-300 hover:text-white block">
                    Branding
                  </a>
                  <a className="text-gray-300 hover:text-white block">Design</a>
                  <a className="text-gray-300 hover:text-white block">
                    Marketing
                  </a>
                  <a className="text-gray-300 hover:text-white">
                    Advertisement
                  </a>
                </div>
                <div>
                  <h3 className="text-xl text-gray-300 hover:text-white block font-semibold mb-3">
                    Company
                  </h3>
                  <a className="text-gray-300 hover:text-white block">
                    About us
                  </a>
                  <a className="text-gray-300 hover:text-white block">
                    Contact
                  </a>
                  <a className="text-gray-300 hover:text-white block">Jobs</a>
                  <a className="text-gray-300 hover:text-white">Press kit</a>
                </div>
                <div>
                  <h3 className="text-xl text-gray-300 hover:text-white block font-semibold mb-3">
                    Legal
                  </h3>
                  <a className="text-gray-300 hover:text-white block">
                    Terms of use
                  </a>
                  <a className="text-gray-300 hover:text-white block">
                    Privacy policy
                  </a>
                  <a className="text-gray-300 hover:text-white block">
                    Cookie policy
                  </a>
                </div>
                <div>
                  <h3 className="text-xl text-gray-300 hover:text-white block font-semibold mb-3">
                    Follow Us
                  </h3>
                  <a className="text-gray-300 hover:text-white block">
                    Facebook
                  </a>
                  <a className="text-gray-300 hover:text-white block">
                    Twitter
                  </a>
                  <a className="text-gray-300 hover:text-white block">
                    Instagram
                  </a>
                  <a className="text-gray-300 hover:text-white block">
                    LinkedIn
                  </a>
                </div>
              </div>
            </nav>
            <hr className="mt-20" />
            <p className="text-center text-gray-400 mt-5">
              Copyright © 2023 by AncoraThemes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
