import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import dateConvert from './action';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box';
import { useRef } from 'react';

export default function DateConvert() {
    const { output, timestampToDateString, dateStringToTimestamp, currentTimestamp } = dateConvert()
    const inputTimestampRef = useRef()
    const selectFormatRef = useRef()
    const inputDateRef = useRef()

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
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => timestampToDateString('', 'yyyy-mm-dd HH:MM:ss.l')} sx={{ m: 1 }}>当前时间Y-m-d H:i:s.u</Button>
                        <Button variant="contained" color="primary" onClick={() => currentTimestamp()} sx={{ m: 1 }}>当前时间时间戳</Button>
                    </Box>
                    <Divider sx={{ m: 1 }} />
                    <Box sx={{ '& > *': { m: 1 } }}>
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
                    </Box>
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => timestampToDateString(inputTimestampRef.current.value, selectFormatRef.current.value)} sx={{ m: 1 }}>时间戳转日期</Button>
                    </Box>
                    <Divider sx={{ m: 1 }} />
                    <Box sx={{ '& > *': { m: 1 } }}>
                        <TextField
                            placeholder="请输入时间"
                            fullWidth
                            inputRef={inputDateRef}
                        />
                    </Box>
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => dateStringToTimestamp(inputDateRef.current.value)} sx={{ m: 1 }}>日期转时间戳</Button>
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
