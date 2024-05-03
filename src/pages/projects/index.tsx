import './index.scss';

import projectsData from '../../data/projects-info';
import { limitText } from '../../util/textFunctions';
import { useEffect, useState } from 'react';
import { getClassProperties } from '../../util/objectFunctions';
import { Project, Tech } from '../../data/projects-info/types';

import ProjectPopUp from '../../components/project-popup';
import CustomCheckbox from '../../components/custom-checkbox';

export default function Projects() {

    const [projects, setProjects] = useState(projectsData);
    const [techFilters, setTechFilters] = useState<string[]>([]);
    const [showProjectInfo, setShowProjectInfo] = useState(false);
    const [projectInfo, setProjectInfo] = useState<Project>(projects[0]);

    const techs = getClassProperties(Tech);

    function filter(): void {
        if (!techFilters.length) {
            setProjects(projectsData);
            return;
        }

        setProjects(projectsData.filter(project => {
            for (const tech of techFilters)
                return project.techs.some(projectTech => projectTech.name === tech);
        }))
    }

    function handleUpdateFilter(tech: string) {
        if (techFilters.find(element => element === tech))
            setTechFilters([...techFilters.filter(element => element !== tech)])
        else
            setTechFilters([...techFilters, tech]);
    }

    useEffect(filter, [techFilters]);

    return (
        <main className='page projects' >
            <section className="side-bar">
                <h1>
                    <img src="/assets/images/icons/arrow-down.svg" alt="" />
                    projects
                </h1>

                <div className='categories'>
                    {techs.map(tech =>
                        <div onClick={() => handleUpdateFilter(tech.name)}>
                            <CustomCheckbox value={tech.name} checked={techFilters.some(techFilter => techFilter === tech.name)} />
                            <img src={tech.logoURL} alt="" />
                            <h2>{tech.name}</h2>
                        </div>
                    )}
                </div>
            </section>

            <section className='sec-projects'>
                <div className='title'>
                    <h2>
                        <img src="/assets/images/icons/arrow-next.svg" alt="" />
                        {techFilters.length === 0 ?
                            'all projects' :
                            techFilters.map(tech => tech.toLowerCase() + '; ')
                        }
                    </h2>
                </div>

                <div className='container-projects'>
                    {projects.map(project =>
                        <div className='project'>
                            <h3>
                                {project.name + " "}
                                <span>// {project.codeName}</span>
                            </h3>

                            <div>
                                <ul className='techs'>
                                    {project.techs.map(tech =>
                                        <li style={{ background: tech.color }}>
                                            <img src={tech.logoURL} alt="" />
                                        </li>
                                    )}
                                </ul>

                                <img src={"/assets/images/projects/" + project.coverImage} className='background-image' />

                                <div className='description'>
                                    <p>{limitText(project.description)}</p>

                                    <button onClick={() => { setShowProjectInfo(true); setProjectInfo(project)}} >view more</button>
                                    <ProjectPopUp isOpen={showProjectInfo} setIsOpen={setShowProjectInfo} projectInfo={projectInfo} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}