import React from 'react';
import '/movie.css';

class Movie extends React.Component{
    constructor (props){
        super()
    }

render(){
    return(
    <div className="single-movie">{this.props.movieId}
   
    </div>
    )
}
}

export default Movie.js;