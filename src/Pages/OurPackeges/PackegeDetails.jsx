/* eslint-disable no-unused-vars */

import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBooks from "../../Hooks/useBooks";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const PackegeDetails = () => {
  // const axiosSecure = useAxiosSecure();
  const [refetch, user] = useBooks();
  // const navigate = useNavigate();
  // const location = useLocation();
  //  const { item : packageData } = location.state || {};
  const { place } = useParams();
  const { state: item } = useLocation();
  console.log(place, item);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  if (!item) {
    // Handle the case when there is no package data
    return <div>No package data available.</div>;
  }

  const {
   _id,
    category,
    package: { name, duration, price, includes, description },
    guide: { name: guideName, image: guideImage },
    image: packageImage,
  } = item;
  console.log(item);

const handleAddToBooking = () => {
  // Extract the start and end dates from the state
  const startDate = state[0].startDate;
  const endDate = state[0].endDate;

  // Create the book item object with the selected date
  const bookItem = {
    bookId: _id,
    email: user.email,
    name,
    place,
    image: packageImage,
    price,
    guide: { name: guideName, image: guideImage },
    package: { name, duration, price, includes, description },
    startDate: startDate.toISOString(), // Convert to ISO format or any desired format
    endDate: endDate ? endDate.toISOString() : null, // Convert to ISO format or any desired format
  };

  axios
    .post("https://tourist-server-theta.vercel.app/bookings", bookItem, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`, // Include your user's access token
      },
    })
    .then((response) => {
      console.log(response.data);

      if (response.data.acknowledgment) {
        toast.success("Added to Booking!");
      } else {
        toast.warning("Already booked.");
      }
    })
    .catch((error) => {
      console.error("Error adding to Booking:", error);
    });
};

  return (
    <div className="max-w-3xl  mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <div className="mb-6">
        <img
          src={packageImage}
          alt={`${place} Image`}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-500">{category}</p>
        </div>
        <div>
          <span className="text-lg font-bold">{price}</span>
          <p className="text-gray-500">Per Person</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Details</h2>
        <p>{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Package Includes</h2>
          <ul className="list-disc pl-5">
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Duration</h2>
        <p>{duration}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Tour Guide</h2>
        <div className="flex items-center">
          <img
            src={guideImage}
            alt={`${guideName} Image`}
            className="w-12 h-12 object-cover rounded-full mr-4"
          />
          <div>
            <p className="font-bold">{guideName}</p>
            <p className="text-gray-500">Your Tour Guide</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        {/* <button
          onClick={() => handleAddToCart(item)}
          className="btn  btn-outline btn-secondary"
        >
          Book Now
        </button> */}
        <button className="btn" onClick={handleAddToBooking}>
          Book Now
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default PackegeDetails;
