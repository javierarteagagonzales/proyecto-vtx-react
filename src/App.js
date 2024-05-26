import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import A1 from "./pages/A1"
import A2 from "./pages/A2"
import A3 from "./pages/A3"
import A4 from "./pages/A4"
import A5 from "./pages/A5"
import A6 from "./pages/A6"
import A7 from "./pages/A7"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/area1" exact element={<A1 />}></Route>
          <Route path="/area2" exact element={<A2 />}></Route>
          <Route path="/area3" exact element={<A3 />}></Route>
          <Route path="/area4" exact element={<A4 />}></Route>
          <Route path="/acabados" exact element={<A5 />}></Route>
          <Route path="/area6" exact element={<A6 />}></Route>
          <Route path="/area7" exact element={<A7 />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}
