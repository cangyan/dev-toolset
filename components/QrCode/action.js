import { useSelector, useDispatch } from 'react-redux'
import qrCode from "qrcode-npm";

export default function useQrCode() {
    const output = useSelector((state) => state.QrCodeReducer.output)
    const dispatch = useDispatch()
    const generate = (input) => {
        let outputString = null;
        try {
            let qr = qrCode.qrcode(5, 'M');
            qr.addData(input);
            qr.make();
            outputString = qr.createImgTag(5);
        } catch (e) {
            dispatch({
                type: "ERROR",
                payload: {
                    output: e.toString()
                }
            })
        }

        dispatch({
            type: "GENERATE_QR_CODE",
            payload: {
                output: outputString
            }
        })
    }

    const createMarkup = (input) => {
        return { __html: input };
    }

    return { output, generate, createMarkup }
}

