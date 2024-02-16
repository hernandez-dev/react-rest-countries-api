import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import Header from "./components/Header.jsx"
import Countries from "./components/Countries.jsx"
import CountryDetails from "./components/CountryDetails.jsx"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Countries route="/all" />} />
          <Route path="/region/:region" element={<Countries route={`/region/oceania`} />} />
          <Route path="/:country/details" element={<CountryDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
