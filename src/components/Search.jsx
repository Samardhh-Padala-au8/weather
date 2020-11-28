import React, { Component } from 'react'
import { searchtodo } from '../Redux/actions/todoaction'
import { connect } from "react-redux"


class Search extends Component {
    state={
        search:"",
        answer:""
    }
    handleSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleResult = () => {
        this.props.searchtodo(this.state.search)
        let a = this.props.todos.filter(todo=>(todo.blogtitle===this.state.search))
        console.log(a)
            if(a.length>0){
                this.setState({answer:a[0].blogpara})
            }
            else{
                this.setState({answer:"sorry no such blog existed"})
            }
        this.setState({ search:"" })
    }
    render() {
        return (
            <div>
                <h2>Search Blog using Blogtitle</h2>
                <input type="text" name="search" value={this.state.search} onChange={this.handleSearch} />
                <button onClick={this.handleResult}>Search the blog</button>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        resi: storeState.todoState.resi,
        todos: storeState.todoState.todos,
    }
}

export default connect(mapStateToProps, { searchtodo })(Search)