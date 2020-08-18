import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';


class App extends Component {

//state is like a JS object.
  state= {
    //array of all todos.
    todos:[
      {
        id:1,
        title:'Wake',
        done: false
      },
      {
        id:2,
        title:'Learn react',
        done: false
      },
      {
        id:3,
        title:'make todos app!',
        done: false
      },

    ]
  }

  //if the todo is done.
  markDone=(id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if (todo.id==id){
        todo.done=!todo.done
      }
      return todo;
    })
  });
};

//add new
newTodo=(name)=>{
  const addTodo= {
    id:4,
    title:name,
    done:false
  }
  this.setState({todos: [...this.state.todos, addTodo]})

}

//to delete todo
deletetodo=(id)=>{
  //... grabs all the data of the todo, filter method filters out(removes) 
  // that todo by setting the id to not the mentioned id.
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]
  });
}

  //render needed to render the components in browser.
  render(){
    
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={props =>(
            <React.Fragment>
              <Link to='/new'  className="link"> + Add New</Link>
              <p style={{color:"teal", fontFamily:'tahoma', fontSize:'20px'}}>Check the box to mark the todo as completed!</p>
              
              <Todos todos={this.state.todos} markDone={this.markDone}
              deletetodo={this.deletetodo} />


            </React.Fragment>
          )}>

        </Route>
        
         <Route path='/new' component={NewTodo}>
         <Link to='/' className="link">Home</Link>
         <NewTodo newTodo={this.newTodo} />
         </Route>
      
        
      </div>

      </Router>
      
    );
  }

}

export default App;
