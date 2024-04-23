import './index.scss';

export default function Home() {
    return (
        <main className='page home'>
            <div>
                <p>Hello there. My name is</p>
                <h1>Igor Nascimento</h1>
                <h2>&gt; Front-end Developer</h2>
            </div>

            <div>
                <p className='comment'>// complete the game to continue</p>
                <p className='comment'>// you can also see it on my Github page</p>
                <p className='variable'>
                    <span className='const'>const</span> 
                    <span className='name'>githubLink</span> = 
                    <span className='value'>“https://github.com/example/url”</span>
                </p>
            </div>
        </main>
    )
}