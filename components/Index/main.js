import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Index() {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        textAlign: 'center',
                        color: 'text.secondary',
                        m: 4,
                        height: "80vh"
                    }}
                >如有问题请联系作者。me.wmf@foxmail.com</Paper>
            </Grid>
        </Grid>
    )
}
