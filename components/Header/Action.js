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