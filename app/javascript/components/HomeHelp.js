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
    const jsHConvos =[
      {id:'convo_1',title:'React vs Angular'},
      {id:'convo_2',title:'React vs Angular'},
      {id:'convo_3',title:'React vs Angular'},
      {id:'convo_4',title:'React vs Angular'},
      
    ];
    const langAry = [
      {lang:'HTML',
       noOfConvos: 2
      },
      {lang:'CSS',
       noOfConvos: 3
      },
      {lang:'JS',
       noOfConvos: jsHConvos.length
      },
      {lang:'JQuery',
       noOfConvos: 6
      },
      {lang:'JAVA',
       noOfConvos: 10
      },
      {lang:'SQL',
       noOfConvos: 7
      }
    ];
    
    const rendLang = langAry.map((obj,i)=>
      <div className="col-6 " key={'lang_'+i}><a href="/help" className="d-block p-2">{obj.lang} <br /><span className="badge badge-light">{obj.noOfConvos}</span></a></div>
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

export default HomeHelp
