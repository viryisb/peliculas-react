import React from 'react';
import './movie.css';

class Movie extends React.Component{
    constructor (props){
        super()
    }

render(){
    return(
    <div className="single-movie">
     <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ma-poster-pelicula-blumhouse-1550047702.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="movie"/>
        
        
      </div>

    )
}
}

export default Movie;