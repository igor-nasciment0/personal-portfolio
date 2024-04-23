import './index.scss';

export default function Home() {
    return (
        <main className='page home'>
            <div className='background' />

            <div className='content'>
                <section className='text'>
                    <div>
                        <p>Hello there. My name is</p>
                        <h1>Igor Nascimento</h1>
                        <h2>&gt; Web Apps Developer</h2>
                    </div>

                    <div>
                        <p className='comment'>// complete the game to continue</p>
                        <p className='comment'>// you can also see it on my Github page</p>
                        <p className='variable'>
                            <span className='const'>const</span>
                            <span className='name'>githubLink</span>
                            <span>=</span>
                            <span className='value'><a href="https://github.com/igor-nasciment0">"https://github.com/igor-nasciment0"</a></span>
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