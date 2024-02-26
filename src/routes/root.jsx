import { useEffect } from "react"
import { useImmer } from "use-immer"
import { Outlet } from "react-router-dom"

// components
import Header from "../components/Header.jsx"

export default function Root() {
  // state
  const [state, setState] = useImmer({ darkMode: localStorage.getItem("darkMode") })

  // darkMode changes
  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", 1)
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.removeItem("darkMode")
    }
  }, [state.darkMode])

  return(
    <>
      <Header setState={setState} />
      <Outlet />
    </>
  )
}
