import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// api
import { fetchRequest } from "../api.js"

export default function CountryBorder({ border }) {
  // state
  const [country, setCountry] = useState(null)

  // mounted
  useEffect(() => {
    async function findCountry() {
      try {
        const response = await fetchRequest(`/alpha/${border.toLowerCase()}`)
        if (response.length) {
          // console.log(response[0])
          setCountry(response[0])
        }
      } catch (e) {
        console.log(e)
      }
    }
    findCountry()
  }, [])

  return country ? (
    <Link
      to={`/${country.name.common.replaceAll(' ', '-').concat(`-${country.cca2}`).toLowerCase()}/details`}
      className="block h-10 border rounded text-center leading-10"
    >
      {country.name.common}
    </Link>
  ) : (
    <div className="h-10 relative flex border rounded text-center">
      <span className="block w-6 h-6 m-auto border-2 border-transparent border-y-sky-500 rounded-full animate-spin" />
    </div>
  )
}
