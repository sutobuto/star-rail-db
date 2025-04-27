import CharCard from "/src/components/CharCard/CharCard";
import Sidebar from "/src/components/Sidebar/Sidebar";
import { useState } from "react";
import { useMediaQuery } from '/src/hooks/useMediaQuery';
import styles from './Characters.module.css';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function Characters() {
  const [isCollapsed, setCollapse] = useState(false);
  const breakpoint = useMediaQuery(isCollapsed ? '(max-width: 770px)' : '(max-width: 770px)');
  
  return (
    <>
    <Sidebar isCollapsed={isCollapsed} setCollapse={setCollapse}/>
    <div class='main' style={{
      transition: '0.4s', 
      marginLeft: (isCollapsed && !breakpoint) && '5rem'
      }}>
      <h1>Characters</h1>
      <div className={styles.characters}>
        <CharCard name='Acheron' codename='acheron' type='Lightning' path='Nihility' rarity='5' />
        <CharCard name='Castorice' codename='castorice' type='Quantum' path='Remembrance' rarity='5' />
        <CharCard name='Firefly' codename='firefly' type='Fire' path='Destruction' rarity='5' />
        <CharCard name='Dan Heng • Imbibitor Lunae' codename='imbibitor-lunae' type='Imaginary' path='Destruction' rarity='5' />
        <CharCard name='Seele' codename='seele' type='Quantum' path='The Hunt' rarity='5' />
        <CharCard name='Aventurine' codename='aventurine' type='Imaginary' path='Preservation' rarity='5' />
        <CharCard name='The Herta' codename='the-herta' type='Ice' path='Erudition' rarity='5' />
        <CharCard name='Robin' codename='robin' type='Physical' path='Harmony' rarity='5' />
      </div>
    </div>
    </>
  )
}

export default Characters;
