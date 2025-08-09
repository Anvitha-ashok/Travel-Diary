import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/sign-up" exact element={<SignUp />} />
    </Routes>
  </BrowserRouter>
</>
)
}

export default App