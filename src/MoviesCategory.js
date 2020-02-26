import React from 'react';
import src from '*.bmp';

class MoviesCategory extends React.Component{
    constructor (props){
        super()
        this.state = {
            movies: []
          }
        }
};

  render () {
    return (
      <div>
        <h2>titulo</h2>

        <div className="movies">
         
        </div>
      </div>
    )
  }


export default MoviesCategory;
