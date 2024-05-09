import { useContext } from 'react';
import './index.scss';
import LanguageContext from '../../context';
import HomeContent from './content';

export default function Home() {

    const language = useContext(LanguageContext);

    return (
        <main className='page home'>
            <div className='background' />

            <div className='content'>
                <section className='text'>
                    <div>
                        <p>{HomeContent[language].p_saudation}</p>
                        <h1>Igor Nascimento</h1>
                        <h2>&gt; Full-Stack Developer</h2>
                    </div>

                    <div>
                        <p className='comment'>// {HomeContent[language].p_github}</p>
                        <p className='variable'>
                            <a href="https://github.com/igor-nasciment0" target='_blank'>
                                <span className='const'>const</span>
                                <span className='name'>githubLink</span>
                                <span>=</span>
                                <span className='value'>"https://<wbr />github<wbr />.com<wbr />/igor<wbr />-nasciment0"</span>
                            </a>
                        </p>
                    </div>
                </section>

                <div className='photo'>
                    <img src="/assets/images/igorPhoto.jfif" alt="" />
                </div>
            </div>
        </main>
    )
}