import Header from '../../components/header'
import Footer from '../../components/footer';
import { useIsMobile } from '../../util/mediaQueries';
import { Toaster } from 'react-hot-toast';

export default function BasePage(props: {
    selectedPage: string,
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>,
    children: React.ReactNode
}
) {
    const isMobile = useIsMobile();
    
    return (
        <>
            <Toaster position={isMobile ? 'bottom-center' : 'top-center'} />
            <Header currentPage={props.selectedPage} setLanguage={props.setCurrentLanguage} />
            {props.children}
            <Footer setLanguage={props.setCurrentLanguage} />
        </>
    )
}