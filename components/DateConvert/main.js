import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dateConvert from './action';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { useRef } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2),
    },
    inputArea: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    buttonArea: {
        textAlign: "left",
        marginTop: theme.spacing(2),
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    divider: {
        margin: theme.spacing(1),
    }
}));

export default function DateConvert() {
    const classes = useStyles();
    const { output, timestampToDateString, dateStringToTimestamp, currentTimestamp } = dateConvert()
    const inputTimestampRef = useRef()
    const selectFormatRef = useRef()
    const inputDateRef = useRef()

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <div className={classes.buttonArea}>
                        <Button variant="contained" color="primary" onClick={() => timestampToDateString('', 'yyyy-mm-dd HH:MM:ss.l')}>当前时间Y-m-d H:i:s.u</Button>
                        <Button variant="contained" color="primary" onClick={() => currentTimestamp()}>当前时间时间戳</Button>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.inputArea}>
                        <TextField
                            placeholder="请输入时间戳"
                            fullWidth
                            inputRef={inputTimestampRef}
                        />
                        <InputLabel id="format_select">请输入转换格式</InputLabel>
                        <Select
                            labelId="format_select"
                            onChange={(event, index, value) => selectFormatRef.current.value = value}
                            inputRef={selectFormatRef}
                            fullWidth
                        >
                            <MenuItem value={'yyyy-mm-dd HH:MM:ss'}>Y-m-d H:i:s</MenuItem>
                            <MenuItem value={'yyyy-mm-dd HH:MM:ss.l'}>Y-m-d H:i:s.u</MenuItem>
                        </Select>
                    </div>
                    <div className={classes.buttonArea}>
                        <Button variant="contained" color="primary" onClick={() => timestampToDateString(inputTimestampRef.current.value, selectFormatRef.current.value)}>时间戳转日期</Button>
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.inputArea}>
                        <TextField
                            placeholder="请输入时间"
                            fullWidth
                            inputRef={inputDateRef}
                        />
                    </div>
                    <div className={classes.buttonArea}>
                        <Button variant="contained" color="primary" onClick={() => dateStringToTimestamp(inputDateRef.current.value)}>日期转时间戳</Button>
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