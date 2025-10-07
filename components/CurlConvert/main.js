import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react';
import curlConvert from './action';

export default function CurlConvert() {
    const {
        curlInput,
        protocol,
        host,
        port,
        headers,
        result,
        availableHeaders,
        updateCurlInput,
        updateProtocol,
        updateHost,
        updatePort,
        updateHeaders,
        convertCurl
    } = curlConvert()

    const curlInputRef = useRef()
    const [copySuccess, setCopySuccess] = useState('')

    const handleHeaderChange = (header) => {
        const newHeaders = headers.includes(header)
            ? headers.filter(h => h !== header)
            : [...headers, header]
        updateHeaders(newHeaders)
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(result)
            setCopySuccess('已复制到剪贴板!')
            setTimeout(() => setCopySuccess(''), 2000)
        } catch (err) {
            setCopySuccess('复制失败')
            setTimeout(() => setCopySuccess(''), 2000)
        }
    }

    return (
        <Grid container spacing={2} sx={{ height: '100vh', p: 2, maxWidth: '100vw', overflow: 'hidden' }}>
            {/* Left Panel */}
            <Grid item xs={12} md={6}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        textAlign: 'center',
                        color: 'text.secondary',
                        // height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Top Section: Curl Input */}
                    <Box sx={{ flex: '0 0 45%' }}>
                        <TextField
                            id="curl-input"
                            label="curl请求数据"
                            placeholder="例如: curl -X GET 'http://example.com/api' -H 'Content-Type: application/json'"
                            rows={8}
                            multiline
                            fullWidth
                            value={curlInput}
                            onChange={(e) => updateCurlInput(e.target.value)}
                            onBlur={(e) => updateCurlInput(e.target.value)}
                            inputRef={curlInputRef}
                            sx={{ height: '100%' }}
                        />
                    </Box>

                    {/* Middle Section: Parameters (Scrollable) */}
                    <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 1, flex: '0 0 45%', overflow: 'auto', paddingTop: '2vh', }}>
                        <Grid container spacing={2}>
                            {/* Protocol Dropdown */}
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="protocol-label">协议</InputLabel>
                                    <Select
                                        labelId="protocol-label"
                                        id="protocol-select"
                                        value={protocol}
                                        label="协议"
                                        onChange={(e) => updateProtocol(e.target.value)}
                                    >
                                        <MenuItem value="http">HTTP</MenuItem>
                                        <MenuItem value="https">HTTPS</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Host Input */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="host-input"
                                    label="Host"
                                    placeholder="localhost"
                                    value={host}
                                    onChange={(e) => updateHost(e.target.value)}
                                    fullWidth
                                />
                            </Grid>

                            {/* Port Input */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="port-input"
                                    label="Port"
                                    placeholder="80"
                                    value={port}
                                    onChange={(e) => updatePort(e.target.value)}
                                    fullWidth
                                />
                            </Grid>

                            {/* Headers Checkboxes */}
                            <Grid item xs={12}>
                                <FormControl component="fieldset" fullWidth>
                                    <Typography variant="subtitle1" gutterBottom>
                                        选择要包含的Headers
                                    </Typography>
                                    <FormGroup>
                                        {availableHeaders.length > 0 ? (
                                            availableHeaders.map((header, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox
                                                            checked={headers.includes(header)}
                                                            onChange={() => handleHeaderChange(header)}
                                                        />
                                                    }
                                                    label={
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                flex:1,
                                                                // width
                                                                width: '45vh',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                textAlign: 'left',
                                                                whiteSpace: 'nowrap',
                                                                display: 'block'
                                                            }}
                                                        >
                                                            {header}
                                                        </Typography>
                                                    }
                                                />
                                            ))
                                        ) : (
                                            <Typography variant="body2" color="text.secondary">
                                                输入curl命令后，解析出的headers将显示在这里
                                            </Typography>
                                        )}
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Bottom Section: Convert Button (Fixed) */}
                    <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 1, flex: '0 0 10%' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={convertCurl}
                            fullWidth
                            sx={{ height: '100%' }}
                        >
                            转换
                        </Button>
                    </Box>
                </Paper>
            </Grid>

            {/* Right Panel: Result Preview */}
            <Grid item xs={12} md={6}>
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        textAlign: 'center',
                        color: 'text.secondary',
                        // height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <TextField
                        id="result-preview"
                        label="结果预览"
                        value={result}
                        rows={22}
                        multiline
                        fullWidth
                        disabled
                        sx={{ flex: 1 }}
                    />
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={copyToClipboard}
                            disabled={!result}
                            sx={{ flex: 1 }}
                        >
                            复制结果到剪贴板
                        </Button>
                        {copySuccess && (
                            <Typography
                                variant="body2"
                                color="success.main"
                                sx={{ ml: 2 }}
                            >
                                {copySuccess}
                            </Typography>
                        )}
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

