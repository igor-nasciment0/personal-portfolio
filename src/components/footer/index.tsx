import React, { useContext } from 'react';
import './index.scss';
import LanguageContext from '../../context';
import FooterContent from './content';
import LanguageButton from '../languageButton';
import { useIsMobile } from '../../util/mediaQueries';

export default function Footer(props: { setLanguage: React.Dispatch<React.SetStateAction<string>> }) {

    const language = useContext(LanguageContext);
    const isMobile = useIsMobile();

    if (!isMobile)
        return (
            <footer className="main-footer">
                <div>
                    <p>{FooterContent[language].p_social_links}</p>
                    <a href="https://www.linkedin.com/in/nascimentoigor1/" className='linkedin' target="_blank">
                        <img src="/assets/images/icons/linkedin.svg" alt="" />
                    </a>
                </div>

                <div>
                    <LanguageButton setLanguage={props.setLanguage} />

                    <a href="https://github.com/igor-nasciment0" className='github' target="_blank">
                        igor-nascimento
                        <img src="/assets/images/icons/github.svg" alt="" />
                    </a>
                </div>
            </footer>
        )
}