import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import Link from "../Link";
import { userMenu, userHeader } from './Action'
import { HeaderStyle } from './Style'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function Menu() {
    const { menuOpen, menuClick } = userHeader()
    const { useStyles } = HeaderStyle()
    const classes = useStyles();
    const { menu, menuExpend, clickMenuExpend } = userMenu()

    const list = menu.map(list => {
        return (
            <div key={list.key}>
                <ListItem button component={Link} href={list.url} underline="none" onClick={() => clickMenuExpend(list.key)} className={classes.menu}>
                    <ListItemText primary={list.title} />
                    {list.items.length > 0 ? (menuExpend[list.key] ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItem>
                {
                    list.items.length > 0 ? (<Collapse in={menuExpend[list.key]}
                        timeout="auto" unmountOnExit>
                        <List>
                            {list.items.map(item => {
                                return (
                                    <ListItem key={item.id} button component={Link} href={item.url} underline="none" className={classes.nested}>
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
            classes={{ paper: classes.drawerPaper }}
            anchor="left"
            open={menuOpen}
            onClose={menuClick}
        >
            {list}
        </Drawer>
    )
}