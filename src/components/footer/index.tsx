import React, { useContext } from 'react';
import './index.scss';
import LanguageContext from '../../context';
import FooterContent from './content';

export default function Footer(props: {setLanguage: React.Dispatch<React.SetStateAction<string>>}) {

    const language = useContext(LanguageContext);

    function switchLanguage() {
        if(language === "pt_br")
            props.setLanguage("en_us");
        else
            props.setLanguage("pt_br");
    }

    return (
        <footer className="main-footer">
            <div>
                <p>{FooterContent[language].p_social_links}</p>
                <a href="https://www.linkedin.com/in/nascimentoigor1/" className='linkedin' target="_blank">
                    <img src="/assets/images/icons/linkedin.svg" alt="" />
                </a>
            </div>

            <div>
                <button onClick={switchLanguage}>
                    <img src={"/assets/images/icons/" + (language === "pt_br" ? "brazil-flag.svg" : "usa-flag.svg")} alt="" />
                    {language === "pt_br" ? "Português" : "English"}
                </button>

                <a href="https://github.com/igor-nasciment0" className='github' target="_blank">
                    igor-nascimento
                    <img src="/assets/images/icons/github.svg" alt="" />
                </a>
            </div>
        </footer>
    )
}