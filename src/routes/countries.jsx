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
      <header className="p-10 pb-0 mx-auto desktop:max-w-desktop desktop:px-0">
        search box and region selector will go here
      </header>
      <div className="grid grid-cols-4 gap-5 p-10 mx-auto desktop:max-w-desktop desktop:px-0">
        {countries.map(country => <CountryCard key={country.name.common} country={country} />).slice(0, 50)}
      </div>
    </Page>
  )
}
