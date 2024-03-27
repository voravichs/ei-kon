import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import {Home, Layout, NoPage} from './pages'

function App() {

  

  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout/>}>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
