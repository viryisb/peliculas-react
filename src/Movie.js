import React from 'react';
import './movie.css';

class Movie extends React.Component{
    constructor (props){
        super()
    }

render(){
    return(
    <div className="single-movie">
    {this.props.movie.title}
    <img alt="movie" src= {"https://image.tmdb.org/t/p/w370_and_h556_bestv2"+this.props.movie.poster_path}/>
        
        
      </div>

    )
}
}

export default Movie;