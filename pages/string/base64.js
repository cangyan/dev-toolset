import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import Base64 from "../../components/Base64/main";

export default function Home() {
    const { setNavTitle } = userHeader()
    useEffect(() => {
        setNavTitle("base64转换")
    }, []);

    return (
        <Base64 />
    )
}
