import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(4),
        height: "80vh",
    },
}));

export default function JsonView() {
    const classes = useStyles();

    useEffect(() => {
        const container = document.getElementById("jsoneditor")
        JSONEditor = new window.JSONEditor(container, {})
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper id="jsoneditor" className={classes.paper} elevation={3}>
                </Paper>
            </Grid>
        </Grid>
    )
}