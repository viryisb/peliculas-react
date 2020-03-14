import React from 'react';
import './movie.css';

class Movie extends React.Component{
    constructor (props){
        super()
    }

render(){
    return(
    <div className="single-movie">{this.props.title}
    
        <p title="titulo de la pelicula"/>
      </div>

    )
}
}

export default Movie;