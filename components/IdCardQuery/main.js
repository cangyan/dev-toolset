import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import idCardQuery from './action';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import { useRef } from 'react';

export default function IdCardQuery() {
    const { output, query } = idCardQuery()
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
                            id="id-card-input"
                            label="待处理身份证号"
                            placeholder=""
                            fullWidth
                            inputRef={inputRef}
                        />
                    </div>
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => query(inputRef.current.value)}>真伪查询</Button>
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
