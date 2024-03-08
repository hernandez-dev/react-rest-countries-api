import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"

// regions
const regions = [
  {
    id: 1,
    name: "america"
  },
  {
    id: 2,
    name: "asia"
  },
  {
    id: 3,
    name: "europe"
  },
  {
    id: 4,
    name: "asia"
  },
  {
    id: 5,
    name: "oceania"
  }
]

export default function RegionSelector() {
  // params
  const params = useParams()

  // state
  const [showRegions, setShowRegions] = useState(false)

  return(
    <div className="relative w-64 bg-white shadow-md text-dark-blue rounded-md dark:bg-dark-blue dark:text-white">
      <button
        onClick={() => setShowRegions(prev => !prev)}
        className="flex items-center w-full px-4 rounded-md text-left capitalize leading-[3rem]">
        <span className="block flex-1 leading-none">
          {params.region ? params.region : 'filter by region'}
        </span>
        <i className="">
          1
        </i>
      </button>
      {showRegions ? (
        <div className="absolute left-0 top-full translate-y-2 z-10 w-full px-4 bg-white rounded-md shadow-md dark:bg-dark-blue">
          {regions.map(region => {
            return(
              <NavLink
                key={region.id}
                to={`/region/${region.name.toLowerCase()}`}
                onClick={() => setShowRegions(false)}
                className="block w-full text-left capitalize leading-[3rem]"
              >
                {region.name}
              </NavLink>
            ) // regions.map return end
          })}
        </div>
      ) : ''}
    </div>
  ) // component return end
}
