import { projectsData } from '../data/const';
import '../styles/projects.css';
import ProjectItem from './projectItem';

const Projects = () => {
    return (<div id="software" className="software__display">
        <span className='tertiary-color-text'>/ software-creations</span>
        <div className='software__display-projects block-experience__job'>
            {projectsData.map((project) => (
                <ProjectItem key={project.title} project={project} />
            ))}
        </div>
    </div>)
}

export default Projects;