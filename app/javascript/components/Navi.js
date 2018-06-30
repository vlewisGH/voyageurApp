import React from "react"
import PropTypes from "prop-types"

export class Navi extends React.Component {
  render () {
    return (
          <div className="header">
            <div className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
              <a className="navbar-brand" href="/">Voyageur Forums</a>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-small btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
    );
  }
}

export default Navi
