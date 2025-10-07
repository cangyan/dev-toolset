import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import useQrCode from './action';
import { useRef } from 'react';

export default function QrCode() {
    const { output, generate, createMarkup } = useQrCode()
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
                            id="qr-code-input"
                            label="二维码信息"
                            placeholder=""
                            rows={24}
                            rowsMax={24}
                            multiline
                            fullWidth
                            inputRef={inputRef}
                        />
                    </div>
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => generate(inputRef.current.value)}>生成二维码</Button>
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
                    <div dangerouslySetInnerHTML={createMarkup(output)} />
                </Paper>
            </Grid>
        </Grid>
    )
}
