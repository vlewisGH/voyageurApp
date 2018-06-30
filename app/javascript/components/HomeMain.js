import React from "react"
import PropTypes from "prop-types"
import {Navi} from "./Navi"
import {HomeHelp} from "./HomeHelp"
import {HomeTips} from "./HomeTips"

class HomeMain extends React.Component {
  render () {
    return (

      <div className="wrapper">
        <Navi />
        <div className="container border mt-5">
          <div className="row">
            <HomeHelp languagesAry={this.props.languages}/>
            <HomeTips />
          </div>
        </div>
        <div className="footer_style row bg-light">
          
        </div>
      </div>
    );
  }
}

HomeMain.propTypes = {
  languages: PropTypes.array
};
export default HomeMain
