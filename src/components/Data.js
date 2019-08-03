import React, { Component } from 'react';


export default class Data extends Component {
    state = {

    };


    // change =()=>{
    //   this.setState({this.props.id:2})
    // }
    render() {
      return (
        <>

        <tr>
      <td style={{ border: "1px solid black"}}> {this.props.y.id}</td>
      <td style={{ border: "1px solid black"}}> {this.props.y.name}</td>
      <td style={{ border: "1px solid black"}}> {this.props.y.Color}</td>
      <td style={{ border: "1px solid black"}}> {this.props.y.food}</td>
      <td style={{ border: "1px solid black"}}> `S:{this.props.y.location["S"]}, R:{this.props.y.location.R}`</td>
      <td style={{ border: "1px solid black"}}>{this.props.y.update}<input type="text" placeholder="Room" style={{ width:"50px" }}  /> <button type="submit" onClick={this.change} style={{ backgroundColor: "blue" , display:"block", width:"100px" }}>location</button> </td>

        </tr>
        
        </>
      );
    }
  }