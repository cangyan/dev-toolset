import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { useState, useEffect } from "react";
import { userHeader, userMenu } from './Action'
import { HeaderStyle } from './Style'
import Menu from './Menu'
import { Menu_List } from '../../lib/constants'

function Header({ title }) {
  const { menuOpen, menuClick, navTitle, setNavTitle } = userHeader()
  const { useStyles } = HeaderStyle()
  const classes = useStyles();
  const { initMenu } = userMenu()

  useEffect(() => {
    setNavTitle(title)
    initMenu(Menu_List)
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={menuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {navTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu />
    </div>
  );
}

export default Header;
