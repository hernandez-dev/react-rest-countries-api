import { useLoaderData, useNavigate, useNavigation } from "react-router-dom"

// api
import { fetchRequest } from "../../api.js"

// components
import Page from "../../components/Page.jsx"
import CountryBorder from "./components/CountryBorder.jsx"

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

  // handleNativeName
  function handleNativeName(country) {
    const elements = Object.values(country.name.nativeName)
    if (elements.length) {
      return elements[0].common
    } else {
      return "-"
    }
  }

  if (!country) return ""

  return(
    <Page title={country.name.common + ' - details'}>
      <div className={`p-5 pt-10 max-w-2xl mx-auto ${navigation.state === "loading" ? 'opacity-10' : ''} transition duration-300 min-[1400px]:max-w-full min-[1400px]:items-center min-[1500px]:max-w-[1500px] desktop:max-w-desktop desktop:px-0`}>
        <header>
          <button className="flex items-center h-10 px-8 bg-white shadow rounded-md text-dark-blue dark:bg-dark-blue dark:text-white" onClick={() => navigate("/")}>
            <span className="block mr-3 leading-none">
              <i className="fa-solid fa-arrow-left" />
            </span>
            Back
          </button>
        </header>
        <section className="grid pt-10 space-y-10 min-[1400px]:grid-cols-2 min-[1400px]:gap-5 min-[1400px]:items-center min-[1400px]:space-y-0">
          <div className="h-[60vw] max-h-[500px] rounded-lg overflow-hidden">
            <img src={country.flags.png} className="block w-full h-full" alt={country.flags.alt} />
          </div>
          <div className="space-y-10 text-primary-dark dark:text-white">
            <h2 className="font-bold text-3xl capitalize leading-none">
              {country.name.common}
            </h2>
            <div className="grid space-y-10 min-[1400px]:grid-cols-2">
              <div className="space-y-4">
                <DetailsRow label="native name" value={handleNativeName(country)} />
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
