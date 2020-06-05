import React from "react";
import { useEffect } from "react";
import { userHeader } from "../../components/MainLayout/Action";
import JsonView from '../../components/JsonView/Main'

export default function View() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("JSON视图")
    }, []);

    return (
        <JsonView />
    )
};
