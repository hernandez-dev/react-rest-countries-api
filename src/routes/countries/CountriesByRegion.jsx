import { useLoaderData, useNavigation } from "react-router-dom"

// components
import Layout from "./components/Layout.jsx"

// api
import { fetchRequest } from "../../api.js"

// loader
export async function loader({ request, params }) {
  try {
    /*let response = []
    const url = new URL(request.url)
    const q = url.searchParams.get("q")
    if (q) {
      response = await fetchRequest(`/name/${q}`)
    } else {
      response = await fetchRequest(params.region ? `/region/${params.region}` : '/all')
    }*/
    const response = await fetchRequest(`/region/${params.region}`)
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
