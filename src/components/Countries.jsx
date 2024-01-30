import { useEffect } from "react"
import { useImmer } from "use-immer"

// api
import { fetchRequest } from "../api.js"

// axios
import axios from "axios"

// components
import CountryCard from "./CountryCard.jsx"

export default function Countries({ route }) {
  // state
  const [state, setState] = useImmer({
    countries: [],
    query: "",
    loading: false
  })

  // mounted
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetchRequest(route)
        console.log(response.slice(0, 1))
        setState(draft => {
          draft.countries = response.slice(0, 50)
          draft.loading = false
        }) // setState end
      } catch (e) {
        console.log(e)
      }
    }
    fetchCountries()
  }, [route])

  return(
    <div className="p-10">
      <div className="flex justify-between">
        <form className="">
          search box
        </form>
        <div className="">
          region selector
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 pt-5 mx-auto">
        {state.countries.map(country => <CountryCard key={country.name.common} country={country} />)}
      </div>
    </div>
  )
}
