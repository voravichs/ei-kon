import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home, Layout, NoPage, CharCreate, Jobs, Abilities, Finalize, LoadChar, ArchiveFront, ArchiveKeywords, ArchiveClasses, About, CharacterSheet, CCLayout, Reflection} from './pages'

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="charcreate" element={<CCLayout />}>
              <Route path="" element={<CharCreate/>} />
              <Route path="jobs" element={<Jobs/>} />
              <Route path="abilities" element={<Abilities/>} />
              <Route path="finalize" element={<Finalize />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="load" element={<LoadChar />} />
            <Route path="charsheet">
              <Route path=":charname" element={<CharacterSheet />} />
            </Route>
            <Route path="archive" element={<ArchiveFront />} />
            <Route path="archive" >
              <Route path="keywords" element={<ArchiveKeywords />} />
              <Route path="classes" element={<ArchiveClasses />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="about" >
              <Route path="reflection" element={<Reflection />} />
              <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
