import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import StringHandle from "../../components/StringHandle/main";

export default function Home() {
    const { setNavTitle } = userHeader()
    useEffect(() => {
        setNavTitle("字符串处理")
    }, []);

    return (
        <StringHandle />
    )
}
