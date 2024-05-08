import { useContext, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer';
import Home from './pages/home';
import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import LanguageContext from './context';

function App() {

  const [currentPage, setCurrentPage] = useState("home");
  const [currentLanguage, setCurrentLanguage] = useState(useContext(LanguageContext));

  return (
    <>
      <LanguageContext.Provider value={currentLanguage}>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <PageSwitcher currentPage={currentPage} />
        <Footer setLanguage={setCurrentLanguage}/>
      </LanguageContext.Provider>
    </>
  )
}

function PageSwitcher(props: { currentPage: string }) {
  switch (props.currentPage) {
    case "home":
      return <Home />

    case "projects":
      return <Projects />

    case "about-me":
      return <AboutMe />

    default:
      return <Home />
  }
}

export default App;