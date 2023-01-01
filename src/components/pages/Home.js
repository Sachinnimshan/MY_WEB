import React, { useEffect, useState } from 'react';
import '../page.css';
import {Flip,Slide} from 'react-reveal';
import {Button, Modal} from 'react-bootstrap';
import {FaDownload} from 'react-icons/fa';
import {IoLogoInstagram} from 'react-icons/io';
import {FiTwitter} from 'react-icons/fi';
import {AiOutlineFacebook, AiOutlineYoutube, AiFillGithub} from 'react-icons/ai';

function Home() {
  //Modal Hooks
  const [show, setshow] = useState(true);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  useEffect(()=>{
    setshow(true);
  },[]);

    return (
      <div className="home-screen">
        <Slide left>
          <div className="home-center-info">
            <div>
              <Flip top>
                <h1>HI, I'm Sachin</h1>
              </Flip>
            </div>
            <div>
              <p style={{ fontSize: "22px", textTransform: "uppercase" }}>
                Software Engineer / Free Lancer
              </p>
            </div>
            <div>
              <span style={{ fontSize: "18px" }}>
                High Level Experience in Web Design & Development
              </span>
            </div>
            <div>
              <button className="home-btn" >
                <FaDownload className="btn-down-icon" />
                DOWNLOAD MY CV
              </button>
            </div>
          </div>
        </Slide>

        <div>
          <Slide right>
            <img className="home-img" src="/Images/homebg.png" />
          </Slide>
        </div>

        {/* <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
      </div>
    );
}

export default Home;
