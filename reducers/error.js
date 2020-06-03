export default function reducer(state = {
    toast: '',
}, action) {
    switch (action.type) {
        case "ERROR":
            return {
                ...state,
                toast: action.payload.toast
            }
        case "SHOW_TOAST":
            return {
                ...state,
                toast: ''
            }
    }

    return state
}