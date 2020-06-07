import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import DateConvert from '../../components/DateConvert/main'

export default function Convert() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("日期转换")
    }, []);

    return (
        <DateConvert />
    )
};
