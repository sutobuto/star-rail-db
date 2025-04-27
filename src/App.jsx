import CharCard from "./components/CharCard/CharCard";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isCollapsed, setCollapse] = useState(false);
  
  return (
    <>
    <Sidebar isCollapsed={isCollapsed} setCollapse={setCollapse}/>
    <div class='main' style={{transition: '0.4s', marginLeft: isCollapsed && '5rem'}}>
      <h1 style={{fontFamily: 'Rubik Mono One', fontWeight: '300', fontSize: '3.66vw'}}>Characters</h1>
      <div class='characters'>
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

export default App
