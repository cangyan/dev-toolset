export default function reducer(state = {
    menuOpen: false,
    title: "首页",
}, action) {
    switch (action.type) {
        case "MENU_OPEN":
            return {
                ...state,
                menuOpen: true
            }
        case "MENU_CLOSE":
            return {
                ...state,
                menuOpen: false
            }
        case "ACCESS_PAGE":
            return {
                ...state,
                title: action.payload.title
            }
    }

    return state
}