import { useLoaderData, useNavigate } from "react-router-dom"

// api
import { fetchRequest } from "../api.js"

// components
import Page from "../components/Page.jsx"
import CountryBorder from "../components/CountryBorder.jsx"

// DetailsRow
function DetailsRow({ label, value }) {
  return(
    <p className="text-lg capitalize leading-none">
      <span className="font-semibold">{label}</span>: {value}
    </p>
  )
}

// loader
export async function loader({ params }) {
  try {
    const code = params.country.slice(params.country.lastIndexOf("-") + 1)
    const [ country ] = await fetchRequest(`/alpha/${code}`)
    // console.log(country)
    return country
  } catch (e) {
    console.log(e)
  }
}

export default function CountryDetails() {
  // country
  const country = useLoaderData()

  // navigate
  const navigate = useNavigate()

  if (!country) return ""

  return(
    <Page title={country.name.common + ' - details'}>
      <div className="p-10">
        <header>
          <button className="" onClick={() => navigate(-1)}>
            header
          </button>
        </header>
        <section className="grid grid-cols-2 gap-10 pt-10">
          <div className="rounded-lg overflow-hidden">
            <img src={country.flags.png} className="block w-full" alt={country.flags.alt} />
          </div>
          <div className="">
            <h2 className="font-bold text-3xl capitalize leading-none">
              {country.name.common}
            </h2>
            <div className="grid grid-cols-2">
              <div className="space-y-4">
                <DetailsRow label="native name" value="" />
                <DetailsRow label="population" value={country.population} />
                <DetailsRow label="region" value={country.region} />
                <DetailsRow label="sub region" value={country.subregion} />
                <DetailsRow label="capital" value={country.capital[0]} />
              </div>
              <div className="space-y-4">
                <DetailsRow label="top level domain" value={country.tld} />
                <DetailsRow label="currencies" value={Object.values(country.currencies).map(prev => prev.name).join(', ')} />
                <DetailsRow label="languages" value={Object.values(country.languages).join(', ')} />
              </div>
            </div>
            {country.borders ? (
              <div className="">
                <h3 className="font-semibold capitalize laeding-none">
                  border countries:
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {country.borders.map(border => <CountryBorder key={border} border={border} />)}
                </div>
              </div>
            ) : ''}
          </div>
        </section>
      </div>
    </Page>
  )
}
