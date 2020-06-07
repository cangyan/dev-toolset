import { useSelector, useDispatch } from 'react-redux'

export default function jsonConvert() {
    const input = useSelector((state) => state.JsonConvertReducer.input)
    const output = useSelector((state) => state.JsonConvertReducer.output)
    const dispatch = useDispatch()
    const convertArray = (input) => {
        let o
        try {
            let json = JSON.parse(input);
            var fn = function f(obj) {
                var res = '';
                if (typeof obj === 'object') {
                    for (var key in obj) {
                        res += '"' + key + '"=>' + fn(obj[key]);
                    }

                    return '[' + res.replace(/,$/, '') + ']';
                } else {
                    if (typeof obj === 'string') {
                        return '"' + obj + '",';
                    } else {
                        return obj + ',';
                    }
                }
            };

            o = fn(json);
        } catch (e) {
            o = e;
        }
        dispatch({
            type: "JSON_CONVERT",
            payload: {
                input: input,
                output: o
            }
        })
    }

    const convertUrlParams = (input) => {
        let o
        try {
            let json = JSON.parse(input);
            let str = '';
            for (var key in json) {
                str += key + '=' + JSON.stringify(json[key]).replace(/^\"/, "").replace(/\"$/, "") + '&'
            }

            str = str.replace(/&$/, '');
            o = str;
        } catch (e) {
            o = e;
        }
        dispatch({
            type: "JSON_CONVERT",
            payload: {
                input: input,
                output: o
            }
        })
    }

    return { input, output, convertArray, convertUrlParams }
}