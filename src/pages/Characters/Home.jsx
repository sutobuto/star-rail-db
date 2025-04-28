import Sidebar from "/src/components/Sidebar/Sidebar";
import { useState } from "react";

const Home = (props) => {
  return (
  <Sidebar isCollapsed={props.isCollapsed} setCollapse={props.setCollapse}/>
  )
}

export default Home;