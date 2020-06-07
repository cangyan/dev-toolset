import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import RandomString from "../../components/RandomString/main";

export default function Home() {
    const { setNavTitle } = userHeader()
    useEffect(() => {
        setNavTitle("随机字符串生成")
    }, []);

    return (
        <RandomString />
    )
}
