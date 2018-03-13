import React from "react";
import ReactDOM from "react-dom";
class Component extends React.Component {
    edit(){
        alert("Editing Comment")
    }
    remove(){
        alert("Removing Comment")
    }
    render(){
        return (
        <div className="commentContainer">
            <div className="commentText">{this.props.children}</div>
            <button onClick={this.edit} className="button-primary">Edit</button>
            <button onClick={this.remove} className="button-danger">remove</button>
        </div>);
    }
};


ReactDOM.render(
<div className="board">
<Component> Hey now</Component>
<Component> Beans</Component>
<Component> Tuna</Component>
<Component> Rush</Component>
        </div>, 
        document.getElementById('example'));