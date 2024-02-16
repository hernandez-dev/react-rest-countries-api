import { Outlet } from "react-router-dom"

// components
import Header from "../components/Header.jsx"

export default function Root() {
  return(
    <>
      <Header />
      <Outlet />
    </>
  )
}
