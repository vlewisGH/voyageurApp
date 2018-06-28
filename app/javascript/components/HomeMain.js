import React from "react"
import PropTypes from "prop-types"
import {Navi} from "./Navi"
import {HomeHelp} from "./HomeHelp"
import {HomeTips} from "./HomeTips"

class HomeMain extends React.Component {
  render () {
  
      // ConvoObj: {this.props.convoAry}
      // NotesObj: {this.props.notesAry}
    return (

      <div className="wrapper">
        <Navi />
        <div className="container border mt-5">
          <div className="row">
            <HomeHelp />
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
  convoAry: PropTypes.array,
  notesAry: PropTypes.array
};
export default HomeMain
