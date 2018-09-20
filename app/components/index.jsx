import React, {Component} from "react";

export default class FirstReactCompnent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            k: 'fishing fishing fishing'
        };
    }


     render(){
      return (
       <div>  hello! webpack+ hotdev + react is easy now {this.state.k} </div>
      )  
    }


}
