import { useEffect } from "react"
import { useImmer, useImmerReducer } from "use-immer"

// api
import { fetchRequest } from "../api.js"

// axios
import axios from "axios"

// components
import Page from "./Page.jsx"
import CountryCard from "./CountryCard.jsx"
import SearchBox from "./SearchBox.jsx"
import RegionSelector from "./RegionSelector.jsx"

export default function Countries({ route }) {
  // initialState
  const initialState = {
    countries: [],
    regions: [],
    query: "",
    loading: false
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-countries":
        draft.countries = action.value
        break
      case "set-query":
        draft.query = action.value.trim() ? action.value : ''
        break
    } // switch end
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  // mounted
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetchRequest(route)
        dispatch({ type: "set-countries", value: response })
      } catch (e) {
        console.log(e)
      }
    }
    fetchCountries()
  }, [route])

  return(
    <Page title="Where in the world!">
      <div className="p-10">
        <div className="flex justify-between">
          <SearchBox query={state.query} dispatch={dispatch} />
          <RegionSelector regions={["america", "asia"]} />
        </div>
        <div className="grid grid-cols-4 gap-5 pt-5 mx-auto">
          {state.countries.map(country => <CountryCard key={country.name.common} country={country} />).slice(0, 50)}
        </div>
      </div>
    </Page>
  )
}
