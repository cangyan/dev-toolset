import React from "react";
import { useEffect } from "react";
import { userHeader } from "../components/MainLayout/action";
import Index from "../components/Index/main";

export default function Home() {
  const { setNavTitle } = userHeader()
  useEffect(() => {
    setNavTitle("首页")
  }, []);

  return (
    <Index />
  )
}
