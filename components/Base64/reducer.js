export default function reducer(state = {
    output: ""
}, action) {
    switch (action.type) {
        case "BASE64_ENCODE":
            return {
                ...state,
                output: action.payload.output
            }
        case "BASE64_DECODE":
            return {
                ...state,
                output: action.payload.output
            }
    }
    return state
}