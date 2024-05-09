import { useContext } from 'react';
import './index.scss';
import LanguageContext from '../../../context';
import HeaderContent from '../content';
import { NavigateButton, pageProps } from '../components';

export default function HeaderDesktop({ currentPage, setCurrentPage }: pageProps) {

  const language = useContext(LanguageContext);

  return (
    <header className="main-header">
      <div>
        <h2>igor-nascimento</h2>
      </div>
      <nav>
        <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"home"} myText={HeaderContent.page_home[language]} />
        <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"projects"} myText={HeaderContent.page_projects[language]} />
        <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"about-me"} myText={HeaderContent.page_aboutme[language]} />
      </nav>
      <button>
        _contact-me
      </button>
    </header>
  )
}