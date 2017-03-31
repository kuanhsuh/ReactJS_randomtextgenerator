import React, { Component } from 'react';


class Display extends Component {

  createMarkup() { return {__html: this.props.text}; }

  render() {
    return (
      <div className="well well-lg" dangerouslySetInnerHTML={this.createMarkup()}></div>
    )
  }
}

Display.propTypes = {
  text: React.PropTypes.string
}

export default Display;
