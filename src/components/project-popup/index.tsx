import './index.scss';
import { Project } from '../../data/projects-info/types';
import { separateInParagraphs } from '../../util/textFunctions';

import Modal from 'react-modal';
import React from 'react';

export default function ProjectPopUp(props: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, projectInfo: Project }) {

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
                            <a href={project.siteURL} target='_blank' className='live'>
                                <img src="/assets/images/icons/link.svg" alt="" />
                                see it on live
                            </a>

                            :

                            <h3 className='unfinished'>Still working on this one!</h3>
                        }

                        <a href={project.repositoryURL} target='_blank' className='github'>
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
        overFlow: 'scroll',
        width: 'fit-content',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(1px)',
    }
}