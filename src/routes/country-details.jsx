import { useLoaderData, useNavigate, useNavigation } from "react-router-dom"

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

  // navigation
  const navigation = useNavigation()

  // navigate
  const navigate = useNavigate()

  if (!country) return ""

  return(
    <Page title={country.name.common + ' - details'}>
      <div className={`p-5 max-w-2xl mx-auto ${navigation.state === "loading" ? 'opacity-10' : ''} transition duration-300 desktop:max-w-desktop desktop:px-0`}>
        <header>
          <button className="" onClick={() => navigate(-1)}>
            header
          </button>
        </header>
        <section className="pt-10 space-y-10">
          <div className="h-[60vw] max-h-[500px] rounded-lg overflow-hidden">
            <img src={country.flags.png} className="block w-full h-full" alt={country.flags.alt} />
          </div>
          <div className="space-y-10 text-primary-dark dark:text-white">
            <h2 className="font-bold text-3xl capitalize leading-none">
              {country.name.common}
            </h2>
            <div className="space-y-10 sm:grid sm:grid-cols-2 sm:space-y-0">
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
                <div className="grid grid-cols-3 gap-2 pt-5">
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
