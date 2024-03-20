import { createBrowserRouter } from "react-router-dom"

// routes
import Root from "./routes/root.jsx"
import Countries, { loader as countriesLoader } from "./routes/countries/Countries.jsx"
import CountriesByRegion, { loader as countriesByRegionLoader } from "./routes/countries/CountriesByRegion.jsx"
import SearchCountries, { loader as searchCountriesLoader } from "./routes/countries/SearchCountries.jsx"
import CountryDetails, { loader as countryLoader } from "./routes/country-details/CountryDetails.jsx"

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
        loader: countriesByRegionLoader,
        element: <CountriesByRegion />
      },
      {
        path: ":country/details",
        loader: countryLoader,
        element: <CountryDetails />
      },
      {
        path: "search-countries/:name",
        loader: searchCountriesLoader,
        element: <SearchCountries />
      }
    ]
  }
])

export default router
