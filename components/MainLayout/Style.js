import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 220;

export function HeaderStyle() {
    const useStyles = makeStyles((theme) => ({
        root: {
        },
        title: {
            flexGrow: 1,
        },
        drawer: {
            [theme.breakpoints.up("sm")]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up("sm")]: {
                width: "100%",
            },
            textAlign: "center",
            zIndex: theme.zIndex.drawer + 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up("sm")]: {
                display: "none",
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
        },
        nested: {
            color: 'black',
            paddingLeft: theme.spacing(4),
        },
        menu: {
            color: 'black',
        },
    }));

    return { useStyles }
} 