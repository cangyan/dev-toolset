export default function reducer(state = {
    input: "",
    output: "",
}, action) {
    switch (action.type) {
        case "STRING_HANDLE":
            return {
                ...state,
                input: action.payload.input,
                output: action.payload.output,
            }
    }
    return state
}