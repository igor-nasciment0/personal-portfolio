import Header from '../../components/header'
import Footer from '../../components/footer';

export default function BasePage(props: {
    selectedPage: string,
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>,
    children: React.ReactNode
}
) {    
    return (
        <>
            <Header currentPage={props.selectedPage} setLanguage={props.setCurrentLanguage} />
            {props.children}
            <Footer setLanguage={props.setCurrentLanguage} />
        </>
    )
}