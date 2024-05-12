import { useContext, useEffect, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer';
import Home from './pages/home';
import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import LanguageContext from './context';
import { Toaster } from 'react-hot-toast';
import { useIsMobile } from './util/mediaQueries';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function App() {

    const isMobile = useIsMobile();

    const [currentPage, setCurrentPage] = useState("home");
    const [currentLanguage, setCurrentLanguage] = useState(useContext(LanguageContext));

    return (
        <>
            <LanguageContext.Provider value={currentLanguage}>
                <Toaster position={isMobile ? 'bottom-center' : 'top-center'} />
                <Header currentPage={currentPage} setCurrentPage={setCurrentPage} setLanguage={setCurrentLanguage} />

                <BrowserRouter>
                    <MyRoutes currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </BrowserRouter>

                <Footer setLanguage={setCurrentLanguage} />
            </LanguageContext.Provider>
        </>
    )
}

function MyRoutes(props: { currentPage: string, setCurrentPage: (page: string) => void }) {

    const navigate = useNavigate();
    const path = useLocation().pathname.replace('/', '');

    useEffect(() => {
        props.setCurrentPage(path);
    }, [path])

    useEffect(() => {
        navigate(props.currentPage);
    }, [props.currentPage]);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/*' element={<Home />} />
        </Routes>
    )
}

export default App;