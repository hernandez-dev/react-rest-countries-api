export default function Header({ darkMode, dispatch }) {
  return (
    <header className="flex items-center justify-between p-6 px-10 shadow-sm shadow-black/[15%]">
      <h1 className="text-2xl capitalize leading-none">
        where in the world!
      </h1>
      <button className="block capitalize">
        dark mode
      </button>
    </header>
  )
}
