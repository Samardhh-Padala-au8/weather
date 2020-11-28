import React, { Component } from 'react'

 class Todon extends Component {
    state = {
        blogtitle: this.props.todo.blogtitle,
        blogpara: this.props.todo.blogpara
    }
    render() {
        return (
            <div>
            <p><b>Title : </b>{this.state.blogtitle}</p>
            <p><b>Info : </b>{this.state.blogpara}</p>
        </div>
        )
    }
}

export default Todon
