import React from 'react';
import settings from './settings.json';
import Movie from './Movie.js';
const axios = require('axios').default;

class MoviesCategory extends React.Component{
    constructor (props){
        super()
        this.state = {
          currentPage:props.currentPage,
          movies: [],
          page:0
          }
        }

        async componentWillUpdate(){
          await this.getMovies();
        }

        async componentWillMount(){
          await this.getMovies();
        }
        async getMovies(){
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.currentPage.id}?api_key=${settings.apikey}`);
          console.log(response);
          this.setState ((state,props)=>{return {movies:response.data.results}}) 
        }
        handleLoad(){
          //page ++
          //getnew page
          this.setState ((state,props)=>{return {movies:state.movies.concat(response.data.results)}})
          //this.forceUpdate()
        }
      renderMovie(){
      let movies=[]
      this.state.movies.forEach((movie)=>{
        movies.push(<Movie movie={movie}/>)
      })

     return movies
      }
  render () {
    return (
      <div>
      <h2>{this.props.currentPage.name}</h2>

      <div className="movies">
        {this.renderMovie()}
      </div>
      <button onclick>Load more</button>
    </div>
    )
  }
};



export default MoviesCategory;
