export default function reducer(state = {
    output: "",
}, action) {
    switch (action.type) {
        case "RANDOM_STRING":
            return {
                ...state,
                output: action.payload.output
            }
    }
    return state
}