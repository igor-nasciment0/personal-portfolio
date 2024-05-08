import { useContext } from 'react';
import './index.scss';
import LanguageContext from '../../context';
import HeaderContent from './content';

export default function Header({ currentPage, setCurrentPage }: pageProps) {

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

function NavigateButton({ currentPage, setCurrentPage, myPage, myText }: buttonProps) {
  return (
    <li
      className={currentPage === myPage ? "selected" : ""}
      onClick={() => setCurrentPage(myPage)}
    >{myText}</li>
  )
}

interface pageProps {
  currentPage: string,
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

interface buttonProps extends pageProps {
  myPage: string,
  myText: string
}