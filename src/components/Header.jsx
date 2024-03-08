import { Link } from "react-router-dom"

export default function Header({ setState }) {
  return (
    <header className="shadow-sm shadow-black/[15%] text-dark-blue dark:bg-dark-blue dark:shadow-black/70 dark:text-white">
      <div className="flex items-center justify-between p-6 px-5 max-w-2xl mx-auto tablet:max-w-[1100px] countries-desktop:max-w-full countries-desktop:px-10 desktop:max-w-desktop desktop:px-0">
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
