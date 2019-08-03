import React, { Component } from 'react';
 import Data from './Data';

 
export default class Todos extends Component {
  state = {

    row:[
      {id:1,
        name:"jo",
        Color:"red",
        food:"potato",
        location: {S:2 , R:2},
        update:<input type="text" placeholder="section" style={{ width:"50px" }}/>
      },
      {
        id:2,
        name:"x",
        Color:"whit",
        food:"pizza",
        location: {S:3 , R:4},
        update:<input type="text" placeholder="section" style={{ width:"50px" }}/>
      },
      {id:3,
        name:"zee",
        Color:"blue",
        food:"chicken",
        location: {S:5 , R:6},
        update:<input type="text" placeholder="section" style={{ width:"50px" }}/>
      },
      {id:4,
        name:"tre",
        Color:"green",
        food:"rice",
        location: {S:4 , R:1},
        update:<input type="text" placeholder="section" style={{ width:"50px" }}/>
      },
    ]

  };
  render() {
    return (
      <>
        <table style={{width:"100%", border: "1px solid black"}}>
            <tr>
              <th style={{ border: "1px solid black"}}>#</th>
              <th style={{ border: "1px solid black"}}>Name</th>
              <th style={{ border: "1px solid black"}}>Color</th>
              <th style={{ border: "1px solid black"}}>Fav Food</th>
              <th style={{ border: "1px solid black"}}>location</th>
              <th style={{ border: "1px solid black"}}> Update location</th>
            </tr>
            {this.state.row.map(elem=> (<Data  y={elem}/>)     ) }


          </table >
          
      </ >
    );
  }
}
