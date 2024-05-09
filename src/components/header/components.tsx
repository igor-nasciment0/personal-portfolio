export function NavigateButton({ currentPage, setCurrentPage, myPage, myText }: buttonProps) {
  return (
    <li
      className={currentPage === myPage ? "selected" : ""}
      onClick={() => setCurrentPage(myPage)}
    >{myText}</li>
  )
}

export interface pageProps {
  currentPage: string,
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>
  setLanguage?: React.Dispatch<React.SetStateAction<string>>
}

interface buttonProps extends pageProps {
  myPage: string,
  myText: string
}