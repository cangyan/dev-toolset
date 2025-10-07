import { useSelector, useDispatch } from 'react-redux'
import dateFormat from "dateformat"

export default function dateConvert() {
    const output = useSelector((state) => state.DateConvertReducer.output)
    const dispatch = useDispatch()
    const timestampToDateString = (timestamp, format) => {
        let mDate
        if (timestamp == "") {
            mDate = new Date();
        } else {
            mDate = new Date(Number(timestamp));
        }

        // Check if the date is valid
        if (isNaN(mDate.getTime())) {
            dispatch({
                type: "DATE_CONVERT",
                payload: {
                    output: "Invalid date"
                }
            })
            return;
        }

        let outputStr = dateFormat(mDate, format)

        dispatch({
            type: "DATE_CONVERT",
            payload: {
                output: outputStr
            }
        })
    }

    const dateStringToTimestamp = (dateString) => {
        let mDate = new Date(dateString);
        dispatch({
            type: "DATE_CONVERT",
            payload: {
                output: mDate.getTime()
            }
        })
    }

    const currentTimestamp = () => {
        let mDate = new Date();
        dispatch({
            type: "DATE_CONVERT",
            payload: {
                output: dateFormat(mDate, 'yyyy-mm-dd HH:MM:ss.l') + ' => ' + mDate.getTime()
            }
        })
    }

    return { output, timestampToDateString, dateStringToTimestamp, currentTimestamp }
}
