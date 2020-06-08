import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import QrCode from '../../components/QrCode/main'

export default function Convert() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("二维码生成")
    }, []);

    return (
        <QrCode />
    )
};
