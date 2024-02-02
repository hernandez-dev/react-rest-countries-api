import { NavLink, useParams } from "react-router-dom"

export default function RegionSelector({ regions }) {
  // params
  const params = useParams()

  return(
    <div className="relative">
      <button className="">
        filter by region
      </button>
      <div className="">
        {regions.map(region => {
          return(
            <NavLink key={region} to={`/region/${region}`} className="block">
              {region}
            </NavLink>
          ) // regions.map return end
        })}
      </div>
    </div>
  ) // component return end
}
