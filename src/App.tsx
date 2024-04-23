import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer';
import Home from './pages/home';

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  return (
  <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Home />
    <Footer />
  </>
  )
}

export default App