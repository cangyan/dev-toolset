import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import stringHandle from './action';
import { useRef } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

export default function StringHandle() {
    const { output, urlDecode, urlEncode, unicodeToChar, calcStringLength, calcStringLengthWithChinese, convertURLEncodeStringToBulk, phpUnSerialize, createMD5String } = stringHandle()
    const inputRef = useRef()

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        textAlign: 'center',
                        color: 'text.secondary',
                        m: 2
                    }}
                >
                    <div>
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
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => urlDecode(inputRef.current.value)} sx={{ m: 1 }}>URL Decode</Button>
                        <Button variant="contained" color="primary" onClick={() => urlEncode(inputRef.current.value)} sx={{ m: 1 }}>URL Encode</Button>
                        <Button variant="contained" color="primary" onClick={() => unicodeToChar(inputRef.current.value)} sx={{ m: 1 }}>Unicode转字符</Button>
                        <Button variant="contained" color="primary" onClick={() => createMD5String(inputRef.current.value)} sx={{ m: 1 }}>MD5</Button>
                        <Button variant="contained" color="primary" onClick={() => calcStringLength(inputRef.current.value)} sx={{ m: 1 }}>字符串长度</Button>
                        <Button variant="contained" color="primary" onClick={() => calcStringLengthWithChinese(inputRef.current.value)} sx={{ m: 1 }}>字符串长度(中文)</Button>
                        <Button variant="contained" color="primary" onClick={() => convertURLEncodeStringToBulk(inputRef.current.value)} sx={{ m: 1 }}>postman-bulk</Button>
                        <Button variant="contained" color="primary" onClick={() => phpUnSerialize(inputRef.current.value)} sx={{ m: 1 }}>php-unSerialize</Button>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        textAlign: 'center',
                        color: 'text.secondary',
                        m: 2
                    }}
                >
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
