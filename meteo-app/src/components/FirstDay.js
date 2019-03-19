import React, { Component } from "react";
// import ProductRow from "./ProductRow";

class FirstDay extends Component {
  render() {
    const { newItem } = this.props;
    // console.log(newItem);
    return (
      <section className="FirstDay">
        <div>
          <h2>hello table</h2>
          {/* <p>{newItem.meteo.bulletin.sujet}</p> */}
          {/* <ul>
            {newItem.meteo.bulletin.map(oneBorderCountry => {
              return (

              );
            })}
          </ul> */}
        </div>
      </section>
    );
  }
}
export default FirstDay;
