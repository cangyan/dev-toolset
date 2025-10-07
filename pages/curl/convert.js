import { useEffect } from "react";
import CurlConvert from '../../components/CurlConvert/main';
import { userHeader } from "../../components/MainLayout/action";

export default function Convert() {
    const { setNavTitle } = userHeader()

    useEffect(() => {
        setNavTitle("curl地址转换")
    }, []);

    return (
        <CurlConvert />
    )
};
