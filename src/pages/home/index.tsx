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
    )
}