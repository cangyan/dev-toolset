import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import genenateImage from './action';
import { useRef } from 'react';
import ColorPicker from "material-ui-color-picker";
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
            display: "block",
        },
    },
    buttonArea: {
        textAlign: "center",
        marginTop: theme.spacing(2),
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

export default function GenenateImage() {
    const classes = useStyles();
    const { width, height, remark, bgColor, fontColor, displaySize, output,
        setWidth, setHeight, setRemark, setBgColor, setFontColor, setDispalySize, genenate } = genenateImage()
    const canvasRef = useRef()

    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <div className={classes.inputArea} dispay="inline">
                        <div className="title">请指定参数:</div>
                        <TextField
                            id="input_image_width"
                            placeholder="请输入图片宽度"
                            onChange={(event) => {
                                setWidth(event.target.value)
                            }}
                        />
                        <TextField
                            id="input_image_height"
                            placeholder="请输入图片高度"
                            onChange={(event) => setHeight(event.target.value)}
                        />
                        <TextField
                            id="input_image_remark"
                            placeholder="请输入备注(可选)"
                            onChange={(event) => setRemark(event.target.value)}
                        />
                        <p />
                    请选择背景颜色:
                    <ColorPicker
                            name="input_image_bg_color"
                            defaultValue={bgColor}
                            onChange={(color) => {
                                if (typeof color !== 'undefined') {
                                    setBgColor(color)
                                }
                            }}
                        />
                    请选择字体颜色:
                    <ColorPicker
                            name="input_image_font_color"
                            defaultValue={fontColor}
                            onChange={(color) => {
                                if (typeof color !== 'undefined') {
                                    setFontColor(color)
                                }
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={displaySize}
                                    onChange={() => setDispalySize(!displaySize)}
                                    name="input_image_display_size"
                                    color="primary"
                                />
                            }
                            label="是否显示宽高"
                        />
                    </div>
                    <div className={classes.buttonArea}>
                        <Button variant="contained" color="primary" onClick={() => genenate(canvasRef, width, height, remark, bgColor, fontColor, displaySize)}>生成图片</Button>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                    <canvas ref={canvasRef} width={width} height={height} />
                </Paper>
            </Grid>
        </Grid>
    )
}