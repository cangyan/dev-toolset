import Grid from '@mui/material/Grid';
import { useEffect } from "react";

export default function JsonView() {

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
            <Grid item xs={12}>
                <div id="jsoneditor">
                </div>
            </Grid>
        </Grid>
    )
}
