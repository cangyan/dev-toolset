export default function reducer(state = {
    input: "",
    output: "",
}, action) {
    switch (action.type) {
        case "JSON_CONVERT":
            return {
                ...state,
                input: action.payload.input,
                output: action.payload.output,
            }
    }
    return state
}