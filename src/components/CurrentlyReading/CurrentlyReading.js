import React, { Component } from 'react'
import Book from '../Book/Book'
import '../CurrentlyReading/CurrentlyReading.css'

export default class CurrentlyReading extends Component {

    constructor(props){
        super(props)

        this.state = {
            shelfs: ["Currently Reading","Read","Want To Read"],
        }
    }
    render() {
        return (
            <div>
                <h2>Currently Reading</h2>
                {
                    console.log('Props cureently Reading ',this.props)
                }
                <hr></hr>
                {
                    this.props.books.map(book=>{
                        return <Book book={book} shelfs={this.state.shelfs} handleChange={this.props.handleChange}></Book>
                    })
                }
            </div>
        )
    }
}
