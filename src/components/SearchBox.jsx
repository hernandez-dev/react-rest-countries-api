export default function SearchBox({
  query,
  dispatch
}) {
  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault()
    console.log("submit")
  }

  return(
    <form onSubmit={handleSubmit} className="flex items-center">
      <span className="block leading-10">
        O
      </span>
      <input
        className="block flex-1 leading-10"
        type="text"
        name="query"
        value={query}
        onChange={e => dispatch({ type: "set-query", value: e.target.value })}
      />
    </form>
  ) // return end
}
