import React from "react"
import PropTypes from "prop-types"
import {Navi} from "./Navi"
class HelpMain extends React.Component {
  
  render () {
    const convos = this.props.convosAry;
    const language = this.props.language.toUpperCase();

    const listConvos = convos.reverse().map((convo,i)=>
      <div className="card mb-3" key={i}>
        <div className="card-header">{convo.title} </div>
        <div className="card-body d-inline-flex justify-content-between">
          <div className="col-8">{convo.question}</div>
          {/* <div className="col-4 text-right"><a href="#">{convo.qTally} replies</a></div> */}
        </div>
      </div>
    ); 
    return (
      <div>
        <Navi />
        <div className="container mt-5">
          <div className="row mb-5">
            <h1>{language+" "}Questions</h1>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-8">
              <div className="card mb-3">
                <div className="card-header">
                  
                </div>
                <div className="card-body text-right">
                  <a className="d-block" href="#">Post a question</a>
                </div> 
              </div>
              {listConvos} 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
HelpMain.propTypes = {
  convosAry: PropTypes.array,
  language: PropTypes.string
};
// export default HomeHelp
export default HelpMain
