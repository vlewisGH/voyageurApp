import React from "react"
import PropTypes from "prop-types"
class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {openOrClose: false};
    this.clickToggle = this.clickToggle.bind(this);
  }
  clickToggle(){
    this.setState({
      openOrClose: true
    })
  }
  render () {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default Toggle
