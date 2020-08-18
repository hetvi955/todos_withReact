import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitems extends Component {

    getLine=() =>{
         
        if(this.props.todo.done){
            return{
                textDecoration:'line-through',
                backgroundColor:'green',
                padding: '5px'
            }
        }else{
            return{
                textDecoration:'none',
                padding: '5px'
            }
        }
        
    };



    render() {
        const{id, title}=this.props.todo;
    
        return (
            <div style={this.getLine()}>
                <p>
                    <input type='checkbox' style={{margin:'10px'}} 
                    onChange= {this.props.markDone.bind(this,id)} /> 
                    {title}
                    
                    <button
                    onClick={this.props.deletetodo.bind(this,id)}
                    
                    style={{background:'red',
                    color: 'whitesmoke',
                    border: '1px solid grey',
                    padding:'5px',
                    fontFamily:'tahoma',
                    fontSize:'12px', 
                    float:'right',
                    margin:'18px',
                    cursor:"pointer",
                    borderRadius:'10%'     
                    }}
                    >Delete Todo</button>
                    </p>
            </div>
        )
    }
};

Todoitems.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default Todoitems
