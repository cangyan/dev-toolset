import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useRef } from 'react';
import jsonConvert from './action';

export default function JsonConvert() {
    const { input, output, convertArray, convertUrlParams } = jsonConvert()
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
                        <Button variant="contained" color="primary" onClick={() => convertArray(inputRef.current.value)} sx={{ m: 1 }}>转为数组</Button>
                        <Button variant="contained" color="primary" onClick={() => convertUrlParams(inputRef.current.value)} sx={{ m: 1 }}>转为URL参数</Button>
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
                        rows={26}
                        rowsMax={26}
                        multiline
                        fullWidth
                        disabled
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}
