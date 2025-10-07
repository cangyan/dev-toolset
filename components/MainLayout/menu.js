import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Drawer from "@mui/material/Drawer";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "../Link";
import { userHeader, userMenu } from './action';

const drawerWidth = 220;

export default function Menu() {
    const { menuOpen, menuClick } = userHeader()
    const { menu, menuExpend, clickMenuExpend } = userMenu()

    const list = menu.map(list => {
        return (
            <div key={list.key}>
                <ListItem
                    button
                    component={Link}
                    href={list.url}
                    underline="none"
                    onClick={() => clickMenuExpend(list.key)}
                    sx={{ color: 'black' }}
                >
                    <ListItemText primary={list.title} />
                    {list.items.length > 0 ? (menuExpend[list.key] ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItem>
                {
                    list.items.length > 0 ? (<Collapse in={menuExpend[list.key]}
                        timeout="auto" unmountOnExit>
                        <List>
                            {list.items.map(item => {
                                return (
                                    <ListItem
                                        key={item.id}
                                        button
                                        component={Link}
                                        href={item.url}
                                        underline="none"
                                        sx={{
                                            color: 'black',
                                            paddingLeft: 4
                                        }}
                                    >
                                        <ListItemText primary={item.title} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Collapse>) : null
                }
            </div >
        )
    })

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    zIndex: (theme) => theme.zIndex.drawer,
                },
            }}
            variant="temporary"
            anchor="left"
            open={menuOpen}
            onClose={menuClick}
        >
            {list}
        </Drawer>
    )
}
