import './index.scss';
import ProjectInterface from '../../data/projects-info/types';
import { separateInParagraphs } from '../../util/textFunctions';

import Modal from 'react-modal';

export default function ProjectPopUp(props: { isOpen: boolean, setIsOpen: Function, projectInfo: ProjectInterface }) {

    const project = props.projectInfo;

    return (
        <Modal isOpen={props.isOpen} 
               shouldCloseOnOverlayClick={true}
               onRequestClose={() => props.setIsOpen(false)}
               shouldFocusAfterRender 
               style={modalStyles}
        >
            <section id="popup">
                
                <div className='cover-image' style={{ backgroundImage: "url('/assets/images/projects/" + project.coverImage + "')" }}>
                    <button onClick={() => props.setIsOpen(false)}>
                        <img src="/assets/images/icons/close-icon.svg" alt="" />
                    </button>
                </div>

                <div className='description'>
                    <div className='text'>
                        <h3>{project.name}</h3>
                        {separateInParagraphs(project.description).map(paragraph => <p>{paragraph}</p>)}
                    </div>

                    <hr className='vertical-line' />

                    <div className='techs'>
                        <h2>Techs Used</h2>

                        <div>
                            {project.techs.map(tech =>
                                <div style={{ background: tech.color }}>
                                    <img src={tech.logoURL} alt="" />
                                    <h4>{tech.name}</h4>
                                </div>
                            )}
                        </div>

                        {project.siteURL ?
                            <a href={project.siteURL} className='live'>
                                <img src="/assets/images/icons/link.svg" alt="" />
                                see it on live
                            </a>

                            :

                            <h3 className='unfinished'>Still working on this one!</h3>
                        }

                        <a href={project.repositoryURL} className='github'>
                            <img src="/assets/images/icons/github.svg" alt="" />
                            check repository
                        </a>
                    </div>
                </div>
            </section>
        </Modal>
    )
}

const modalStyles = {
    content: {
        border: 'none',
        background: 'unset',
        borderRadius: 'none',
        padding: 'unset',
        margin: 'auto',
        height: 'min-content',
        maxHeight: 'calc(100vh - 20px)',
        overFlow: 'scroll'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backDropFilter: 'blur(1px)',
    }
}