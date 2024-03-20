import { useLoaderData, useNavigation } from "react-router-dom"

// components
import Layout from "./components/Layout.jsx"

// api
import { fetchRequest } from "../../api.js"

// loader
export async function loader({ request, params }) {
  try {
    const response = await fetchRequest('/all')
    return response
  } catch (e) {
    console.log(e)
    return e
  }
}

export default function Countries() {
  // countries
  const countries = useLoaderData()

  // navigation
  const navigation = useNavigation()

  return(
    <Layout title="all countries!" countries={countries}>
    </Layout>
  )
}
