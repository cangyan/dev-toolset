import React from "react";
import { useEffect } from "react";
import { userHeader } from "../components/MainLayout/Action";

export default function Home() {
  const { setNavTitle } = userHeader()
  useEffect(() => {
    setNavTitle("首页")
  }, []);

  return (
    <div>
      <p>首页</p>
      <p>首页</p>

      <p>首页</p><p>首页</p><p>首页</p><p>首页</p>
      <p>首页</p>
    </div>
  )

}
