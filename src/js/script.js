import React from "react";
import ReactDOM from "react-dom";
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked:true
        }
        this.getInitialState=this.getInitialState.bind(this);
      }
   getInitialState(){
      this.setState ({checked:false});
   }
    render(){
        var msg;
        if(this.state.checked){
            msg="checked"
        }else{
            msg="unchecked"
        }
        return (
        <div className="commentContainer">
            <input onInput={getInitialState} type="checkbox" />
            <h3>Checkbox is {msg}</h3>
        </div>);
    }
};


ReactDOM.render(
<div>
<Checkbox /> 
        </div>, 
        document.getElementById('example'));