import CharCard from "/src/components/CharCard/CharCard";
import Sidebar from "/src/components/Sidebar/Sidebar";
import { useState } from "react";
import { useMediaQuery } from '/src/hooks/useMediaQuery';
import styles from './Characters.module.css';
import data from '/src/jsons/chardata.json';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function Characters() {
  const [isCollapsed, setCollapse] = useState(true);
  const breakpoint = useMediaQuery(isCollapsed ? '(max-width: 820px)' : '(max-width: 770px)');
  
  return (
    <>
    <Sidebar isCollapsed={isCollapsed} setCollapse={setCollapse}/>
    <div class='main' style={{
      transition: '0.4s', 
      marginLeft: (isCollapsed && !breakpoint) && '5rem'
      }}>
      <h1>Characters</h1>
      <div className={styles.characters}>
        {data.map((char) => <CharCard name={char.Name} codename={char.Codename} type={char.Element} path={char.Path} rarity={char.Rarity} />)}
      </div>
    </div>
    </>
  )
}

export default Characters;
