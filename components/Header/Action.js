import { useSelector, useDispatch } from 'react-redux'

export function userHeader() {
    const menuOpen = useSelector((state) => state.NavReducer.menuOpen)
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

    return { menuOpen, menuClick }
}