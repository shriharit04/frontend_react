import React from 'react';
import { motion, transform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPython, FaJava, FaJs, FaNode, FaAws } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiExpress, SiReact, SiGithub } from 'react-icons/si';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Resume.scss';
import { useState } from 'react';

const Resume = () => {

  const [fitToPage,setFitToPage] = useState(false)
  const [scale, setScale] = useState(1);



  const downloadResume = () => {
    const input = document.getElementById('resume');

    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };


  const handleButtonClick = () => {
    if (!fitToPage) {
      const element = document.getElementById('resume');
      const elementHeight = element.scrollHeight;
      const viewportHeight = window.innerHeight;
      const newScale = viewportHeight / elementHeight;
      element.scrollTo(0, 0);
      setScale(newScale);
      
    } else {
      setScale(1);
    }
    setFitToPage(!fitToPage);
  };

  const dynamicSize = {
    transform: `scale(${scale})`,
    transformOrigin: 'top',
    transition: 'transform 0.3s ease-in-out',
  }

  



  return (
    <div id="resume" className="resume" style={dynamicSize}>
      <motion.div 
        className="header card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="name">SHRIHARI THIYAGARAJAN</h1>
        <p>+91-9791441419 · ntshrihari@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/ntshrihari"><FaLinkedin /> LinkedIn</a> · 
          <a href="https://github.com/shriharit04"><FaGithub /> GitHub</a>
        </p>
      </motion.div>

      <motion.div 
        className="section card"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2>KEY COMPETENCIES</h2>
        <div className="competencies">
          <div>
            <h3>CODING LANGUAGES</h3>
            <ul>
              <li><span className="icon-circle"><FaPython className="icon-python" /></span> Python</li>
              <li><span className="icon-circle"><SiCplusplus className="icon-cplusplus" /></span> C++</li>
              <li><span className="icon-circle"><FaJava className="icon-java" /></span> Java</li>
              <li><span className="icon-circle"><FaJs className="icon-js" /></span> JavaScript</li>
            </ul>
          </div>
          <div>
            <h3>TECH STACK</h3>
            <ul>
              <li><span className="icon-circle"><SiMongodb className="icon-mongodb" /></span> MongoDB</li>
              <li><span className="icon-circle"><SiExpress className="icon-express" /></span> ExpressJS</li>
              <li><span className="icon-circle"><SiReact className="icon-react" /></span> ReactJS</li>
              <li><span className="icon-circle"><FaNode className="icon-node" /></span> NodeJS</li>
              <li><span className="icon-circle"><SiGithub className="icon-github" /></span> GitHub</li>
{/*               <li><span className="icon-circle"><FaAws className="icon-aws" /></span> Amazon Web Services</li> */}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="section card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>PROJECTS</h2>
        <div className="project-item">
          <div className="head"><h3>Community Football Hosting and Turf Booking Website</h3><span>June 2024 - August 2024(expected)</span></div>
          <p>MongoDB, ExpressJS, ReactJS, NodeJS </p>
          <p><a href="https://github.com/shriharit04/TurfTime-MERN" target="_blank">GitHub Link</a></p>
          <ul>
            <li>Designed and developed a website where users can book turfs on available slots, and turf owners can list their turfs.</li>
            <li>Currently wokring on adding Community football matches and tournaments in the app.</li>
            <li>Implemented user authentication, authorization, CRUD operations on mongoDB.</li>
          </ul>
        </div>
        <div className="project-item">
          <div className="head"><h3>Research Scribe</h3><span>Dec 2023</span></div>
          <p>Python Automation and API - </p>
          <p><a href="https://github.com/shriharit04/ResearchScribe" target="_blank">GitHub Link</a></p>
          <ul>
            <li>Developed ResearchScribe, a simple python application designed to streamline information gathering and knowledge integration for researchers, students, and professionals.</li>
            <li>Implemented real-time information retrieval, enabling instant access to up-to-date data from diverse sources with the help of chatgpt</li>
            <li>Autoamates chatGPT queries and retrieves data into a word file without the need of chatGPT api using GUI automation</li>
          </ul>
        </div>
      </motion.div>

      <motion.div 
        className="section card"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2>EDUCATION</h2>
        <div className="education-items" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',gap:'5px',justifyContent:'space-evenly' }}>
          <div className="education-item">
            <h3>Vellore Institute of Technology, Vellore</h3>
            <h4>B.Tech Computer Science with specialization in Internet Of things</h4>
            <p>Cumulative GPA (till IV semester): <strong>9.23</strong></p>
          </div>
          <div className="education-item">
            <h3>The PSBB Millennium School, Coimbatore</h3>
            <p>Grade XII - <strong>96%</strong></p>
            <p>Grade X - <strong>94.8%</strong></p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="section card "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2>CERTIFICATIONS</h2>
        <div className="certification-items" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',gap:'5px',justifyContent:'space-evenly' }}>
            <div className="certification-item">
              <h3>AWS Academy Cloud Foundations</h3>
              <h4>AWS Academy Graduate</h4>
              <h5>July 2024</h5>
              {/* <img src="" alt="" /> */}
            </div>
            <div className="certification-item">
              <h3>Google IT Automation with Python</h3>
              <h4>Google-Cousera</h4>
              <h5>June 2023</h5>
            </div>
        </div>
      </motion.div>

      <button onClick={handleButtonClick} className="download-button">{fitToPage ? "Expand" : "Shrink"}</button>
    </div>
  );
};

export default Resume;
