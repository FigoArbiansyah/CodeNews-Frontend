import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexElement from './pages/main/index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexElement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
