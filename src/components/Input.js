import React, { Component } from 'react';


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "4"
    }
  }

  handleChangeInput(e){
    const {fetch} = this.props;
    let currentNum = e.target.value;
    if((currentNum*1) < 1) currentNum = "1";

    this.setState({
      num: currentNum
    })
    fetch(currentNum)
  }

  render() {
    const {num} = this.state;
    return (
      <div className="form-group">
        <label>Number of Paragraphs:(Can't be less than 1)</label>
        <input
          type="number"
          className="form-control"
          value={num}
          onChange={this.handleChangeInput.bind(this)}
         />
      </div>
    )
  }
}

Input.propTypes = {
  fetch: React.PropTypes.func
}

export default Input;
