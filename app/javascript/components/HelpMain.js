import React from "react"
import PropTypes from "prop-types"
import {Navi} from "./Navi"
class HelpMain extends React.Component {
  
  render () {
    const jsHConvos =[
      {id:'convo_1',title:'My onClick wont work',question:'this is my question',qTally:6},
      {id:'convo_2',title:'Event Listeners',question:'second question',qTally:3},
      {id:'convo_3',title:'I cant even',question:'my app literally blew up my computer',qTally:5} 
    ];
    const listConvos = jsHConvos.reverse().map((convo,i)=>
      <div className="card mb-3" key={convo.id}>
        <div className="card-header">{convo.title} </div>
        <div className="card-body d-inline-flex justify-content-between">
          <div className="col-8">{convo.question}</div>
          <div className="col-4 text-right"><a href="#">{convo.qTally} replies</a></div>
        </div>
      </div>
    ); 
    return (
      <div>
        <Navi />
        <div className="container mt-5">
          <div className="row mb-5">
            <h1>JS Questions</h1>
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

export default HelpMain
