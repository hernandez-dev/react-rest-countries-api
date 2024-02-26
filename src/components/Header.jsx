import { Link } from "react-router-dom"

export default function Header({ setState }) {
  return (
    <header className="flex items-center justify-between p-6 px-10 shadow-sm shadow-black/[15%] text-primary-dark dark:text-white">
      <Link to="/">
        <h1 className="text-2xl capitalize leading-none">
          where in the world!
        </h1>
      </Link>
      <button onClick={() => setState(draft => { draft.darkMode = !draft.darkMode })} className="block capitalize">
        dark mode
      </button>
    </header>
  )
}
