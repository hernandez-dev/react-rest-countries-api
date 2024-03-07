import { Form } from "react-router-dom"

export default function SearchBox() {
  return(
    <Form className="flex items-center bg-white rounded-md shadow-md overflow-hidden" role="search">
      <span className="block w-[3rem] h-[3rem] text-center leading-[3rem]">
        i
      </span>
      <input
        id="search"
        type="text"
        name="q"
        aria-label="search"
        placeholder="search for a country"
        className="outline-none block w-full capitalize leading-[3rem]"
        autoComplete="off"
      />
    </Form>
  ) // component return end
}
