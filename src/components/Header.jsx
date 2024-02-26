import { Link } from "react-router-dom"

export default function Header({ setState }) {
  return (
    <header className="p-6 px-10 shadow-sm shadow-black/[15%] text-primary-dark dark:text-white desktop:px-0">
      <div className="flex items-center justify-between max-w-desktop mx-auto">
        <Link to="/">
          <h1 className="text-2xl capitalize leading-none">
            where in the world!
          </h1>
        </Link>
        <button onClick={() => setState(draft => { draft.darkMode = !draft.darkMode })} className="block capitalize">
          dark mode
        </button>
      </div>
    </header>
  )
}
