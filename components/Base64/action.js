import { useSelector, useDispatch } from 'react-redux'
import { Base64 } from "js-base64";

export default function useBase64() {
    const output = useSelector((state) => state.Base64Reducer.output)
    const dispatch = useDispatch()
    const encode = (input) => {
        dispatch({
            type: "BASE64_ENCODE",
            payload: {
                output: Base64.encodeURI(input)
            }
        })
    }

    const decode = (input) => {
        dispatch({
            type: "BASE64_DECODE",
            payload: {
                output: Base64.decode(input)
            }
        })
    }

    return { output, encode, decode }
}