export default function reducer(state = {
    menuOpen: false,
    title: "首页",
    menu: [],
    menuExpend: {},
}, action) {
    switch (action.type) {
        case "MENU_INIT":
            return {
                ...state,
                menu: action.payload.menu
            }
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
        case "MENU_EXPEND_CLICK":
            return {
                ...state,
                menuExpend: action.payload.menuExpend
            }
    }

    return state
}