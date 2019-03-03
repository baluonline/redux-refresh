import React, { Component } from "react";
import { connect } from 'react-redux';

class SongsList extends Component {
  render() {
    return (
      <div>
        Songs list
      </div>
    );
  }
}

export default connect()(SongsList);
