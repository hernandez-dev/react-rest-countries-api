import { useLoaderData, useParams } from "react-router-dom"

// api
import { fetchRequest } from "../api.js"

// global components
import Page from "../components/Page.jsx"

// routes components
import CountryCard from "./components/CountryCard.jsx"

// loader
export async function loader({ params }) {
  try {
    const response = await fetchRequest(`/region/${params.region}`)
    return response
  } catch (e) {
    console.log(e)
  }
}

export default function CountriesByRegion() {
  // countries
  const countries = useLoaderData()

  // params
  const params = useParams()

  return(
    <Page title={`where in the world! - countries from ${params.region}`}>
      <div className="p-5 space-y-10 max-w-2xl mx-auto tablet:max-w-[1100px] countries-desktop:px-10 countries-desktop:max-w-full desktop:max-w-desktop desktop:px-0">
        {/*<header className="space-y-5 tablet:flex tablet:items-center tablet:justify-between tablet:space-y-0">
          <SearchBox />
          <RegionSelector />
        </header>*/}
        <div className={`grid gap-5 ${navigation.state === "loading" ? 'opacity-50' : ''} transition duration-300 tablet:grid-cols-2 countries-desktop:grid-cols-3 countries-xl:grid-cols-4`}>
          {countries.map(country => <CountryCard key={country.name.common} country={country} />).slice(0, 50)}
        </div>
      </div>
    </Page>
  )
}
