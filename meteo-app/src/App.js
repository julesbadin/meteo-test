import React, { Component } from "react";
import "./App.css";

import meteo from "./meteo.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { meteoArray: meteo };
  }

  render() {
    const { meteoArray } = this.state;
    return (
      <section className="App">
        {console.log()}
        <section>
          <header>
            <h1>Meteo France</h1>

            <h2>{meteoArray.meteo.bulletin.sujet}</h2>
            <h3>du {meteoArray.meteo.bulletin.date}</h3>
          </header>

          <div>
            <h2>Situation</h2>
            <p>{meteoArray.meteo.bulletin.situation}</p>
          </div>

          <div>
            <h2>Villes</h2>
            <p>
              {meteoArray.meteo.bulletin.ville.map(oneVille => {
                return (
                  <section>
                    <h3>{oneVille.id}</h3>
                    <p>Température : {oneVille.temps}</p>
                    <p>Beaufort : {oneVille.vent_force}</p>
                  </section>
                );
              })}
            </p>
          </div>
        </section>
      </section>
    );
  }
}

export default App;
