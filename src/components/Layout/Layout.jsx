import { Outlet } from "react-router-dom"
import AppBar from "../AppBar/AppBar"

function Layout() {
  return (
      <div>
          <AppBar />
        <Outlet/>  
    </div>
  )
}

export default Layout
