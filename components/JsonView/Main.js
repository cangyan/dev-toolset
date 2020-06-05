import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
}));

export default function JsonView() {
    const classes = useStyles();

    useEffect(() => {
        const container = document.getElementById("jsoneditor")
        let options = {
            modes: ['text', 'code', 'tree', 'form', 'view'],
            mode: 'code',
            ace: ace,
        };

        new window["JSONEditor"](container, options)
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.gird}>
                <div id="jsoneditor">
                </div>
            </Grid>
        </Grid>
    )
}