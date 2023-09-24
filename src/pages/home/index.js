import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { About } from "../about";
import { ContactUs } from "../contact";
import { Portfolio } from '../portfolio';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Themetoggle from "../../components/themetoggle";
import Button from '@mui/material/Button';
import { socialprofils } from "../../content_option"; 

import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
const drawerWidth = 240;


export const Home = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const resumeLink = "https://drive.google.com/uc?id=1Z6yRg4-RNuom9HPGd_cS4jOADAyf5r2M";


  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List
      
      >
        {['Home','Resume','About', 'Projects', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => scrollToSection(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* (I removed the second List as it seems unrelated to your current setup) */}
    </div>
  );


  return (
    <HelmetProvider>
  
      <Box sx={{ display: 'flex' }} >
     
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
          
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
             // Set the background color here
            }}
            
          >
            {drawer}
          </Drawer>
          <Drawer
          
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , bgcolor: "#bdd9bf"},
              
            }}
            open
          >
            {drawer}
          </Drawer>
          <AppBar
          position="fixed"
          sx={{
            display: { xs: 'block', sm: 'none' },
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            bgcolor: "#bdd9bf"
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "#123499"}}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" color={"#123499"}>
              <FaEnvelope color="#123499"/> cshinde2@asu.edu
            </Typography>
          </Toolbar>
        </AppBar>
        </Box>
        <Box
        
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
         
          <Toolbar />
      <section id="Home" className="section">
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                
                 {/* <div id="button_h" className="ac_btn btn"
                    onClick={() => scrollToSection('Contact')}>
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
        </div>*/}
                  
                <h2>{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  
                    <div id="button_p" className="ac_btn btn "
                    onClick={() => scrollToSection('Projects')}>
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <p style={{ margin: '0' }}>Follow Me</p>
  {socialprofils.github && (
    <a href={socialprofils.github}>
      <FaGithub />
    </a>
  )}
  {socialprofils.linkedin && (
    <a href={socialprofils.linkedin}>
      <FaLinkedin />
    </a>
  )}
</div>

              </div>
              
            </div>
          </div>
        </div>
        </section>
        <Portfolio />
        <About />
        <section id="Resume" className="section">
       
       <h1 className="display-4 mb-4">Resume</h1>

       <hr className="t_border my-4 ml-0 text-left" />
       <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        style={{ height: '40vh' }}
      >
      <div 
        id="button_p" 
        className="ac_btn btn" 
        onClick={() => scrollToSection('Projects')}
        style={{ cursor: 'pointer' }}
      >
        <a href={resumeLink} download target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          Download Resume
        </a>
        <div className="ring one"></div>
        <div className="ring two"></div>
        <div className="ring three"></div>
      </div>
      </Box>
        </section>
      <ContactUs />
      </Box>
      </Box>
    </HelmetProvider>
  );
};
