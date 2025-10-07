import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import stringHandle from './action';
import { useRef } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

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

export default function StringHandle() {
    const classes = useStyles();
    const { output, urlDecode, urlEncode, unicodeToChar, calcStringLength, calcStringLengthWithChinese, convertURLEncodeStringToBulk, phpUnSerialize, createMD5String } = stringHandle()
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
                        <Button variant="contained" color="primary" onClick={() => urlDecode(inputRef.current.value)}>URL Decode</Button>
                        <Button variant="contained" color="primary" onClick={() => urlEncode(inputRef.current.value)}>URL Encode</Button>
                        <Button variant="contained" color="primary" onClick={() => unicodeToChar(inputRef.current.value)}>Unicode转字符</Button>
                        <Button variant="contained" color="primary" onClick={() => createMD5String(inputRef.current.value)}>MD5</Button>
                        <Button variant="contained" color="primary" onClick={() => calcStringLength(inputRef.current.value)}>字符串长度</Button>
                        <Button variant="contained" color="primary" onClick={() => calcStringLengthWithChinese(inputRef.current.value)}>字符串长度(中文)</Button>
                        <Button variant="contained" color="primary" onClick={() => convertURLEncodeStringToBulk(inputRef.current.value)}>postman-bulk</Button>
                        <Button variant="contained" color="primary" onClick={() => phpUnSerialize(inputRef.current.value)}>php-unSerialize</Button>
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