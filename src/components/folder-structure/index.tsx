import { useContext, useState } from "react";
import Section from "../../data/about-me-info/types/section.ts";
import randomColor from 'randomcolor';
import File from "../../data/about-me-info/types/file.tsx";
import LanguageContext from "../../context.tsx";

const colors = randomColor({luminosity: 'light', count: 10});

export default function FolderStructure(props: { section: Section, openFile: (file: File) => void, selectedFile: File | undefined }) {

    const [open, setOpen] = useState(true);
    const language = useContext(LanguageContext);

    return (
        <div className='current-folder'>
            <h1 onClick={() => setOpen(!open)}>
                <img src="/assets/images/icons/arrow-down.svg" style={{ rotate: open ? '' : '-90deg' }} alt="" />
                {props.section.name[language]}
            </h1>

            {open &&
                <div>
                    {props.section.files.map((file, index) =>
                        <li onClick={() => props.openFile(file)} 
                            className={file.name === props.selectedFile?.name ? "selected" : ""}
                        >
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: colors[index] }}>
                                <path d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z" fill="currentColor" />
                            </svg>

                            {file.name[language]}
                        </li>
                    )}
                </div>
            }
        </div>
    )
}