import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/action";
import JsonView from '../../components/JsonView/main'

export default function View() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("JSON视图")
    }, []);

    return (
        <JsonView />
    )
};
