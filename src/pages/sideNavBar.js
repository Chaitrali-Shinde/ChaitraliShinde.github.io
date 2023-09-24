import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkIcon from '@mui/icons-material/Work';
import MenuIcon from '@mui/icons-material/Menu';

function SideNavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawerVariant = isMobile ? 'temporary' : 'permanent';

  return (
    <div>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer variant={drawerVariant} open={open} onClose={handleDrawerToggle}>
        <List>
          <ListItem button component="a" href="#home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="#about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="#projects">
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="#contact">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default SideNavBar;
