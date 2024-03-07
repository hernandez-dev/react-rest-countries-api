import { createBrowserRouter } from "react-router-dom"

// routes
import Root from "./routes/root.jsx"
import Countries, { loader as countriesLoader } from "./routes/countries/index.jsx"
import CountryDetails, { loader as countryLoader } from "./routes/country-details.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        loader: countriesLoader,
        element: <Countries />
      },
      {
        path: "region/:region",
        loader: countriesLoader,
        element: <Countries />
      },
      {
        path: ":country/details",
        loader: countryLoader,
        element: <CountryDetails />
      }
    ]
  }
])

export default router
