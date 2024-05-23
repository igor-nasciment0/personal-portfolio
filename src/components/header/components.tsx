import { useNavigate } from "react-router-dom"

export function NavigateButton({ currentPage, myPage, myText }: buttonProps) {
  
  const navigate = useNavigate();
  
  return (
    <li
      className={currentPage === myPage ? "selected" : ""}
      onClick={() => navigate("/" + myPage)}
    >{myText}</li>
  )
}

export interface pageProps {
  currentPage: string,
  setLanguage?: React.Dispatch<React.SetStateAction<string>>
}

interface buttonProps extends pageProps {
  myPage: string,
  myText: string
}