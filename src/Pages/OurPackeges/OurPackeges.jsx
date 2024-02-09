import { Parallax } from "react-parallax";
import PackageTab from "./PackageTab";
import usePackage from "../../Hooks/usePackage";
import Loader from "../../Components/Loader/Loader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurPackeges = () => {
  const [Packages, loading] = usePackage();
  console.log(Packages);
  const categories = [
    "nature",
    "city",
    "beach",
    "hill",
    "river",
    "rural",
    "historical",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const nature = Packages.filter(
    (item) => item.category.toLowerCase() === "nature"
  );
  const city = Packages.filter(
    (item) => item.category.toLowerCase() === "city"
  );
  const beach = Packages.filter(
    (item) => item.category.toLowerCase() === "beach"
  );
  const hill = Packages.filter(
    (item) => item.category.toLowerCase() === "hill"
  );
  const river = Packages.filter(
    (item) => item.category.toLowerCase() === "river"
  );
  const rural = Packages.filter(
    (item) => item.category.toLowerCase() === "rural"
  );
  const historical = Packages.filter(
    (item) => item.category.toLowerCase() === "historical"
  );

  console.log("Nature", nature);

  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage="https://i.ibb.co/wzQG0ND/pexels-s-migaj-951076.jpg"
        bgImageAlt="the Packages"
        strength={-200}
      >
        <div className="hero h-[650px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">
                Our Packages
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="mt-20 max-w-7xl  mx-auto flex flex-wrap gap-6 justify-center">
        {loading ? (
          <Loader smallHeight={false}></Loader>
        ) : (
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Nature</Tab>
              <Tab>City</Tab>
              <Tab>Beach</Tab>
              <Tab>Hill</Tab>
              <Tab>River</Tab>
              <Tab>Rural</Tab>
              <Tab>Historical</Tab>
            </TabList>
            <TabPanel>
              <PackageTab items={nature}></PackageTab>
            </TabPanel>
            <TabPanel>
              <PackageTab items={city}></PackageTab>
            </TabPanel>
            <TabPanel>
              <PackageTab items={beach}></PackageTab>
            </TabPanel>
            <TabPanel>
              <PackageTab items={hill}></PackageTab>
            </TabPanel>
            <TabPanel>
              <PackageTab items={river}></PackageTab>
            </TabPanel>
            <TabPanel>
              <PackageTab items={rural}></PackageTab>
            </TabPanel>
            <TabPanel>
              <PackageTab items={historical}></PackageTab>
            </TabPanel>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default OurPackeges;
