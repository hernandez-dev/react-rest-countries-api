import { useLoaderData, useNavigation } from "react-router-dom"

// components
import Page from "../../components/Page.jsx"
import CountryCard from "../../components/CountryCard.jsx"
import SearchBox from "./components/SearchBox.jsx"
import RegionSelector from "./components/RegionSelector.jsx"

// api
import { fetchRequest } from "../../api.js"

// loader
export async function loader({ request, params }) {
  try {
    let response = []
    const url = new URL(request.url)
    const q = url.searchParams.get("q")
    if (q) {
      response = await fetchRequest(`/name/${q}`)
    } else {
      response = await fetchRequest(params.region ? `/region/${params.region}` : '/all')
    }
    return response
  } catch (e) {
    console.log(e)
    return e
  }
}

export default function Countries() {
  // countries
  const countries = useLoaderData()

  // navigation
  const navigation = useNavigation()

  return(
    <Page title="Where in the world!">
      <div className="p-5 space-y-10 max-w-2xl mx-auto tablet:max-w-full countries-desktop:px-10 desktop:max-w-desktop desktop:px-0">
        <header className="space-y-5 tablet:flex tablet:items-center tablet:justify-between tablet:space-y-0">
          <SearchBox />
          <RegionSelector />
        </header>
        {countries ? (
          <div className={`grid gap-5 ${navigation.state === "loading" ? 'opacity-50' : ''} transition duration-300 tablet:grid-cols-2 countries-desktop:grid-cols-3 countries-xl:grid-cols-4`}>
            {countries.map(country => <CountryCard key={country.name.common} country={country} />).slice(0, 50)}
          </div>
        ) : (
          <h2 className="text-center text-dark-gray">
            No results for your search
          </h2>
        )}
      </div>
    </Page>
  )
}
