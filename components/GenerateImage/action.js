import { useSelector, useDispatch } from 'react-redux'

export default function genenateImage() {
    const width = useSelector((state) => state.GenenateImageReducer.width)
    const height = useSelector((state) => state.GenenateImageReducer.height)
    const remark = useSelector((state) => state.GenenateImageReducer.remark)
    const bgColor = useSelector((state) => state.GenenateImageReducer.bgColor)
    const fontColor = useSelector((state) => state.GenenateImageReducer.fontColor)
    const displaySize = useSelector((state) => state.GenenateImageReducer.displaySize)
    const output = useSelector((state) => state.GenenateImageReducer.output)
    const dispatch = useDispatch()
    const setWidth = (input) => {
        dispatch({
            type: "GENERATE_IMAGE_WIDTH_UPDATE",
            payload: {
                width: input
            }
        })
    }

    const setHeight = (input) => {
        dispatch({
            type: "GENERATE_IMAGE_HEIGHT_UPDATE",
            payload: {
                height: input
            }
        })
    }

    const setRemark = (input) => {
        dispatch({
            type: "GENERATE_IMAGE_REMARK_UPDATE",
            payload: {
                remark: input
            }
        })
    }

    const setBgColor = (input) => {
        dispatch({
            type: "GENERATE_IMAGE_BG_COLOR_UPDATE",
            payload: {
                bgColor: input
            }
        })
    }

    const setFontColor = (input) => {
        dispatch({
            type: "GENERATE_IMAGE_FONT_COLOR_UPDATE",
            payload: {
                fontColor: input
            }
        })
    }

    const setDispalySize = (input) => {
        dispatch({
            type: "GENERATE_IMAGE_DIPLAY_SIZE_UPDATE",
            payload: {
                displaySize: input
            }
        })
    }

    const genenate = (canvasRef, width, height, remark, bgColor, fontColor, displaySize) => {
        console.log(canvasRef);

        const ctx = canvasRef.current.getContext('2d');

        ctx.clearRect(0, 0, width, height);
        ctx.save();
        let fontSize = 5;
        if (width > height) {
            fontSize += parseInt((height / 100)) * 10;
        } else {
            fontSize += parseInt((width / 100)) * 10;
        }

        ctx.font = fontSize + "px Arial";
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = fontColor;
        ctx.textAlign = "center";

        if (remark && displaySize) {
            ctx.fillText(remark, width / 2, height / 2 - height / 8);
            ctx.fillText(width + 'x' + height, width / 2, height / 2 + height / 8);
        } else if (remark) {
            ctx.fillText(remark, width / 2, height / 2);
        } else if (displaySize) {
            ctx.fillText(width + 'x' + height, width / 2, height / 2);
        }

        ctx.restore();

        // canvasRef.current.canvas.toBlob(function (blob) {
        //     FileSaver.saveAs(blob, 'custom_' + width + 'x' + height + '.png');
        // });


        dispatch({
            type: "GENERATE_IMAGE_RESULT",
            payload: {
                output: ""
            }
        })
    }


    return {
        width, height, remark, bgColor, fontColor, displaySize, output,
        setWidth, setHeight, setRemark, setBgColor, setFontColor, setDispalySize, genenate
    }
}