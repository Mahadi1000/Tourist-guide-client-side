
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "./Banner";
import Categories from "./Categories";
import Discover from "./Discover";
import HomeTab from "./HomeTab";
import Testimonial from "./Testimonial";
import TourType from "./TourType";
import Footer from "../../Components/Footer/Footer"
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Discover></Discover>
      <HomeTab></HomeTab>
      <TourType></TourType>
      <Categories></Categories>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
