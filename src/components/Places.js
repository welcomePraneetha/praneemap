import React from "react";

class Delhi extends React.Component {
  
  //Render function of place
  render() {
    return (
      <li
        role="button"
        className="place"
        tabIndex="2"
        onKeyPress={this.props.openInfoWindow.bind(
          this,
          this.props.data.marker
        )}
        onClick={this.props.openInfoWindow.bind(this, this.props.data.marker)}
      >
        {this.props.data.longname}
      </li>
    );
  }
}

export default Delhi;
