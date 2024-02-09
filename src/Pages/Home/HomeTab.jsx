import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import usePackage from "../../Hooks/usePackage";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";


const HomeTab = () => {

  const [Packages, loading] = usePackage()
  console.log(Packages)
  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="w-full flex justify-center mx-auto">
        <Tabs className="w-full">
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Our Packages</Tab>
            <Tab>Meet our tour guides</Tab>
          </TabList>
          {/* <=====================Overview section======================> */}
          <TabPanel className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-6">
              {/* First column spanning 2 rows */}
              <div className="col-span-1 p-4">
                {/* Card 1 */}
                <div className="bg-white  rounded-md shadow-md mb-4">
                  <img
                    src="https://i.ibb.co/FgwTxV0/Sreemongol.png"
                    alt="Image 1"
                    className="w-full hover:scale-105  duration-500 h- object-cover mb-4 px-4 py-4 rounded-md"
                  />
                  <h3 className="text-xl font-bold mb-2">Title 1</h3>
                  <p className="text-gray-600">Description 1</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src="https://i.ibb.co/c1HqGSC/pexels-quang-nguyen-vinh-2178175.jpg"
                    alt="Image 2"
                    className="w-full hover:scale-105 duration-500 h- object-cover mb-4 px-2 py-2 rounded-3xl "
                  />
                  <h3 className="text-xl font-bold mb-2">Title 2</h3>
                  <p className="text-gray-600">Description 2</p>
                </div>
              </div>
              {/* Remaining 1 column for the video card */}
              <div className="col-span-2 w-full">
                {/* Video Card */}
                <div className="bg-white p-4 w-full rounded-md shadow-md">
                  {/* Replace the video_url with your actual video URL */}
                  <iframe
                    title="Video"
                    width="100%"
                    height="350"
                    src="https://www.youtube.com/embed/IY6pcR2DxrU?si=UP0XZkn3f__D-EQG"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <h3 className="text-xl font-bold mt-4 mb-2">Video Title</h3>
                  <p className="text-gray-600">Video Description</p>
                </div>
                {/* card */}
                <div className="bg-white mt-6 rounded-md shadow-md mb-4">
                  <img
                    src="https://i.ibb.co/pZmQVhD/pexels-riccardo-307008.jpg"
                    alt="Image 1"
                    className="w-full hover:scale-95  duration-500 h- object-cover mb-4 px-5 py-4 rounded-md"
                  />
                  <h3 className="text-xl font-bold mb-2">Title 1</h3>
                  <p className="text-gray-600">Description 1</p>
                </div>
              </div>
              <div className="col-span-1 ">
                {/* Card 1 */}
                <div className="bg-white  rounded-md shadow-md mb-4">
                  <img
                    src="https://i.ibb.co/N6G82fK/Sajek.png"
                    alt="Image 1"
                    className="w-full hover:scale-105  duration-500 h- object-cover mb-4 px-2 py-2 rounded-md"
                  />
                  <h3 className="text-xl font-bold mb-2">Title 1</h3>
                  <p className="text-gray-600">Description 1</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-4 rounded-md shadow-md">
                  <img
                    src="https://i.ibb.co/87kG2rJ/sundorbon.png"
                    alt="Image 2"
                    className="w-full hover:scale-105  duration-500 h- object-cover mb-4 px-2 py-2 rounded-md"
                  />
                  <h3 className="text-xl font-bold mb-2">Title 2</h3>
                  <p className="text-gray-600">Description 2</p>
                </div>
              </div>
            </div>
          </TabPanel>
          {/* <================>Our Packages section<==================> */}
          <TabPanel>
            <div className="mt-5">
              <h2 className="text-center text-2xl font-bold">
                Our Packages Section
              </h2>
              <hr className="w-3/4 mx-auto mt-3 justify-center"></hr>

              <div>
                {loading ? (
                  <Loader smallHeight={false}></Loader>
                ) : (
                  <>
                    <div className=" max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
                      {Packages &&
                        Packages.slice(0, 4).map((item) => (
                          <div
                            key={item.place}
                            className="rounded-md  shadow-md sm:w-96 dark:bg-gray-900 dark:text-gray-100"
                          >
                            <div className="flex group items-center justify-between p-3">
                              <div className="flex items-center space-x-2">
                                <img
                                  src="https://source.unsplash.com/50x50/?portrait"
                                  alt=""
                                  className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                                />
                                <div className="-space-y-1">
                                  <h2 className="text-sm font-semibold leadi">
                                    leroy_jenkins72
                                  </h2>
                                  <span className="inline-block text-xs leadi dark:text-gray-400">
                                    Somewhere
                                  </span>
                                </div>
                              </div>
                              <button title="Open options" type="button">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-5 h-5 fill-current"
                                >
                                  <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                                  <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                                  <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                                </svg>
                              </button>
                            </div>
                            <img
                              src="https://i.ibb.co/G2J7tjV/pexels-max-ravier-2253821.jpg"
                              alt=""
                              className="object-cover group-hover:scale-110 
              transition object-center w-full h-72 dark:bg-gray-500"
                            />
                            <div className="p-3">
                              <div className="flex items-center justify-between">
                                <button
                                  type="button"
                                  title="Bookmark post"
                                  className="flex items-center justify-center"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 fill-current"
                                  >
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div> 
                    <div className="max-w-7xl flex justify-center mt-8 mx-auto">
                      <Link to={"/ourPackages"}>
                        {" "}
                        <button className="btn "> View more packages</button>
                      </Link>
                    </div>{" "}
                  </>
                )}
              </div>
            </div>
          </TabPanel>
          {/* <=================>Our tour guide<====================> */}
          <TabPanel>
            <div>Our tour guide</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default HomeTab;
