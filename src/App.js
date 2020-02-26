import React from 'react';
import Navbar from './Navbar.js';
/* import Pageloader from './Pageloader.js';
import Searchbar from './Searchbar.js'; */
import './App.css';
//api key  6a80ce43901871f9a88ecce5f10ac287
class App extends React.Component {
  constructor (props){
    super()
    let pages=[{id:'home',
      name:'home',
    link:'/home',
  logo:'./assets/logo-ada.svg',
},
{id:'top_rated',
  name:'Top rated',
link:'/top_rated',
logo: './assets',
},
{id:'popular',
  name:'popular',
link:'/popular',
logo:'',
},
{id:'upcoming',
  name:'upcoming',
link:'/upcoming',
logo:'',
},
{id:'now_playing',
  name:'now playing',
link:'./now_playing',
logo:'',
},
{id:'',
  name:'',
link:'',
logo:'',
},
]
/* let currentPath=this.props.location.pathname? this.props.location.pathname.split('/')[1]: "home"
let currentPage= pages.find((page)=>page.id===currentPath) */
let currentPage=pages[0]
this.state={pages:pages,currentPage:currentPage}
  }
  render(){
    return(
<Navbar pages={this.state.pages} currentPage={this.state.currentPage} />
    )
  }
}

export default App;
