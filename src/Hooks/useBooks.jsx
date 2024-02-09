import { useContext } from "react";

import { AuthContext } from "../firebase/AuthProvider";
import { useQuery } from "@tanstack/react-query";


import useAxios from "axios"; // Use a separate instance for simplicity


const useBooks = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: user ? `Bearer ${user.accessToken}` : undefined,
    },
  });

  const { refetch, data: booking = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      try {
        const res = await axios.get("/bookings");
        // console.log("Booking response:", res.data);
        return res.data;
      } catch (error) {
        console.error("Error fetching bookings:", error);
        return [];
      }
    },
    enabled: !!user?.accessToken,
  });

  return [booking, refetch, user];
};

export default useBooks;


