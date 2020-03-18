import React from 'react';
import './movie.css';

class Movie extends React.Component{
    constructor (props){
        super()
    }

     //<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ma-poster-pelicula-blumhouse-1550047702.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="movie"/>
render(){
    return(
    <div className="single-movie">
    {this.props.movie.title}
    <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2"+this.props.movie.poster_path}/>
        
        
      </div>

    )
}
}

export default Movie;