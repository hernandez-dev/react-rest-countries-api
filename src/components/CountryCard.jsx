import { Link } from "react-router-dom"

export default function CountryCard({ country }) {
  return(
    <Link
      to={`/${country.name.common.replaceAll(' ', '-').concat(`-${country.cca2}`).toLowerCase()}/details`}
      className="block bg-white rounded-lg shadow-sm shadow-black/20 overflow-hidden dark:bg-dark-blue"
    >
      <div className="h-[60vw] max-h-[400px] countries-xl:max-h-[350px]">
        <img src={country.flags.png} alt={country.flags.alt} className="block w-full h-full" />
      </div>
      <section className="p-5 text-dark-gray dark:text-white">
        <h2 className="font-bold text-xl leading-none truncate">
          {country.name.common}
        </h2>
        <div className="pt-5 space-y-2 text-base">
          <p className="capitalize laeding-none">
            <span className="font-semibold">population:</span> {country.population}
          </p>
          <p className="capitalize laeding-none">
            <span className="font-semibold">region:</span> {country.region}
          </p>
          <p className="capitalize laeding-none">
            <span className="font-semibold">capital:</span> {country.capital ? country.capital[0] : '-'}
          </p>
        </div>
      </section>
    </Link>
  )
}
