import Snackbar from '@material-ui/core/Snackbar'
import { userErrorToast } from './Action'

export default function ErrorToast() {
    const { toast, showToast } = userErrorToast()

    let mToast = <div></div>

    if (toast != "") {
        mToast = <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={true}
            autoHideDuration={5000}
            onClose={showToast()}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{toast}</span>}
        />
    }

    return (mToast)
}