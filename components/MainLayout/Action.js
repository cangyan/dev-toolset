import { useSelector, useDispatch } from 'react-redux'

export function userHeader() {
    const menuOpen = useSelector((state) => state.NavReducer.menuOpen)
    const navTitle = useSelector((state) => state.NavReducer.title)
    const dispatch = useDispatch()

    const menuClick = () => {
        if (menuOpen == true) {
            dispatch({
                type: "MENU_CLOSE"
            })
        } else {
            dispatch({
                type: "MENU_OPEN"
            })
        }
    }

    const setNavTitle = (title) => {
        dispatch({
            type: "ACCESS_PAGE",
            payload: {
                title: title
            }
        })
    }

    return { menuOpen, menuClick, navTitle, setNavTitle }
}

export function userMenu() {
    const menu = useSelector((state) => state.NavReducer.menu)
    const menuExpend = useSelector((state) => state.NavReducer.menuExpend)
    const dispatch = useDispatch()

    const initMenu = (menuConfig) => {
        dispatch({
            type: "MENU_INIT",
            payload: {
                menu: menuConfig
            }
        })
    }

    const clickMenuExpend = (key) => {
        menuExpend[key] = !menuExpend[key]
        dispatch({
            type: "MENU_EXPEND_CLICK",
            payload: {
                menuExpend: menuExpend
            }
        })
    }

    return { menu, initMenu, menuExpend, clickMenuExpend }
}