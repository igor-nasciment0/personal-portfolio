import './index.scss';
import aboutMeData from '../../data/about-me-info';
import { useContext, useEffect, useState } from 'react';
import FolderStructure from '../../components/folder-structure/index.tsx';
import File from '../../data/about-me-info/types/file.tsx';
import FileHistory from '../../util/fileHistory.ts';
import randomColor from 'randomcolor';
import LanguageContext from '../../context.tsx';
import AboutMeContent from './content.ts';
import { useIsMobile } from '../../util/mediaQueries.ts';

const fileHistory = new FileHistory();
const negriteTextColors = randomColor({ luminosity: "light", count: 25 })

export default function AboutMe() {

    const isMobile = useIsMobile();

    const [selectedSection, setSelectedSection] = useState(aboutMeData[0]);
    const [openFiles, setOpenFiles] = useState<File[]>([]);
    const [currentFile, setCurrentFile] = useState<File>();

    const language = useContext(LanguageContext);

    function openFile(file: File) {
        if (!openFiles.some(alreadyOpen => alreadyOpen.name === file.name))
            setOpenFiles([...openFiles, file]);

        accessFileContent(file);
    }

    function accessFileContent(file: File) {
        fileHistory.addToHistory(file);
        setCurrentFile(file);
    }

    function closeFile(file: File) {
        const newOpenFiles = openFiles.filter(alreadyOpen => alreadyOpen.name !== file.name);
        setOpenFiles(newOpenFiles);

        if (file === currentFile) {
            fileHistory.popFromHistory();
            console.log(fileHistory);
            !newOpenFiles.length ? setCurrentFile(undefined) : setCurrentFile(fileHistory.getLastFile());

        } else fileHistory.removeFromHistory(file);
    }

    function randomColorsInNegriteText() {
        const textArea = document.getElementsByClassName("plain-text")[0];

        if (textArea) {
            const elements = textArea.querySelectorAll("b");

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.style.color = negriteTextColors[i];
            }
        }
    }

    useEffect(randomColorsInNegriteText, [currentFile]);

    return (
        <main className='page about-me'>

            <h1>_{AboutMeContent[language].page_title}</h1>

            <section className='side-bar'>
                <nav>
                    {aboutMeData.map(section =>
                        <li onClick={() => setSelectedSection(section)}
                            className={selectedSection.name === section.name ? "selected" : ""}
                        >
                            <img src={"/assets/images/icons/" + section.icon} alt="" />
                        </li>
                    )}
                </nav>
                <div className='folder-structure'>

                    {isMobile ? aboutMeData.map(section =>
                        <FolderStructure section={section} openFile={openFile} selectedFile={currentFile} setSection={setSelectedSection}/>
                    ) :
                        <FolderStructure section={selectedSection} openFile={openFile} selectedFile={currentFile} setSection={setSelectedSection}/>
                    }

                    <ContactStructure language={language} />

                </div>
            </section>

            <section className='open-file'>
                <div className='title' style={!openFiles.length ? { borderBottom: "none" } : {}}>
                    {
                        openFiles.map(file =>
                            <h2 className={file.name === currentFile?.name ? 'selected' : ''}>
                                <span onClick={() => accessFileContent(file)}>{file.name[language]}</span>
                                <img src="/assets/images/icons/close-icon.svg" alt="" onClick={() => closeFile(file)} />
                            </h2>
                        )
                    }
                </div>

                {currentFile &&
                    <h1 className='mobile-file-name'>
                        <span>// {selectedSection.name[language]}</span> / {currentFile?.name[language]}
                    </h1>
                }

                {currentFile ?
                    <div className='content'>
                        {currentFile.content()}
                    </div>

                    :

                    <NoFile language={language} />
                }

            </section>
        </main>
    )
}

function NoFile(props: { language: string }) {
    return (
        <div className='no-file'>
            <img src="/assets/images/icons/code-file.svg" alt="" />
            <h3>{AboutMeContent[props.language].no_file}</h3>
        </div>
    )
}

function ContactStructure(props: { language: string }) {

    const isMobile = useIsMobile();
    const [open, setOpen] = useState(!isMobile);

    return (
        <div className='contact'>
            <h1 onClick={() => setOpen(!open)}>
                <img src="/assets/images/icons/arrow-down.svg" alt="" style={{ rotate: open ? '' : '-90deg' }} />
                {AboutMeContent[props.language].contact_title}
            </h1>

            {open &&
                <div>
                    <li style={{ wordBreak: "break-word" }}>
                        <img src="/assets/images/icons/mail.svg" alt="" />
                        nascimentoigor@gmail.com
                    </li>
                    <li>
                        <img src="/assets/images/icons/whatsapp.svg" alt="" />
                        (11) 99856-4237
                    </li>
                </div>
            }
        </div>
    )
}