import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import IdCardQuery from '../../components/IdCardQuery/main'

export default function Convert() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("身份证真伪查询")
    }, []);

    return (
        <IdCardQuery />
    )
};
