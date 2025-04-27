import CharCard from "./components/CharCard/CharCard"

function App() {
  return (
    <>
    <div class='containers'>

      <CharCard name='Acheron' codename='acheron' type='Lightning' path='Nihility' rarity='5' />
      <CharCard name='Castorice' codename='castorice' type='Quantum' path='Remembrance' rarity='5' />
      <CharCard name='Firefly' codename='firefly' type='Fire' path='Destruction' rarity='5' />
      <CharCard name='Dan Heng • Imbibitor Lunae' codename='imbibitor-lunae' type='Imaginary' path='Destruction' rarity='5' />
      <CharCard name='Seele' codename='seele' type='Quantum' path='The Hunt' rarity='5' />
      <CharCard name='Aventurine' codename='aventurine' type='Imaginary' path='Preservation' rarity='5' />
      <CharCard name='The Herta' codename='the-herta' type='Ice' path='Erudition' rarity='5' />
      <CharCard name='Robin' codename='robin' type='Physical' path='Harmony' rarity='5' />
    </div>
    </>
  )
}

export default App
