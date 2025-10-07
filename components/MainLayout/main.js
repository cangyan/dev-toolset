import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Menu_List } from '../../lib/constants';
import { userHeader, userMenu } from './action';
import Menu from './menu';

const drawerWidth = 220;

export default function MainLayout({ children }) {
  const { menuOpen, menuClick, navTitle, setNavTitle } = userHeader()
  const { initMenu } = userMenu()

  useEffect(() => {
    setNavTitle(navTitle)
    initMenu(Menu_List)
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          textAlign: "center",
          width: "100%",
          // zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={menuClick}
            sx={{
              marginRight: 2,
              display: { xs: 'block', sm: 'block' }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {navTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu />
      <Toolbar />
      <div style={{
        margin: "32px",
        paddingTop: "32px",
        flexGrow: 1,
      }}>
        {children}
      </div>
    </div>
  );
}
