import { useLoaderData } from "react-router-dom"

// components
import Page from "../components/Page.jsx"
import CountryCard from "../components/CountryCard.jsx"

// api
import { fetchRequest } from "../api.js"

// loader
export async function loader() {
  try {
    const response = await fetchRequest('/all')
    return response
  } catch (e) {
    console.log(e)
  }
}

export default function Countries() {
  // countries
  const countries = useLoaderData()

  return(
    <Page title="Where in the world!">
      <div className="p-5 space-y-10 max-w-2xl mx-auto tablet:max-w-full countries-desktop:px-10 desktop:max-w-desktop desktop:px-0">
        <header className="">
          search box and region selector will go here
        </header>
        <div className="grid gap-5 tablet:grid-cols-2 countries-desktop:grid-cols-3 countries-xl:grid-cols-4">
          {countries.map(country => <CountryCard key={country.name.common} country={country} />).slice(0, 50)}
        </div>
      </div>
    </Page>
  )
}
