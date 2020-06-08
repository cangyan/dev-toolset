export default function reducer(state = {
    output: ""
}, action) {
    switch (action.type) {
        case "ID_CARD_QUERY":
            return {
                ...state,
                output: action.payload.output
            }
    }
    return state
}