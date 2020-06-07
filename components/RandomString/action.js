import { useSelector, useDispatch } from 'react-redux'

export default function randomString() {
    const output = useSelector((state) => state.RandomStringReducer.output)
    const dispatch = useDispatch()
    const create = (hasNumeric, hasUppercase, hasLowercase, length) => {
        let str = "";
        let possible = "";

        if (length.length == 0) {
            dispatch({
                type: "ERROR",
                payload: {
                    toast: '长度不能为空'
                }
            })
        }

        if (!/^[0-9]*$/.test(length)) {
            dispatch({
                type: "ERROR",
                payload: {
                    toast: '请输入整数'
                }
            })
        }

        if (length.length > 1000) {
            dispatch({
                type: "ERROR",
                payload: {
                    toast: '长度不能超过1000'
                }
            })
        }

        if (hasNumeric) {
            possible += "0123456789";
        }

        if (hasUppercase) {
            possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (hasLowercase) {
            possible += "abcdefghijklmnopqrstuvwxyz";
        }

        if (possible.length == 0) {
            dispatch({
                type: "ERROR",
                payload: {
                    toast: '数字,大写字母,小写字母至少勾选一个'
                }
            })
        }

        for (var i = 0; i < length; i++) {
            str += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        dispatch({
            type: "RANDOM_STRING",
            payload: {
                output: str
            }
        })
    }

    return { output, create }
}