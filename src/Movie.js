import React from 'react';
import './movie.css';

class Movie extends React.Component{
    constructor (props){
        super()
    }

render(){
    return(
    <div className="single-movie">{this.props.title}
    <img src= "./assets/no-image.png" alt="movie"></img>
        <p>titulo de la pelicula</p>
      </div>

    )
}
}

export default Movie.js;