import React, { Component } from 'react'
import { connect } from "react-redux"
import { createTodo, localtodo, searchtodo } from '../Redux/actions/todoaction'
import TodoListItem from "./TodoListItem"
import { v4 as uuidv4 } from "uuid";
import { Redirect } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';



class Home extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.todos !== this.props.todos) {
            const luser = this.props.todos
            localStorage.setItem('blogdetails', JSON.stringify(luser));
            console.log(prevProps.todos, this.props.todos)
        }
        if (prevProps.res !== this.props.res) {
            this.setState({ answer: this.props.res })
            console.log(this.props.res, prevProps.res)
        }
    }
    componentDidMount() {
        const rememberMe = localStorage.getItem('blogdetails')
        if (rememberMe !== null) {
            const userp = JSON.parse(rememberMe)
            this.props.localtodo(userp)
        }
        this.setState({ answer: this.props.res })
    }
    state = {
        blogtitle: "",
        blogpara: "",
        search: "",
        answer: ""
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.multilineTextarea.style.height = 'auto';
        this.multilineTextarea.style.height = this.multilineTextarea.scrollHeight + 'px'
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const todo = { blogtitle: this.state.blogtitle, blogpara: this.state.blogpara }
        console.log(todo)
        this.props.createTodo(todo)
        const luser = this.props.todos
        localStorage.setItem('blogdetails', JSON.stringify(luser));
        this.setState({ blogtitle: "", blogpara: "" })
    }
    logout = (e) => {
        this.props.history.push("/")
    }
    handleAnswer = () => {
        this.props.history.push("/s")
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.logname !== null ?
                    <>
                        <h1>NOTES_APP</h1>
                        <GoogleLogout
                            buttonText="Logout"
                            onLogoutSuccess={this.logout}
                        >
                        </GoogleLogout>
                        <h3>{this.props.logname}</h3>
                        <h3>{this.props.logemail}</h3>

                        <input type="text" name="blogtitle" value={this.state.blogtitle} onChange={this.handleChange} placeholder="Title" />
                        <br />
                        <textarea value={this.state.blogpara} name="blogpara" onChange={this.handleChange} placeholder="Write your Notes"
                            ref={ref => this.multilineTextarea = ref}
                            rows="25" cols="180" />
                        <br />
                        <input type="submit" onClick={this.handleSubmit} value="Create Notes" />
                        <div>
                            {this.props.todos !== null ? this.props.todos.map(todo => (
                                <TodoListItem key={uuidv4()} todo={todo} />
                            )) : ""}
                        </div>


                    </> : <Redirect to="/" />}

            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        logname: storeState.loginState.name,
        logemail: storeState.loginState.email,
        todos: storeState.todoState.todos,
        res: storeState.todoState.res,
    }
}

export default connect(mapStateToProps, { createTodo, localtodo, searchtodo })(Home)