import { createBrowserRouter } from "react-router-dom"

// routes
import Root from "./routes/root.jsx"
import Countries, { loader as countriesLoader } from "./routes/countries.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        loader: countriesLoader,
        element: <Countries />
      }
    ]
  }
])

export default router
