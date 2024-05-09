import { useContext } from "react";
import LanguageContext from "../../context";
import './index.scss'

export default function LanguageButton({ setLanguage }: { setLanguage: React.Dispatch<React.SetStateAction<string>> }) {

    const language = useContext(LanguageContext);

    function switchLanguage() {
        if (language === "pt_br")
            setLanguage("en_us");
        else
            setLanguage("pt_br");
    }

    return (
        <button className="language-button" onClick={switchLanguage}>
            <img src={"/assets/images/icons/" + (language === "pt_br" ? "brazil-flag.svg" : "usa-flag.svg")} alt="" />
            {language === "pt_br" ? "Português" : "English"}
        </button>
    )
}