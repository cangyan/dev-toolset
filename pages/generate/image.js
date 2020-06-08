import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import GenerateImage from '../../components/GenerateImage/main'

export default function Convert() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("指定宽度图片生成")
    }, []);

    return (
        <GenerateImage />
    )
};
