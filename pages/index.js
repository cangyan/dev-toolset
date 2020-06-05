import React from "react";
import { useEffect } from "react";
import { userHeader } from "../components/MainLayout/Action";
import Index from "../components/Index/Main";

export default function Home() {
  const { setNavTitle } = userHeader()
  useEffect(() => {
    setNavTitle("首页")
  }, []);

  return (
    <Index />
  )
}
