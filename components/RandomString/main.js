import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import randomString from './action';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FromGroup from '@material-ui/core/FormGroup'
import { useRef } from 'react';
import FormGroup from '@material-ui/core/FormGroup';

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

export default function XxxXxx() {
    const classes = useStyles();
    const { output, create } = randomString()
    const selectNumRef = useRef()
    const selectLowerRef = useRef()
    const selectUpperRef = useRef()
    const lengthRef = useRef()

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <div className={classes.inputArea}>
                        <div className="title">请选择生成参数:</div>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        inputRef={selectNumRef}
                                        onClick={() => { selectNumRef.current.value = !selectNumRef.current.value }}
                                    />
                                }
                                label="数字(0-9)"
                            />
                            <FormControlLabel
                                control={

                                    <Checkbox
                                        inputRef={selectLowerRef}
                                        onClick={() => { selectLowerRef.current.value = !selectLowerRef.current.value }}
                                    />
                                }
                                label="字母(a-z)"
                            />


                            <FormControlLabel
                                control={
                                    <Checkbox
                                        inputRef={selectUpperRef}
                                        onClick={() => { selectUpperRef.current.value = !selectUpperRef.current.value }}
                                    />
                                }
                                label="字母(A-Z)"
                            />

                            <TextField
                                placeholder="请输入字符串长度"
                                inputRef={lengthRef}
                            />

                        </FormGroup>
                    </div>
                    <div className={classes.buttonArea}>
                        <Button variant="contained" color="primary" onClick={() => create(
                            selectNumRef.current.checked,
                            selectUpperRef.current.checked,
                            selectLowerRef.current.checked,
                            lengthRef.current.value)}>生成</Button>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <TextField
                        id="result"
                        label="结果:"
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