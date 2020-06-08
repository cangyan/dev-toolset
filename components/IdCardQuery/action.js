import { useSelector, useDispatch } from 'react-redux'
import { IdCard } from './IdCard';

export default function idCardQuery() {
    const output = useSelector((state) => state.IdCardQueryReducer.output)
    const dispatch = useDispatch()
    const query = (input) => {
        let outputString = "";

        let idCardString = input.replace(/ /g, "");

        if (!(idCardString.length == 15 || idCardString.length == 18)) {
            dispatch({
                type: "ERROR",
                payload: {
                    toast: "身份证长度不对"
                }
            })
            return
        }

        try {
            let mIdCard = new IdCard(idCardString);
            if (mIdCard.checkIdCard()) {
                outputString = idCardString + "是有效的身份证号码";
            } else {
                outputString = idCardString + "不是有效的身份证号码";
            }
        } catch (e) {
            dispatch({
                type: "ERROR",
                payload: {
                    toast: e.toString()
                }
            })
        }

        dispatch({
            type: "ID_CARD_QUERY",
            payload: {
                output: outputString
            }
        })
    }

    return { output, query }
}