import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { FaJava,
  FaPython,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGit,
  FaJira,
  FaAws,
  FaLinux,
  FaDocker,
  FaReact,
  FaBootstrap,
  FaDatabase, // Represents SQL, as there is no specific SQL icon in Font Awesome
  FaYarn, } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTypescript, SiSpring, SiBootstrap, SiTableau, SiDjango, SiJenkins, SiGooglecloud } from "react-icons/si";
import { Card, Grid, Typography, Button } from "@mui/material";


export const About = () => {
  return (
    <section id="About" className="section">
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h3 className="color_sec py-4">Hello!</h3>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className=" caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <SkillsSection />
          </Col>
        </Row> */}
        
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
const SkillsSection = () => {
  const iconsSkills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "Git", icon: <FaGit /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "React JS", icon: <FaReact /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Tableau", icon: <SiTableau /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Spring-boot", icon: <SiSpring /> },

    //... other skills
  ];

  
  return (
    <div className="skills-container">
      {iconsSkills.map((data, i) => (
        <div key={i} className="skill-item">
          <span className="skill-icon">{data.icon}</span>
          <span className="skill-name">{data.name}</span>
        </div>
      ))}
    </div>
  );
  
      }
