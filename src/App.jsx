import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexElement from './pages/main/index'
import AllNews from './pages/news/index'
import NewsDetail from './pages/news/detail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexElement />} />
        <Route path='/news' element={<AllNews />} />
        <Route path='/news/:slug' element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
