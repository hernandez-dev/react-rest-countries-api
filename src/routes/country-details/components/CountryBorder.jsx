import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

// api
import { fetchRequest } from "../../../api.js"

function Loader() {
  return(
    <div className="top-0 left-0 z-10 flex w-full h-full">
      <span className="block w-7 h-7 m-auto rounded-full border-2 border-transparent border-y-sky-500 animate-spin">
      </span>
    </div>
  )
}

export default function CountryBorder({ border }) {
  // navigate
  const navigate = useNavigate()

  // state
  const [country, setCountry] = useState({})

  // mounted
  useEffect(() => {
    async function fetchCountry() {
      try {
        const [ response ] = await fetchRequest(`/alpha/${border}`)
        if (response.name) {
          setCountry(response)
        }
      } catch (e) {
        console.log(e)
      }
    }
    fetchCountry()
  }, [])

  return(
    <button
      onClick={() => navigate(`/${country.name.common.replace(/\s/g, '-').concat(`-${border}`).toLowerCase()}/details`)}
      className="relative block h-10 bg-white border border-dark-gray/30 rounded capitalize truncate leading-10 dark:bg-dark-blue dark:border-dark-blue"
      disabled={!country.name}
    >
      {country.name ? country.name.common : <Loader />}
    </button>
  )
}
