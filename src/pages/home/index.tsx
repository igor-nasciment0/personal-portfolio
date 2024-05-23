import { useContext } from 'react';
import './index.scss';
import LanguageContext from '../../context';
import HomeContent from './content';
import BasePage from '../base';

export default function Home(props: { setCurrentLanguage: React.Dispatch<React.SetStateAction<string>> }) {

    const language = useContext(LanguageContext);

    return (
        <BasePage selectedPage='home' setCurrentLanguage={props.setCurrentLanguage}>
            <main className='page home'>
                <div className='background' />

                <div className='content'>
                    <section className='text'>
                        <div>
                            <p>{HomeContent[language].p_saudation}</p>
                            <h1>Igor Nascimento</h1>
                            <h2>&gt; Web Developer</h2>
                        </div>

                        <div>
                            <p className='comment'>// {HomeContent[language].p_github}</p>
                            <p className='variable'>
                                <span className='const'>const</span>
                                <span className='name'>githubLink</span>
                                <span>=</span>
                                <span className='value'><a href="https://github.com/igor-nasciment0" target='_blank'>"https://github.com/igor-nasciment0"</a></span>
                            </p>
                        </div>
                    </section>

                    <div className='photo'>
                        <img src="/assets/images/igor.jpg" alt="" />
                    </div>
                </div>
            </main>
        </BasePage>

    )
}