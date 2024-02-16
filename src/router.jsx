import { createBrowserRouter } from "react-router-dom"

// routes
import Root from "./routes/root.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <h1>welcome</h1>
      }
    ]
  }
])

export default router
