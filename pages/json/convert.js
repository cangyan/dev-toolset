import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import JSONConvert from '../../components/JsonConvert/main'

export default function Convert() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("JSON转换")
    }, []);

    return (
        <JSONConvert />
    )
};
