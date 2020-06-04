import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/Action";

export default function JsonView() {
    const { setNavTitle } = userHeader()
    useEffect(() => {
        setNavTitle("JSON视图")
    }, []);

    return (
        <div>
            JSON视图
        </div>
    )

};
