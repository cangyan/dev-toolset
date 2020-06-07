import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import jsonConvert from './action';
import { useRef } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
    },
    inputArea: {
    },
    buttonArea: {
        textAlign: "left",
        marginTop: theme.spacing(2),
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

export default function JsonConvert() {
    const classes = useStyles();
    const { input, output, convertArray, convertUrlParams } = jsonConvert()
    const inputRef = useRef()

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <div className={classes.inputArea}>
                        <TextField
                            id="json-input"
                            label="待处理JSON串"
                            placeholder=""
                            rows={24}
                            rowsMax={24}
                            multiline
                            fullWidth
                            inputRef={inputRef}
                        />
                    </div>
                    <div className={classes.buttonArea}>
                        <Button variant="contained" color="primary" onClick={() => convertArray(inputRef.current.value)}>转为数组</Button>
                        <Button variant="contained" color="primary" onClick={() => convertUrlParams(inputRef.current.value)}>转为URL参数</Button>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <TextField
                        id="result"
                        label="转换结果"
                        value={output}
                        rows={32}
                        rowsMax={32}
                        multiline
                        fullWidth
                        disabled
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}