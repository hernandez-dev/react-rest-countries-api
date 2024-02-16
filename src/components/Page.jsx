import { useEffect } from "react"

export default function Page({ title, children }) {

  // title changes
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = title
  }, [title])

  return(
    <>
      {children}
    </>
  )
}
