import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

export function userErrorToast() {
    const toast = useSelector((state) => state.ErrorReducer.toast)
    const dispatch = useDispatch()
    const createErrorToast = (toast) => {
        dispatch({
            type: "ERROR",
            payload: {
                toast: toast
            }
        })
    }
    const showToast = () => {
        setTimeout(() => {
            dispatch({
                type: "SHOW_TOAST"
            })
        }, 5000)
    }

    return { toast, createErrorToast, showToast }
}