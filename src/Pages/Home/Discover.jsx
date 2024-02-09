import {
  FaRainbow,
  FaBuilding,
  FaHotel,
  FaShoppingBag,
  FaHistory,
  FaCar,
} from "react-icons/fa";
const Discover = () => {
  return (
    <div className="flex mt-16 overflow-x-auto mx-auto max-w-7xl bg-white shadow-xl ">
      <div className="w-1/2 p-4 ">
        <h1 className="text-2xl mb-3 font-bold">
          Discoverybangladesh.com - The Bangladesh Travel Guide
        </h1>
        <hr />
        <p>
          <span className="font-semibold"> Bangladesh </span>is one of the few countries in South Asia,
          which remains to be explored. Bangladesh has a delicate and
          distinctive attraction of its own to offer and it is definitely not a
          tourist haunt like Nepal or India. Bangladesh is like a painter's
          dream come true with a rich tapestry of colors and texture. The
          traditional emphasis of the tourist trade has always been on the
          material facilities offered by a country rather than on its actual
          charms. This may be a reason why Bangladesh has seldom been
          highlighted in the World's tourist maps.
        </p>
        <br />
        <p>
          It's a land of enormous beauty, hundreds of serpentine rivers, crystal
          clear water lakes surrounded by ever green hills, luxuriant tropical
          rain forests, beautiful cascades of green tea gardens, world's largest
          mangrove forest preserved as World Heritage, home of the Royal Bengal
          Tiger and the wild lives, warbling of birds in green trees, wind in
          the paddy fields, abundance of sunshine, world's longest natural sea
          beach, rich cultural heritage, relics of ancient Buddhist
          civilizations and colorful tribal lives, - Bangladesh creates an
          unforgettable impression of a land of peace.
        </p>
        <br />
        <p>
          You'll appreciate our culture and the environment. These are not
          simply sight-seeing excursions, but real-time learning experiences.
          Enjoy an ideal blend of adventure and exploration with comfort and
          relaxation. Here you find that you are not alone. With us, any place
          in Bangladesh is a home away from home.
        </p>
      </div>
      <section className="grid p-4 my-5 grid-cols-1 w-1/2 md:grid-cols-3 gap-2 mt-8 ">
        <div className="border-2 cursor-pointer group-hover:text-red-700 flex flex-col justify-center items-center rounded-full">
          <FaRainbow className="text-3xl hover:text-blue-500" />
          <p>QuickLook Bangladesh</p>
        </div>
        <div className="border-2 cursor-pointer group-hover:text-red-700 flex flex-col justify-center items-center rounded-full">
          <FaBuilding className="text-3xl hover:text-blue-500" />
          <p>Capital of Bangladesh</p>
        </div>
        <div className="border-2 cursor-pointer group-hover:text-red-700 flex flex-col justify-center items-center rounded-full">
          <FaHotel className="text-3xl hover:text-blue-500" />
          <p>Hotel</p>
        </div>
        <div className="border-2 cursor-pointer group-hover:text-red-700 flex flex-col justify-center items-center rounded-full">
          <FaShoppingBag className="text-3xl hover:text-blue-500" />
          <p>Tour Packeges</p>
        </div>
        <div className="border-2 cursor-pointer group-hover:text-red-700 flex flex-col justify-center items-center rounded-full">
          <FaHistory className="text-3xl hover:text-blue-500" />
          <p>History of Bangladesh</p>
        </div>
        <div className="border-2 cursor-pointer group-hover:text-red-700 flex flex-col justify-center items-center rounded-full">
          <FaCar className="text-3xl hover:text-blue-500" />
          <p>Transport</p>
        </div>
      </section>
    </div>
  );
};

export default Discover;
