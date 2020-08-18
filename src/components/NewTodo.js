import React, { Component } from 'react'

export default class NewTodo extends Component {
    state={
        name:''
    };

    //defien submitTodo
    submitTodo= (e)=>{
        //to prevent from submitting to the actual file
        e.preventDefault();
        this.props.newTodo(this.state.name);
        //set back to blank
        this.setState({name:''});


    };

    //define onChange
    onChange=(e)=>
        this.setState({name: e.target.value});
    
    render() {
        return (
           <form onSubmit= {this.submitTodo}>
               <input type="text" name="name" placeholder="add new todo!"
               value={this.state.name} 
               onChange={this.onChange}
               style={{padding:"16px"}}/>
               
               <input type="submit" value="Add!" className="btn"/>
           </form>
           
        )
    }
}
