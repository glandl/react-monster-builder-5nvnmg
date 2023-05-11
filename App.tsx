import * as React from 'react';
import { Flipping, img, partStyle } from './helpers';
import './style.css';

// Monster parts are taken from https://www.kenney.nl/assets/monster-builder-pack.
// The images are under CC0 license. You're free to use these game assets in any
// project, personal or commercial. There's no need to ask permission before using
// these. Giving attribution is not required, but is greatly appreciated!

// Get a list of all available monster parts at
// https://cddataexchange.blob.core.windows.net/images/monster-builder/monster_parts.png

// Need inspiration? Here are some sample monsters:
// https://www.kenney.nl/media/pages/assets/monster-builder-pack/b322134d6b-1677495442/sample.png

function Monster1({ color, nose, mouth, arms }: { color: string; nose: string; mouth: string; arms: number }) {
  return (
    <div className="monster">
      <img src={img(`leg_${color}C.png`)} style={partStyle(260, 250)} />
      <img src={img(`leg_${color}C.png`)} style={partStyle(100, 220, 35, Flipping.X)}/>

      <img src={img(`arm_${color}C.png`)} style={partStyle(280, 80 + arms, -25)} />
      <img src={img(`arm_${color}C.png`)} style={partStyle(80, -20 + arms, -25, Flipping.XY)} />

      <img src={img(`body_${color}F.png`)} style={partStyle(150, 50)} />

      <img src={img(`eye_angry_green.png`)} style={partStyle(250, 75)} />
      <img src={img(`eye_dead.png`)} style={partStyle(190, 100)} />

      <img src={img(`nose_${nose}.png`)} style={partStyle(210, 140)} />

      <img src={img(`mouth${mouth}.png`)} style={partStyle(195, 210)} />
    </div>
  );
}

function Monster2({ color, nose, mouth, arms }: { color: string; nose: string; mouth: string; arms: number }) {
  return (
    <div className="monster">
      <img src={img(`leg_${color}E.png`)} style={partStyle(285, 230)} />
      <img src={img(`leg_${color}E.png`)} style={partStyle(75, 210, 25, Flipping.X)} />

      <img src={img(`arm_${color}A.png`)} style={partStyle(310, 90 + arms, -25)} />
      <img src={img(`arm_${color}A.png`)} style={partStyle(70, 25 + arms, -25, Flipping.XY)} />

      <img src={img(`body_${color}A.png`)} style={partStyle(150, 100)} />

      <img src={img(`detail_${color}_antenna_large.png`)} style={partStyle(150, 55, -10, Flipping.X)} />
      <img src={img(`detail_${color}_antenna_large.png`)} style={partStyle(280, 55, 10)} />

      <img src={img(`eye_human_red.png`)} style={partStyle(210, 80)} />

      <img src={img(`nose_${nose}.png`)} style={partStyle(200, 160)} />

      <img src={img(`mouth${mouth}.png`)} style={partStyle(210, 220)} />
    </div>
  );
}

export default function App() {
  const [color, setColor] = React.useState('green');
  const [nose, setNose] = React.useState('red');
  const [mouth, setMouth] = React.useState('D');
  const [monster, setMonster] = React.useState('1');
  const [arms, setArms] = React.useState(0);

  return (
    <div>
      <h1>Monster Builder</h1>

      <label>
        Welches Monster möchtest du?
        <select onChange={(e) => setMonster(e.target.value)} defaultValue={monster}>
          <option value="1">Monster 1</option>
          <option value="2">Monster 2</option>
        </select>
      </label>

      <label>
        Welche Farbe soll dein Monster haben?
        <select onChange={(e) => setColor(e.target.value)} defaultValue={color}>
          <option value="blue">Blau 🔵</option>
          <option value="green">Grün 🟢</option>
          <option value="red">Rot ❤️</option>
          <option value="dark">Braun 🟤</option>
          <option value="yellow">Gelb 🟡</option>
          <option value="white">Weiß 🤍</option>
        </select>
      </label>

      <label>
        Welche Nase soll dein Monster haben?
        <select onChange={(e) => setNose(e.target.value)} defaultValue={nose}>
          <option value="green">Grün 🟢</option>
          <option value="red">Rot ❤️</option>
          <option value="brown">Braun 🟤</option>
          <option value="yellow">Gelb 🟡</option>
        </select>
      </label>

      <label>
        Welchen Mund soll dein Monster haben?
        <select onChange={(e) => setMouth(e.target.value)} defaultValue={mouth}>
          {Array.from('ABCDEFGHIJ').map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label>
        Wo sollen die Hände hin?
        <input type="range" min={0} max={100} onChange={(e) => setArms(parseInt(e.target.value))} defaultValue={arms}/>
      </label>

      {(() => {
        switch (monster) {
          case '1':
            return <Monster1 color={color} nose={nose} mouth={mouth} arms={arms}></Monster1>;
          case '2':
            return <Monster2 color={color} nose={nose} mouth={mouth} arms={arms}></Monster2>;
        }
      })()}
    </div>
  );
}
