import './index.scss';
import aboutMe from '../../data/about-me-info';
import { useEffect, useState } from 'react';
import FolderStructure from '../../components/folder-structure';
import File from '../../data/about-me-info/types/file.tsx';
import FileHistory from '../../util/fileHistory.ts';
import randomColor from 'randomcolor';

const fileHistory = new FileHistory();
const negriteTextColors = randomColor({luminosity: "light", count: 25})

export default function AboutMe() {

    const [selectedSection, setSelectedSection] = useState(aboutMe[0]);
    const [openFiles, setOpenFiles] = useState<File[]>([]);
    const [currentFile, setCurrentFile] = useState<File>();

    function openFile(file: File) {
        if (!openFiles.some(alreadyOpen => alreadyOpen.name === file.name))
            setOpenFiles([...openFiles, file]);

        fileHistory.addToHistory(file);
        setCurrentFile(file);
    }

    function closeFile(file: File) {
        const newOpenFiles = openFiles.filter(alreadyOpen => alreadyOpen.name !== file.name);
        setOpenFiles(newOpenFiles);

        if (file === currentFile) {
            fileHistory.popFromHistory();
            setCurrentFile(!openFiles.length ? undefined : fileHistory.getLastFile());
        } else {
            fileHistory.removeFromHistory(file)
        }
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
            <section className='side-bar'>
                <nav>
                    {aboutMe.map(section =>
                        <li onClick={() => setSelectedSection(section)}
                            className={selectedSection.name === section.name ? "selected" : ""}
                        >
                            <img src={"/assets/images/icons/" + section.icon} alt="" />
                        </li>
                    )}
                </nav>
                <div className='folder-structure'>

                    <FolderStructure section={selectedSection} openFile={openFile} selectedFile={currentFile} />

                    <ContactStructure />

                </div>
            </section>

            <section className='open-file'>
                <div className='title' style={!openFiles.length ? { borderBottom: "none" } : {}}>
                    {
                        openFiles.map(file =>
                            <h2 className={file.name === currentFile?.name ? 'selected' : ''}>
                                <span onClick={() => setCurrentFile(file)}>{file.name}</span>
                                <img src="/assets/images/icons/close-icon.svg" alt="" onClick={() => closeFile(file)} />
                            </h2>
                        )
                    }
                </div>

                {currentFile ?
                    <div className='content'>
                        {currentFile.content()}
                    </div>

                    :

                    <NoFile />
                }

            </section>
        </main>
    )
}

function NoFile() {
    return (
        <div className='no-file'>
            <img src="/assets/images/icons/code-file.svg" alt="" />
            <h3>Open a file to see its content</h3>
        </div>
    )
}

function ContactStructure() {

    const [open, setOpen] = useState(true);

    return (
        <div className='contact'>
            <h1 onClick={() => setOpen(!open)}>
                <img src="/assets/images/icons/arrow-down.svg" alt="" style={{ rotate: open ? '' : '-90deg' }} />
                contacts
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