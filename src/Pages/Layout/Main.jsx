import Navbar from "../../Components/Navbar/Navbar"

import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
        
    </div>
  )
}

export default Main
