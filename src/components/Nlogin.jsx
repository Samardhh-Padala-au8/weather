import React, { Component } from 'react'
import Todon from "./Todon"
import { connect } from "react-redux"
import { localtodo } from '../Redux/actions/todoaction'

class Nlogin extends Component {
    componentDidMount() {
        const rememberMe = localStorage.getItem('blogdetails')
        if (rememberMe !== null) {
            const userp = JSON.parse(rememberMe)
            this.props.localtodo(userp)
        }


    }
    handleHome = () => {
        this.props.history.push("/")
    }
    handleAnswer = () => {
        this.props.history.push("/s")
    }
    render() {
        console.log(this.props.todos)
        return (
            <div>
                <h1>View Notes for Nonlogged Users</h1>
                <div>{this.props.todos.length > 0 ? this.props.todos.map(todo => (
                    <Todon key={todo.blogtitle} todo={todo} />
                )) : <h1>No blogs are added</h1>}</div>
                <button onClick={this.handleHome}>Home</button>
            </div>
        )
    }
}
const mapStateToProps = storeState => {
    return {
        logname: storeState.loginState.name,
        logemail: storeState.loginState.email,
        todos: storeState.todoState.todos
    }
}
export default connect(mapStateToProps, { localtodo })(Nlogin)