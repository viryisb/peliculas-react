import React from 'react';
import settings from './settings.json';
const axios = require('axios').default;

class MoviesCategory extends React.Component{
    constructor (props){
        super()
        this.state = {
          currentPage:props.currentPage,
          movies: []
          }
        }

      async componentWillMount(){
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.currentPage.id}?api_key=${settings.apikey}`);
        console.log(response);
        this.setState ((state,props)=>{return {movies:response.data}}) 
      }
        
  render () {
    return (
      <div>
      <h2>{this.props.currentPage.title}</h2>

      <div className="movies">
   {/*    {this.state.movies.map( )} */}
      </div>
    </div>
    )
  }
};



export default MoviesCategory;
