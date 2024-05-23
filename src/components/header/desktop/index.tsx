import { useContext } from 'react';
import './index.scss';
import LanguageContext from '../../../context';
import HeaderContent from '../content';
import { NavigateButton, pageProps } from '../components';
import ContactPopup from '../../contact-popup';

export default function HeaderDesktop({ currentPage }: pageProps) {

    const language = useContext(LanguageContext);

    function handleOpenPopup() {
        const container = document.getElementById("contact-popup-container")!;
        const popup = document.getElementById("contact-popup")!;
        container.style.display = 'block';
        setTimeout(() => popup.style.opacity = "1", 100);
    }

    function handleClosePopup() {
        const container = document.getElementById("contact-popup-container")!;
        const popup = document.getElementById("contact-popup")!;
        popup.style.opacity = '0';
        setTimeout(() => container.style.display = "none", 300);
    }

    return (
        <header className="main-header">
            <div>
                <h2>igor-nascimento</h2>
            </div>
            <nav>
                <NavigateButton currentPage={currentPage} myPage={"home"} myText={HeaderContent.page_home[language]} />
                <NavigateButton currentPage={currentPage} myPage={"projects"} myText={HeaderContent.page_projects[language]} />
                <NavigateButton currentPage={currentPage} myPage={"about-me"} myText={HeaderContent.page_aboutme[language]} />
            </nav>

            <div className='contact' onMouseLeave={handleClosePopup}>
                <button onMouseEnter={handleOpenPopup}>
                    {HeaderContent[language].contact}
                </button>

                <ContactPopup />
            </div>
        </header>
    )
}