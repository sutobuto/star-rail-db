import CharCard from "/src/components/CharCard/CharCard";
import Sidebar from "/src/components/Sidebar/Sidebar";
import { useState } from "react";
import { useMediaQuery } from '/src/hooks/useMediaQuery';
import styles from './Characters.module.css';
import data from '/src/jsons/chardata.json';

function Characters(props) {
  const setCollapse = props.setCollapse
  const breakpoint = useMediaQuery(props.isCollapsed ? '(max-width: 820px)' : '(max-width: 770px)');
  
  return (
    <>
    <Sidebar isCollapsed={props.isCollapsed} setCollapse={props.setCollapse}/>
    <div class='main' style={{
      transition: '0.4s', 
      width: (props.isCollapsed && !breakpoint) && 'calc(100% - 5rem)'
      }}>
      <h1>Characters</h1>
      <div className={styles.characters}>
        {data.sort((a, b) => a.Name > b.Name ? 1 : -1).map((char) => <CharCard name={char.Name} codename={char.Codename} type={char.Element} path={char.Path} rarity={char.Rarity} />)}
      </div>
    </div>
    </>
  )
}

export default Characters;
