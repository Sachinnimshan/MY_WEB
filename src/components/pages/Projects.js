import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import "../page.css";
import { BiSlideshow } from "react-icons/bi";
import { AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";
import { Fade, Slide } from "react-reveal";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../../store/actions/projects";
import LoadingBox from "../util/LoadingBox";
import MessageBox from "../util/MessageBox";
import { Link } from "react-router-dom";

function Projects() {
  const dispatch = useDispatch();

  const projectList = useSelector((state) => state.projectList);
  const { loading, errors, projects } = projectList;

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div className="project-section">
      <div className="section-title">
        <Slide top>
          <h1>Projects</h1>
        </Slide>
        <span>What I Have Done</span>
      </div>
      <Fade bottom>
      <div className="project-container">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : errors ? (
          <MessageBox>{errors}</MessageBox>
        ) : (
          projects.length > 0 && projects.map((item) => (
            
              <div key={item.id} className="project-card">
                <img
                  src={item.image}
                  className="project-thumbnail"
                  alt={item.title}
                />
                <div
                  style={{
                    height: "auto",
                    gap: "0.5rem",
                    padding: "0.25rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span>
                    <Link to={`/project/${item._id}`} className="project-name">
                      {item.title}
                    </Link>
                  </span>
                  <span className="project-desc">{item.description}</span>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "0.5rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    {item.demo && (
                      <Button variant="primary" size="sm" href={item.demo}>
                        Demo
                      </Button>
                    )}
                    {item.youtube && (
                      <Button variant="danger" size="sm" href={item.youtube}>
                        Youtube
                      </Button>
                    )}
                    {item.youtube && (
                      <Button variant="success" size="sm" href={item.github}>
                        Github
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            
          ))
        )}
      </div>
      </Fade>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <img style={{ width: "50%" }} src="/Images/serve.png" />
      </div>
    </div>
  );
}

export default Projects;
