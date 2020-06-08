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

    const genenate = () => {
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