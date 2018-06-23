import React from "react"
import PropTypes from "prop-types"
class Test extends React.Component {
  render () {
    return (
      <React.Fragment>
        Test Str: {this.props.testStr}
      </React.Fragment>
    );
  }
}

Test.propTypes = {
  testStr: PropTypes.string
};
export default Test
