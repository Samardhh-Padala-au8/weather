import React, { Component } from 'react'
import {deleteTodo,updateTodo} from "../Redux/actions/todoaction"
import {connect} from "react-redux";

class TodoListItem extends Component {
    state = {
        blogtitle: this.props.todo.blogtitle,
        blogpara: this.props.todo.blogpara
    }
    handleDelete = e=>{
        this.props.deleteTodo(this.props.todo.blogtitle)
     }
     handleUpdate = e =>{
         console.log(this.props)
         this.props.updateTodo(this.props.todo.blogtitle)
         this.setState({blogpara:this.props.todo.blogpara})
     }
    render() {
        return (
            <div>
                <p><b>Title: </b>{this.state.blogtitle}</p>
                <p><b>Info : </b>{this.state.blogpara}</p>
                <button onClick={this.handleDelete} className="btn1">Delete Notes</button>
                <button onClick={this.handleUpdate} className="btn2">Update Notes</button>
            </div>
        )
    }
}

export default connect(null,{deleteTodo,updateTodo})(TodoListItem)
