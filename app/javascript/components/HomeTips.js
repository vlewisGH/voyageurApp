import React from "react"
import PropTypes from "prop-types"

export class HomeTips extends React.Component {
  render () {
    return (
      <div className="main_div col-6 border-right border-light text-center">
      <h1 className="mt-5 mb-3 text-secondary">Tips and tricks!</h1>
      <div className="col-9 centerer">
        <div className="row">
          <div className="col-6 "><a href="#" className="d-block p-2">HTML <span className="badge badge-light">5</span></a></div>
          <div className="col-6 "><a href="#" className="d-block p-2">CSS</a></div>
          <div className="col-6 "><a href="#" className="d-block p-2">JS</a></div>
          <div className="col-6 "><a href="#" className="d-block p-2">JQUERY</a></div>
          <div className="col-6 "><a href="#" className="d-block p-2">JAVA</a></div>
          <div className="col-6 "><a href="#" className="d-block p-2">SQL</a></div>
          <br />
          <br />
          <a href="#" className="centerer" ><h5>Add a tip</h5></a>
        </div>
      </div> 
    </div>
    );
  }
}

export default HomeTips
