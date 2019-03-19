import React, { Component } from "react";
import FirstDay from "./FirstDay";
// import ProductTable from "./ProductTable.js";

class MeteoBulletin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="meteoBulletin">
        <div>
          <h2>La Réunion</h2>
        </div>
        <FirstDay newItem={this.props.item} />
      </section>
    );
  }
}

export default MeteoBulletin;
