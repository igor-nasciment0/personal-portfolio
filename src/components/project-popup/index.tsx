import './index.scss';
import { Project } from '../../data/projects-info/types';
import { separateInParagraphs } from '../../util/textFunctions';

import Modal from 'react-modal';
import React, { useContext, useEffect } from 'react';
import LanguageContext from '../../context';
import PopupContent from './content';
import { useIsMobile } from '../../util/mediaQueries';
import { blockPageScrolling } from '../../util/blockScrolling';
import HTMLReactParser from 'html-react-parser/lib/index';

export default function ProjectPopUp(props: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, projectInfo: Project }) {

    useEffect(() => blockPageScrolling(props.isOpen), [props.isOpen]);

    const project = props.projectInfo;
    const language = useContext(LanguageContext);
    const isMobile = useIsMobile();

    modalStyles.content.padding = isMobile ? '10px' : '40px';

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
                        {separateInParagraphs(project.description[language]).map(paragraph => <p>{HTMLReactParser(paragraph)}</p>)}
                    </div>

                    <hr className='vertical-line' />

                    <div className='techs'>
                        <h2>{PopupContent[language].techs_title}</h2>

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
                                {PopupContent[language].live_link}
                            </a>

                            :

                            <h3 className='unfinished'>{PopupContent[language].unfinished_message}</h3>
                        }

                        <a href={project.repositoryURL} target='_blank' className='github'>
                            <img src="/assets/images/icons/github.svg" alt="" />
                            {PopupContent[language].github_link}
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
        maxHeight: 'calc(100% - 20px)',
        overFlow: 'scroll',
        width: 'fit-content',
        inset: 'unset',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(1px)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(1px)',
        zIndex: 5
    }
}