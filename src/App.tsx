import { useContext, useState } from 'react'
import Home from './pages/home';
import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import LanguageContext from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    const [currentLanguage, setCurrentLanguage] = useState(useContext(LanguageContext));

    return (
        <>
            <LanguageContext.Provider value={currentLanguage}>

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
            <Route path='/' element={<Home setCurrentLanguage={props.setCurrentLanguage}/>} />
            <Route path='/projects' element={<Projects setCurrentLanguage={props.setCurrentLanguage}/>} />
            <Route path='/about-me' element={<AboutMe setCurrentLanguage={props.setCurrentLanguage}/>} />
            <Route path='/*' element={<Home setCurrentLanguage={props.setCurrentLanguage}/>} />
        </Routes>
    )
}

export default App;