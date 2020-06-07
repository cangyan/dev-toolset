export default function reducer(state = {
    inputTimestamp: "",
    inputTime: "",
    output: ""
}, action) {
    switch (action.type) {
        case "DATE_CONVERT":
            return {
                ...state,
                inputTime: action.payload.inputTime,
                inputTimestamp: action.payload.inputTimestamp,
                output: action.payload.output
            }
    }
    return state
}