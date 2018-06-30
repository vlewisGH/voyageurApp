import React from "react"
import PropTypes from "prop-types"
export class HomeHelp extends React.Component {
  render () {
    // const jsHNotesID1 = [
    //   {},
    //   {},
    //   {},
    //   {}
    // ];
    // const jsHNotesID2 = [
    //   {},
    //   {}
    // ];

    const langAry = this.props.languagesAry;
    
    const rendLang = langAry.map((obj,i)=>
      <div className="col-6 " key={'lang_'+i}><a href={"/help/"+obj.id} className="d-block p-2">{obj.lang}</a></div>
    );

    return (
      <div className="main_div col-6 border-right border-light text-center">
        <h1 className="mt-5 mb-3 text-secondary">Help Me!</h1>
        <div className="col-9 centerer">
          <div className="row">
            {rendLang}
            <br />
          <br />
          <a href='/help' className="centerer" ><h5>Post a question</h5></a>
          </div>
        </div> 
      </div>
    );
  }
}

HomeHelp.propTypes = {
  languagesAry: PropTypes.array
};
export default HomeHelp
