import React, { Component } from 'react'
import { getAll } from '../../BookAPI'

export default class Read extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h2>Read</h2>
                <hr></hr>
                {
                    getAll().then(rec=>console.log(rec)) 
                   
                }
            </div>
        )
    }
}
