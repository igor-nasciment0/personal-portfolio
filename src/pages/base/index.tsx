import Header from '../../components/header'
import Footer from '../../components/footer';
import { useContext, useState } from 'react';
import LanguageContext from '../../context';
import { useIsMobile } from '../../util/mediaQueries';
import { Toaster } from 'react-hot-toast';

export default function BasePage(props: {
    selectedPage: string,
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>,
    children: React.ReactNode
}
) {
    const isMobile = useIsMobile();
    const setCurrentLanguage = useState(useContext(LanguageContext))[1];

    return (
        <>
            <Toaster position={isMobile ? 'bottom-center' : 'top-center'} />
            <Header currentPage={props.selectedPage} setLanguage={setCurrentLanguage} />
            {props.children}
            <Footer setLanguage={setCurrentLanguage} />
        </>
    )
}