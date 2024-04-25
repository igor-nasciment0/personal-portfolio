import CustomCheckbox from '../../components/custom-checkbox';
import PopUp from '../../components/project-popup';
import './index.scss';

export default function Projects() {
    return (
        <main className='page projects'>
            <PopUp />
            <section className="side-bar">
                <h1>
                    <img src="/assets/images/icons/arrow-down.svg" alt="" />
                    projects
                </h1>

                <div className='categories'>
                    <div>
                        <CustomCheckbox value={"React"} />
                        <img src="/assets/images/icons/react.svg" alt="" />
                        <h2>React</h2>
                    </div>
                </div>
            </section>

            <section className='sec-projects'>
                <div className='title'>
                    <h2>
                        react; vue
                        <img src="/assets/images/icons/close-icon.svg" alt="" />
                    </h2>
                </div>

                <div className='container-projects'>
                    <div className='project'>
                        <h3>
                            UniModeler
                            <span> // uni_modeler</span>
                        </h3>

                        <div>
                            <ul className='techs'>
                                <li>
                                    <img src="/assets/images/icons/react.svg" alt="" />
                                </li>
                            </ul>

                            <img src='/assets/images/tech-particles.gif' className='background-image' />

                            <div className='description'>
                                <p>Duis aute irure dolor in velit esse cillum dolore.</p>

                                <button>view more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}