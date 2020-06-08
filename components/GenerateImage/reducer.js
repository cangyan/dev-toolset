export default function reducer(state = {
    width: "",
    height: "",
    remark: "",
    bgColor: "#178",
    fontColor: "#f61",
    displaySize: false,
    output: ""
}, action) {
    switch (action.type) {
        case "GENERATE_IMAGE_WIDTH_UPDATE":
            return {
                ...state,
                width: action.payload.width,
            }
        case "GENERATE_IMAGE_HEIGHT_UPDATE":
            return {
                ...state,
                height: action.payload.height,
            }
        case "GENERATE_IMAGE_REMARK_UPDATE":
            return {
                ...state,
                remark: action.payload.remark,
            }
        case "GENERATE_IMAGE_BG_COLOR_UPDATE":
            return {
                ...state,
                bgColor: action.payload.bgColor,
            }
        case "GENERATE_IMAGE_FONT_COLOR_UPDATE":
            return {
                ...state,
                fontColor: action.payload.fontColor,
            }
        case "GENERATE_IMAGE_DIPLAY_SIZE_UPDATE":
            return {
                ...state,
                displaySize: action.payload.displaySize,
            }
        case "GENERATE_IMAGE_RESULT":
            console.log(state);

            return {
                ...state,
                output: action.payload.output,
            }
    }
    return state
}