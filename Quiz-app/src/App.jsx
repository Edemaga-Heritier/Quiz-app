
import React from 'react'
import Layout from './layout'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/home';
import Quiz from './component/Quiz';

export default function App() {
  return (
    <div>
{/* <Layout/> */}
<Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </Router>
    </div>
  )
}
