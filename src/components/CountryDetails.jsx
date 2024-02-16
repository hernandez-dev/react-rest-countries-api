import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useImmer } from "use-immer"

// api
import { fetchRequest } from "../api.js"

// components
import Page from "./Page.jsx"
import CountryBorder from "./CountryBorder.jsx"

// DetailsRow
function DetailsRow({ label, value }) {
  return(
    <p className="text-lg capitalize leading-none">
      <span className="font-semibold">{label}</span>: {value}
    </p>
  )
}

export default function CountryDetails() {
  // params
  const params = useParams()

  // state
  const [state, setState] = useImmer({
    country: null,
    loading: false
  })

  // mounted
  useEffect(() => {
    async function fetchCountry() {
      try {
        const code = params.country.slice(params.country.lastIndexOf("-") + 1)
        const response = await fetchRequest(`/alpha/${code}`)
        if (response.length) {
          setState(draft => {
            draft.country = response[0]
            draft.loading = false
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetchCountry()
  }, [params.country])

  if (!state.country) return ""

  return(
    <Page title={state.country.name.common + ' - details'}>
      <div className="p-10">
        <header>
          header
        </header>
        <section className="grid grid-cols-2 gap-10 pt-10">
          <div className="rounded-lg overflow-hidden">
            <img src={state.country.flags.png} className="block w-full" alt={state.country.flags.alt} />
          </div>
          <div className="">
            <h2 className="font-bold text-3xl capitalize leading-none">
              {state.country.name.common}
            </h2>
            <div className="grid grid-cols-2">
              <div className="space-y-4">
                <DetailsRow label="native name" value="" />
                <DetailsRow label="population" value={state.country.population} />
                <DetailsRow label="region" value={state.country.region} />
                <DetailsRow label="sub region" value={state.country.subregion} />
                <DetailsRow label="capital" value={state.country.capital[0]} />
              </div>
              <div className="space-y-4">
                <DetailsRow label="top level domain" value={state.country.tld} />
                <DetailsRow label="currencies" value={Object.values(state.country.currencies).map(prev => prev.name).join(', ')} />
                <DetailsRow label="languages" value={Object.values(state.country.languages).join(', ')} />
              </div>
            </div>
            {state.country.borders ? (
              <div className="">
                <h3 className="font-semibold capitalize laeding-none">
                  border countries:
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {state.country.borders.map(border => <CountryBorder key={border} border={border} />)}
                </div>
              </div>
            ) : ''}
          </div>
        </section>
      </div>
    </Page>
  )
}
