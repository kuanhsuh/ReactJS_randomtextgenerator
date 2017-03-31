import React, { Component } from 'react';

//import Components
import Header from '../components/Header'
import Input from '../components/Input'
import Display from '../components/Display'

//import Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';


class App extends Component {

  componentDidMount(){
    this.props.actions.fetchData()
  }

  render() {

    const {text} = this.props.text;
    const {fetchData} = this.props.actions;

    return (
      <div className="container">
        <Header />
        <Input fetch={fetchData}/>
        <Display text={text}/>
      </div>
    );
  }
}

App.propTypes = {
  text: React.PropTypes.object,
  fetchData: React.PropTypes.func
}


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
const mapStateToProps = (state) => {
  return {
    text: state
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
