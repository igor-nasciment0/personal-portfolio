import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer';
import Home from './pages/home';
import AboutMe from './pages/about-me';
import Projects from './pages/projects';

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  return (
  <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <PageSwitcher currentPage={currentPage}/>
    <Footer />
  </>
  )
}

function PageSwitcher(props: {currentPage: string}) {
  switch (props.currentPage) {
    case "home":
      return <Home />

    case "about-me":
      return <AboutMe />
    
    case "projects": 
      return <Projects />

    default: 
      return <Home />
  }
}

export default App;