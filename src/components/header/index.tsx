import './index.scss';

interface pageProps {
  currentPage: string,
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ currentPage, setCurrentPage }: pageProps) {
  return (
    <header className="main-header">
      <div>
        <h2>igor-nascimento</h2>
      </div>
      <nav>
        <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"home"} myText={"_hello"} />
        <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"projects"} myText={"_projects"} />
        <NavigateButton currentPage={currentPage} setCurrentPage={setCurrentPage} myPage={"about-me"} myText={"_about-me"} />
      </nav>
      <button>
        _contact-me
      </button>
    </header>
  )
}

interface buttonProps extends pageProps {
  myPage: string,
  myText: string
}

function NavigateButton({ currentPage, setCurrentPage, myPage, myText }: buttonProps) {
  return (
    <li
      className={currentPage === myPage ? "selected" : ""}
      onClick={() => setCurrentPage(myPage)}
    >{myText}</li>
  )
}