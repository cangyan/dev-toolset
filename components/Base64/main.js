import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import useBase64 from './action';
import Box from '@mui/material/Box';
import { useRef } from 'react';

export default function Base64() {
    const { output, encode, decode } = useBase64()
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
                            label="待处理字符串"
                            placeholder=""
                            rows={24}
                            rowsMax={24}
                            multiline
                            fullWidth
                            inputRef={inputRef}
                        />
                    </div>
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => encode(inputRef.current.value)} sx={{ m: 1 }}>Encode</Button>
                        <Button variant="contained" color="primary" onClick={() => decode(inputRef.current.value)} sx={{ m: 1 }}>Decode</Button>
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
