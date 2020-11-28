import React, { Component } from 'react'
import {searchtodo } from '../Redux/actions/todoaction'
import { connect } from "react-redux"

class Result extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.res}</h1>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        resi: storeState.todoState.resi,
    }
}

export default connect(mapStateToProps,{searchtodo})(Result)