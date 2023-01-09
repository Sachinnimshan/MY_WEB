import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProjectInfo} from '../../store/actions/projects';
import LoadingBox from '../util/LoadingBox';
import MessageBox from '../util/MessageBox';
import '../page.css';
import { Button } from 'react-bootstrap';
import { BiSlideshow } from 'react-icons/bi';
import {AiOutlineGithub, AiOutlineYoutube} from 'react-icons/ai';
import {FiCheckCircle} from 'react-icons/fi';
import Reviews from '../shared/Reviews';

function ProjectInfo(props) {
    const projectID = props.match.params.id;
    const dispatch = useDispatch();

    const projectData = useSelector((state)=> state.projectData);
    const {loading, errors, projectInfo} = projectData;

    useEffect(()=>{
        dispatch(getProjectInfo(projectID));
        console.log(projectInfo);
    }, [dispatch, projectID]);


    return (
      <div className="project-info-container">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : errors ? (
          <MessageBox>{errors}</MessageBox>
        ) : (
          <div className="info-container">
            <h2 className="project-info-name">{projectInfo.title}</h2>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div className="info-left">
                <img className="project-info-img" src={projectInfo.image} />
                {/* <div className='project-info-gallery'>
                    {projectInfo.gallery.map((gal)=>(
                        <img className='project-gal-img' src={gal}/>
                    ))}
                </div> */}
              </div>
              <div className="info-right">
                <h4 className="project-lbl">Check My Work</h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {projectInfo.demo && (
                    <Button
                      variant="primary"
                      target="_blank"
                      href={projectInfo.demo}
                    >
                      Demo
                    </Button>
                  )}
                  {projectInfo.youtube && (
                    <Button
                      variant="danger"
                      target="_blank"
                      href={projectInfo.youtube}
                    >
                      Youtube
                    </Button>
                  )}
                  {projectInfo.github && (
                    <Button
                      variant="success"
                      target="_blank"
                      href={projectInfo.github}
                    >
                      Github
                    </Button>
                  )}
                </div>
                <h4 className="project-lbl">Used Languages</h4>
                <div
                  style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                >
                  {projectInfo.languages.map((lang) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <FiCheckCircle className="info-icons" />
                      <span className="project-info-desc">{lang}</span>
                    </div>
                  ))}
                </div>
                <h4 className="project-lbl">Technology</h4>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <FiCheckCircle className="info-icons" />
                  <span className="project-info-desc">
                    {projectInfo.technology}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        <Reviews projectID={projectID} />
      </div>
    );
}

export default ProjectInfo;
