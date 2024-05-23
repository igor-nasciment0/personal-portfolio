import { useContext, useState } from 'react'
import Home from './pages/home';
import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import LanguageContext from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useIsMobile } from './util/mediaQueries';

function App() {

    const [currentLanguage, setCurrentLanguage] = useState(useContext(LanguageContext));
    const isMobile = useIsMobile();

    return (
        <>
            <LanguageContext.Provider value={currentLanguage}>
                <Toaster position={isMobile ? 'bottom-center' : 'top-center'} toastOptions={{duration: 2000}}/>

                <BrowserRouter>
                    <MyRoutes setCurrentLanguage={setCurrentLanguage} />
                </BrowserRouter>

            </LanguageContext.Provider>
        </>
    )
}

function MyRoutes(props: { setCurrentLanguage: React.Dispatch<React.SetStateAction<string>> }) {

    return (
        <Routes>
            <Route path='/' element={<Home setCurrentLanguage={props.setCurrentLanguage} />} />
            <Route path='/projects' element={<Projects setCurrentLanguage={props.setCurrentLanguage} />} />
            <Route path='/about-me' element={<AboutMe setCurrentLanguage={props.setCurrentLanguage} />} />
            <Route path='/*' element={<Home setCurrentLanguage={props.setCurrentLanguage} />} />
        </Routes>
    )
}

export default App;