import React from 'react';
import Confetti from 'react-confetti';
import '../styles/styles.less';

function App() {
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <h1>Welcome to my fiesta</h1>
      <div className="image_container"><img src="./assets/img/teemo 2vuotias.jpg" alt="Teemo Tebest" /></div>
      <h3>When: 16 October</h3>
      <h3>Where: Blvr du Pont d&apos;Arve 22</h3>
      <h3>What: A day of fun and dandy</h3>
      <div className="image_container"><img src="./assets/img/IMG_1260.jpeg" alt="" /></div>
      <h1>Exact Schedule</h1>
      <ul>
        <li>13:00 – Ping pong championship games</li>
        <li>16:00 – Teemo organised quiz + making of lättys</li>
        <li>16:00 – Drinking Gin+tonic</li>
        <li>16:00 – Eating of lättys</li>
        <li>19:30 – Ice hockey Geneva Servettes</li>
      </ul>
      <h3>Come and celebrate or don&apos;t come</h3>
      <div className="image_container"><img src="./assets/img/9-luokka.jpg" alt="Teemo Tebest" /></div>
      <h1>To get you into the mood (or to warn you)</h1>
      <div className="video_container"><iframe width="100%" height="" title="Youtube video" src="https://www.youtube.com/embed/D0SStMBVtas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
    </div>
  );
}
export default App;
