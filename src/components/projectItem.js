import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectItem = (data) => {
    let project = data.project;
    return (
        <div className='software__display-project'>
            <div className='software__display-project-margin'>
                <div className='software__display-project-nav'>
                    <FontAwesomeIcon icon={faFolder} />
                    <div className='software__display-project-links'>
                        {project.link !== "" && <a href={project.link}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                        }
                        {project.github !== "" && <a href={project.github}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        }
                    </div>
                </div>
                <div className='software__display-project-info'>
                    <span className='software__project-title'>{project.title}</span>
                    <p className='software__project-description'>{project.description}</p>
                    <span className='software__project-techno'></span>
                </div>
            </div>
        </div>)
}

export default ProjectItem;