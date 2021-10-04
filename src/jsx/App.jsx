import React, {Component} from 'react';
import style from './../styles/styles.less';

import Confetti from 'react-confetti';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={true} className={style.rain} />
        <h1>Welcome to my fiesta</h1>
        <div className={style.image_container}><img src="img/teemo 2vuotias.jpg" /></div>
        <h3>When: 16 October</h3>
        <h3>Where: Blvr du Pont d'Arve 22</h3>
        <h3>What: A day of fun and dandy</h3>
        <div className={style.image_container}><img src="img/IMG_1260.jpeg" /></div>
        <h1>Exact Schedule</h1>
        <ul>
          <li>13:00 – Ping pong championship games</li>
          <li>16:00 – Teemo organised quiz + making of lättys</li>
          <li>16:00 – Drinking Gin+tonic</li>
          <li>16:00 – Eating of lättys</li>
          <li>19:30 – Ice hockey Geneva Servettes</li>
        </ul>
        <h3>Come and celebrate or don't come</h3>
        <div className={style.image_container}><img src="img/9-luokka.jpg" /></div>
        <h1>To get you into the mood (or to warn you)</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oZjf2SWHYYE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );
  }
}
export default App;