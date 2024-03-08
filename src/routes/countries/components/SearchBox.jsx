import { Form } from "react-router-dom"

export default function SearchBox() {
  return(
    <Form className="flex items-center bg-white rounded-md shadow-md text-dark-gray overflow-hidden tablet:w-[400px] dark:bg-dark-blue dark:text-white" role="search">
      <span className="block w-[3.5rem] h-[3.5rem] ml-1 text-center leading-[3.5rem]">
        <i className="fa-solid fa-search"></i>
      </span>
      <input
        id="search"
        type="text"
        name="q"
        aria-label="search"
        placeholder="search for a country"
        className="outline-none block w-full bg-transparent capitalize leading-[3rem]"
        autoComplete="off"
      />
    </Form>
  ) // component return end
}
