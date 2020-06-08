export default function reducer(state = {
    output: ""
}, action) {
    switch (action.type) {
        case "GENERATE_QR_CODE":
            return {
                ...state,
                output: action.payload.output
            }
    }
    return state
}