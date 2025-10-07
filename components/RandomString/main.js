import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import randomString from './action';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box';
import { useRef } from 'react';
import FormGroup from '@mui/material/FormGroup';

export default function XxxXxx() {
    const { output, create } = randomString()
    const selectNumRef = useRef()
    const selectLowerRef = useRef()
    const selectUpperRef = useRef()
    const lengthRef = useRef()

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
                    <Box sx={{ textAlign: "left", mt: 2, '& > *': { m: 1 } }}>
                        <Button variant="contained" color="primary" onClick={() => create(
                            selectNumRef.current.checked,
                            selectUpperRef.current.checked,
                            selectLowerRef.current.checked,
                            lengthRef.current.value)}>生成</Button>
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