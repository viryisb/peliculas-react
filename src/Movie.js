import React from 'react';

class Movie extends React.Component{
    constructor (props){
        super()
    }

render(){
    return(
        <div className="single_movie">
        <img alt="pelicula"
        
        src="./public/no-image.png"
        />
        <p>titulo-pelicula</p>
      </div>

    )
}
}

export default Movie.js;