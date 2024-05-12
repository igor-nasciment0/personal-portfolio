import { useContext, useEffect, useState } from 'react';
import './index.scss';
import LanguageContext from '../../../context';
import HeaderContent from '../content';
import { NavigateButton, pageProps } from '../components';
import FooterContent from '../../footer/content';
import LanguageButton from '../../languageButton';
import { blockPageScrolling } from '../../../util/blockScrolling';
import Modal from 'react-responsive-modal';
import ContactPopup from '../../contact-popup';

export default function HeaderMobile({ currentPage, setCurrentPage, setLanguage }: pageProps) {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => blockPageScrolling(menuOpen), [menuOpen])

    useEffect(() => {
        setTimeout(() => setMenuOpen(false), 500);
    }, [currentPage]);

    const positionY = usePageYPosition();

    return (
        <header className="main-header-mobile"
            style={menuOpen ? { height: "100%", backgroundColor: "#011627" } :
                positionY > 15 ? { backgroundColor: "#011627e6", borderBottom: "var(--border-style)" } : {}
            }
        >
            <div>
                <h2>igor-nascimento</h2>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ?
                        <img src="/assets/images/icons/close-icon.svg" className='fechar' alt='Fechar menu' /> :
                        <img src="/assets/images/icons/menu.svg" alt='Abrir menu' />
                    }
                </button>
            </div>

            {menuOpen &&
                <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} setLanguage={setLanguage} />
            }
        </header>
    )
}

function Menu({ currentPage, setCurrentPage, setLanguage }: pageProps) {

    const language = useContext(LanguageContext);
    const [showContact, setShowContact] = useState(false);

    return (
        <section className="menu">
            <Modal open={showContact}
                   onClose={() => setShowContact(false)}
                   showCloseIcon
                >
                <ContactPopup />
            </Modal>

            <nav>
                <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"home"} myText={HeaderContent.page_home[language]} />
                <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"projects"} myText={HeaderContent.page_projects[language]} />
                <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"about-me"} myText={HeaderContent.page_aboutme[language]} />
            </nav>

            <footer>
                <div className='buttons'>
                    <button className='contact-button' onClick={() => setShowContact(true)}>{HeaderContent[language].contact}</button>
                    <LanguageButton setLanguage={setLanguage!} />
                </div>


                <div className='find-me'>
                    <p>{FooterContent[language].p_social_links}</p>
                    <a href="" target='_blank'>
                        <img src="/assets/images/icons/linkedin.svg" alt="" />
                    </a>
                    <a href="" target='_blank'>
                        <img src="/assets/images/icons/github.svg" alt="" />
                    </a>
                </div>
            </footer>
        </section>
    )
}

function usePageYPosition() {
    const [positionY, setPositionY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setPositionY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return positionY;
}