import React from "react";
import ReactDOM from "react-dom";
class Movie extends React.Component {
    render(){
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.genre}</h2>
        </div>);
    }
};


ReactDOM.render(
<div>
<Movie title="Avatar" genre="action" />
<Movie title="Neon" genre="thriller" />
<Movie title="Mara are mere" genre="fantasy" />
        </div>, 
        document.getElementById('example'));