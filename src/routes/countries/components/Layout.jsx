import { useNavigation } from "react-router-dom"

// global components
import Page from "../../../components/Page.jsx"

// components
import CountryCard from "./CountryCard.jsx"
import SearchBox from "./SearchBox.jsx"
import RegionSelector from "./RegionSelector.jsx"

export default function Layout({ title, countries }) {
  // navigation
  const navigation = useNavigation()

  return(
    <Page title={title} scroll={true}>
      <div className="p-5 space-y-10 max-w-2xl mx-auto tablet:max-w-[1100px] countries-desktop:px-10 countries-desktop:max-w-full desktop:max-w-desktop desktop:px-0">
        <header className="space-y-5 tablet:flex tablet:items-center tablet:justify-between tablet:space-y-0">
          <SearchBox />
          <RegionSelector />
        </header>
        {Boolean(countries) ? (
          <div className={`grid gap-5 ${navigation.state === "loading" ? 'opacity-50' : ''} transition duration-300 tablet:grid-cols-2 countries-desktop:grid-cols-3 countries-xl:grid-cols-4`}>
            {countries.map(country => <CountryCard key={country.name.common} country={country} />).slice(0, 50)}
          </div>
        ) : (
          <h2 className="text-lg text-center text-dark-blue dark:text-white">
            We couldn't find what you're looking for!
          </h2>
        )}
      </div>
    </Page>
  )
}
