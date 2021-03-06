import React from 'react';

class Navbar extends React.Component {
    constructor (props){
        super()
        this.state={
            pages:props.pages,
            currentPage:props.currentPage
        }
    }
    createList(){
        let pages=this.state.pages
        let list=[]
        for (let i=0;i<pages.length;i++){
            let page=pages[i]

            if (page.id!=='searchbar'){
                list.push(
                    <li id={page.id} key={page.id}><button onClick={()=>{this.props.handlers(page.id)}}> {page.name}</button> </li>
                )
            }
        }
        return list
    }
    render (){

        return(
        <ul>{this.createList()}
        </ul>       
        )
    }
}
export default Navbar;
