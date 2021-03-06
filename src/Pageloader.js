import React from 'react';
import Search from './Search.js';
import MoviesCategory from './MoviesCategory.js';
import Home from './Home.js'; 
class Pageloader extends React.Component {
    constructor (props){
        super()
        this.state={
            pages:props.pages,
            currentPage:props.currentPage
        }

    }

    pageSelector(){
    let page
    let currentPage=this.props.currentPage.id
    if (currentPage==="search"){
        page=<Search/>

    } else if (currentPage==="home"){
        page=<Home pages= {this.props.pages} />
    }
    else { page=<MoviesCategory currentPage={this.props.currentPage}/>

    }
    return page
    }
    render(){
        return(
            <div>
                {this.pageSelector()}
            </div>
        )
    }
}
export default Pageloader;